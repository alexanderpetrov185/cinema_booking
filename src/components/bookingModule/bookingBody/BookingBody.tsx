import React, { useState } from "react";
import styles from "./bookingBody.module.scss";
import { saveSelectedSession } from "../../../redux/reducers/actionCreators";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/redux";
import useFetch from "../../../http/hooks/useFetch";
import SessionService from "../../../http/services/SessionServices";
import SeatsTable from "../seatsTable/SeatsTable";
import { IFetchBooking } from "../models/IFetchBooking";
import { ReactComponent as Screen } from "../../../static/icons/screen.svg";

type Details = {
  hallNumber: number;
  date: string;
  price: number;
  sessionId: string;
};

type Props = {
  nowDate: Date;
  details: Details[];
};

const BookingBody = ({ details, nowDate }: Props) => {
  const dispatch = useAppDispatch();
  const session = useAppSelector((state) => state.scheduleReducer.session);
  const {
    data,
    reFetch,
  }: { data: IFetchBooking; reFetch: () => Promise<void> } = useFetch(
    `/session/${session.sessionId}`,
  );
  const [selectedSession, setSelectedSession] = useState<string>(
    session.sessionId,
  );
  const [selectedSeat, setSelectedSeat] = useState<object[]>([]);

  const buyTickets = async (selectedSeat: object[]) => {
    const seatsIds: string[] = selectedSeat.map<string>(
      (seat: any) => seat._id,
    );
    const res = await SessionService.bookSeat(session.sessionId, seatsIds);
    if (res.status === 200) {
      await reFetch();
      setSelectedSeat([]);
    }
    return res.data;
  };

  const cancelSelect = (seat: any) => {
    const deletedFromState = selectedSeat.filter(
      (seatInState) => !Object.is(seatInState, seat),
    );
    setSelectedSeat([...deletedFromState]);
  };

  const changeSession = (details: Details) => {
    setSelectedSession(details.sessionId);
    dispatch(
      saveSelectedSession({
        sessionId: details.sessionId,
        price: details.price.toString(),
        sessionTime: details.date.toLocaleString().slice(11, -8),
      }),
    );
  };

  React.useEffect(() => {
    setSelectedSeat([]);
  }, [selectedSession]);

  return (
    <div className={styles.bookingBody}>
      <ul className={styles.availableTime}>
        {details.map((details, index) => {
          if (new Date(details.date.slice(0, -1)) > nowDate) {
            return (
              <li key={index}>
                <button
                  onClick={() => changeSession(details)}
                  className={
                    details.sessionId === selectedSession
                      ? `${styles.sessionButton} ${styles.active}`
                      : styles.sessionButton
                  }
                >
                  {details.date.toLocaleString().slice(11, -8)}
                </button>
                <span>{details.price}₽</span>
              </li>
            );
          } else {
            return null;
          }
        })}
      </ul>
      <div className={styles.movieSchema}>
        <div className={styles.shortInfo}>
          <span>2D 12+ Зал №{`${data?.hallNumber}`}</span>
          <ul className={styles.seatsInfo}>
            <li>
              <div className={styles.free} />
              {`Свободно ${data?.price}₽ `}
            </li>
            <li>
              <div className={styles.selected} />
              Выбрано
            </li>
            <li>
              <div className={styles.booked} />
              Занято
            </li>
          </ul>
        </div>

        <Screen className={styles.screenSvg} />

        <SeatsTable
          data={data}
          selectedSeat={selectedSeat}
          setSelectedSeat={setSelectedSeat}
          cancelSelect={cancelSelect}
        />

        <div className={styles.selectedInfo}>
          <div className={styles.selectedTicketGroup}>
            {selectedSeat.length > 0 &&
              selectedSeat.map((seat: any, index: number) => {
                const seatPosition = seat.position.split(" ");
                return (
                  <div
                    className={styles.selectedTicket}
                    key={index}
                    onClick={() => cancelSelect(seat)}
                  >
                    <span>
                      Ряд {seatPosition[0]}, Место {seatPosition[1]}
                    </span>
                    <span>🟢{`${data.price}₽ `}</span>
                  </div>
                );
              })}
          </div>
          <button
            className={styles.buttonBuy}
            onClick={() => buyTickets(selectedSeat)}
          >
            Купить{" "}
            {selectedSeat.length > 0 &&
              ` ${data.price * selectedSeat.length}₽ `}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingBody;
