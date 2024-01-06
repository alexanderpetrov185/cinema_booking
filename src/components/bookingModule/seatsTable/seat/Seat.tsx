import React from "react";
import styles from "./seat.module.scss";

type Props = {
  isSeatSelected: boolean;
  setSelectedSeat: React.Dispatch<React.SetStateAction<object[]>>;
  cancelSelect: (seatToRender: any) => void;
  seatNumber: number;
  seatToRender: any;
};

const Seat = ({
  isSeatSelected,
  cancelSelect,
  seatNumber,
  setSelectedSeat,
  seatToRender,
}: Props) => {
  if (seatToRender.available) {
    return (
      <td
        className={
          isSeatSelected ? `${styles.seat} ${styles.selected}` : styles.seat
        }
        onClick={() => {
          isSeatSelected
            ? cancelSelect(seatToRender)
            : setSelectedSeat((state) => [...state, seatToRender]);
        }}
      >
        {seatNumber}
      </td>
    );
  } else {
    return <td className={`${styles.seat} ${styles.unavailable}`}>✖</td>;
  }
};

export default Seat;
