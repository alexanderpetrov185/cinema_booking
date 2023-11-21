import React from "react";
import "./bookingModule.scss";
import CloseIcon from "@mui/icons-material/Close";
import { useAppSelector } from "../../redux/hooks/redux";

type Props = {
  nowDate: Date;
  title: string;
  details: {
    hallNumber: number;
    date: string;
    price: number;
    sessionId: string;
  }[];
  setModalIsOpen: (arg0: boolean) => void;
};

const BookingModule = ({ nowDate, title, details, setModalIsOpen }: Props) => {
  const dateDay = new Date(
    useAppSelector((state) => state.scheduleReducer.date),
  ).toLocaleDateString("ru");

  return (
    <div className={"bookingModule"}>
      <div className="buttonsBlock">
        <CloseIcon
          className={"btnClose"}
          onClick={() => setModalIsOpen(false)}
        />
      </div>
      <div className="bookingHeader">
        <div className="bookingInfo">
          <span className={"bookingTitle"}>{title}</span>
          <span>{dateDay} Кинотеатр Cinema</span>
        </div>
      </div>
      <div className="bookingFooter">
        <span className={"support"}>Поддержка: 8 495 230-01-24</span>
        <a href="/" className="needHelp">
          Мне не пришёл билет
        </a>
        <span className="credits">2023 ©ООО«Кинокасса»</span>
      </div>
    </div>
  );
};

export default BookingModule;
