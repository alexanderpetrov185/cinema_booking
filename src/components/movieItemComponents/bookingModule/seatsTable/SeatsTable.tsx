import React from "react";
import "./seatsTable.scss";
import { IFetchBooking } from "../models/IFetchBooking";
import Seat from "./seat/Seat";

type Props = {
  data: IFetchBooking;
  selectedSeat: object[];
  setSelectedSeat: React.Dispatch<React.SetStateAction<object[]>>;
  cancelSelect: (seat: any) => void;
};

const SeatsTable = ({
  data,
  selectedSeat,
  setSelectedSeat,
  cancelSelect,
}: Props) => {
  const hallSchema: { rows: number; columns: number } = {
    rows: 0,
    columns: 0,
  };

  const lastChair = data?.seatsInfo.at(-1)?.position.split(" ");
  if (lastChair) {
    hallSchema.rows = Number(lastChair[0]);
    hallSchema.columns = Number(lastChair[1]);
  }

  return (
    <table className="seatsTable">
      {[...Array(hallSchema.rows)].map((row, index) => {
        return (
          <tbody key={`tbodyKey${index}`}>
            <tr className="row" key={`rowKey${index}`}>
              <td key={`leftRowNumber${index + 1}`}>{index + 1}</td>
              {data?.seatsInfo
                .slice(
                  hallSchema.columns * index,
                  hallSchema.columns * index + hallSchema.columns,
                )
                .map((seatToRender: any, index: number) => {
                  return (
                    <Seat
                      isSeatSelected={selectedSeat.includes(seatToRender)}
                      cancelSelect={cancelSelect}
                      seatNumber={index + 1}
                      setSelectedSeat={setSelectedSeat}
                      seatToRender={seatToRender}
                    />
                  );
                })}
              <td key={`rightRowNumber${index + 1}`}>{index + 1}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};

export default SeatsTable;
