import React from "react";
import styles from "./sessionCard.module.scss";
import { useAppDispatch } from "../../../redux/hooks/redux";
import {
  saveSelectedDate,
  saveSelectedSession,
} from "../../../redux/reducers/actionCreators";

type Props = {
  title: string;
  genre: string;
  sessionsDetails: {
    hallNumber: number;
    date: string;
    price: number;
    sessionId: string;
    _id: string;
  }[];
  nowDate: Date;
  setModalIsOpen: (arg0: boolean) => void;
};

const SessionCard = ({
  title,
  genre,
  sessionsDetails,
  nowDate,
  setModalIsOpen,
}: Props) => {
  const dispatch = useAppDispatch();
  const tomorrowToSelect = () => {
    dispatch(
      saveSelectedDate(
        new Date(nowDate.setDate(nowDate.getDate() + 1)).toLocaleDateString(
          "en-CA",
        ),
      ),
    );
  };

  return (
    <div className={styles.sessionCard}>
      <h2 className={styles.movieTitle}>{title}</h2>
      <span className={styles.movieGenre}>{genre}</span>
      <div className={styles.movieSessions}>
        {sessionsDetails.map((details, index) => {
          if (new Date(details.date.slice(0, -1)) > nowDate) {
            return (
              <div key={details._id} className={styles.sessionDetails}>
                <button
                  onClick={() => {
                    setModalIsOpen(true);
                    dispatch(
                      saveSelectedSession({
                        sessionId: details.sessionId,
                        price: details.price.toString(),
                        sessionTime: details.date
                          .toLocaleString()
                          .slice(11, -8),
                      }),
                    );
                  }}
                >
                  <span>{details.date.toLocaleString().slice(11, -8)}</span>
                  <span>{details.price}₽</span>
                </button>
                <span className={styles.hallNumber}>
                  Зал {details.hallNumber}
                </span>
              </div>
            );
          } else {
            if (index === sessionsDetails.length - 1) {
              return (
                <button
                  key={details._id}
                  className={styles.tomorrowSessions}
                  onClick={() => tomorrowToSelect()}
                >
                  Сеансы на завтра
                </button>
              );
            } else return null;
          }
        })}
      </div>
    </div>
  );
};

export default SessionCard;
