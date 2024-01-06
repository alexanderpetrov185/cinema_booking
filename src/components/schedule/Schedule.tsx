import React from "react";
import styles from "./schedule.module.scss";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/redux";
import {
  fetchMoviesData,
  saveSelectedDate,
} from "../../redux/reducers/actionCreators";
import { ReactComponent as Calendar } from "../../static/icons/calendar.svg";

const dayOfWeek = new Date().getDay();
const allDays = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];
let dayDates = new Array(6);

const Schedule = () => {
  const dispatch = useAppDispatch();
  const sortDays = allDays.slice(dayOfWeek).concat(allDays.slice(0, dayOfWeek));
  const addDay = (dayCount: number) => {
    const todayDate = new Date();
    return new Date(todayDate.setDate(todayDate.getDate() + dayCount));
  };

  for (let i = 0; i < 7; i++) {
    dayDates[i] = addDay(i);
  }

  const dateFromReducer = new Date(
    useAppSelector((state) => state.scheduleReducer.date),
  );

  const scheduleHandler = (index: number) => {
    const date = dayDates[index].toLocaleDateString("en-CA");
    dispatch(saveSelectedDate(date));
    dispatch(fetchMoviesData(date));
  };

  return (
    <ul className={styles.schedule}>
      <div className={styles.scheduleContainer}>
        {dayDates.map((day: Date, index: number) => {
          return (
            <li
              key={index}
              className={
                dateFromReducer.getDay() === day.getDay()
                  ? `${styles.scheduleDay} ${styles.active}`
                  : styles.scheduleDay
              }
              onClick={() => scheduleHandler(index)}
            >
              {index === 0 ? (
                <span>Сегодня </span>
              ) : index === 1 ? (
                <span>Завтра </span>
              ) : (
                <span>{sortDays[index]}</span>
              )}
              <span>
                {`${day.toLocaleString("default", {
                  day: "numeric",
                })}`}
              </span>
              <span>
                {`${day.toLocaleString("default", {
                  month: "long",
                })}`}
              </span>
            </li>
          );
        })}
        <li className={styles.scheduleDay}>
          <span>Скоро</span>
          <span>
            <Calendar />
          </span>
          <span>Календарь</span>
        </li>
      </div>
    </ul>
  );
};

export default Schedule;
