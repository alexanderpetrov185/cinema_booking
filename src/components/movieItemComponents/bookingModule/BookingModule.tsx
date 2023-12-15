import React from "react";
import "./bookingModule.scss";
import { useAppSelector } from "../../../redux/hooks/redux";
import BookingBody from "./bookingBody/BookingBody";

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
      <button className={"btnClose"} onClick={() => setModalIsOpen(false)}>
        X
      </button>
      <div className="bookingHeader">
        <div className="bookingInfo">
          <h3 className={"bookingTitle"}>{title}</h3>
          <span>{dateDay} Кинотеатр Cinema</span>
        </div>
      </div>
      <BookingBody details={details} nowDate={nowDate} />
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
