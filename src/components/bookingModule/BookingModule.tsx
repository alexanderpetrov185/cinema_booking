import React from "react";
import styles from "./bookingModule.module.scss";
import { useAppSelector } from "../../redux/hooks/redux";
import BookingBody from "./bookingBody/BookingBody";
import ButtonClose from "../buttonClose/ButtonClose";

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
    <div className={styles.bookingModule}>
      <ButtonClose onClick={() => setModalIsOpen(false)} />
      <div className={styles.bookingHeader}>
        <div className={styles.bookingInfo}>
          <h3>{title}</h3>
          <span>{dateDay} Кинотеатр Cinema</span>
        </div>
      </div>
      <BookingBody details={details} nowDate={nowDate} />
      <div className={styles.bookingFooter}>
        <span>Поддержка: 8 495 230-01-24</span>
        <a href="/">Мне не пришёл билет</a>
        <span>2023 ©ООО«Кинокасса»</span>
      </div>
    </div>
  );
};

export default BookingModule;
