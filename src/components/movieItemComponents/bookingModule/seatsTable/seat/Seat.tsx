import React from "react";

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
        className={isSeatSelected ? "selected seat" : "seat"}
        key={`seatKey${seatNumber}`}
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
    return (
      <td className={"seat unavailable"} key={`seatKey${seatNumber}`}>
        ✖
      </td>
    );
  }
};

export default Seat;
