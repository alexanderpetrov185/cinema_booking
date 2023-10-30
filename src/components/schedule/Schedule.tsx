import React from 'react';
import "./schedule.scss";
import {useAppDispatch, useAppSelector} from "../../redux/hooks/redux";
import {saveSelectedDate} from "../../redux/reducers/actionCreators";

const dayOfWeek = new Date().getDay();
const allDays = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
let dayDates = new Array(6)

const Schedule = () => {
    const dispatch = useAppDispatch()
    const sortDays = allDays.slice(dayOfWeek).concat(allDays.slice(0, dayOfWeek))
    const addDay = (dayCount: number) => {
        const todayDate = new Date();
        return new Date(todayDate.setDate(todayDate.getDate() + dayCount))
    }

    for (let i = 0; i < 7; i++) {
        dayDates[i] = addDay(i)
    }

    const dateFromReducer = new Date(useAppSelector((state) => state.scheduleReducer.date))

    return (
        <ul className={"schedule"}>
            {
                dayDates.map((day: Date, index: number) => {
                    return <li key={index}
                               className={dateFromReducer.getDay() === day.getDay() ? "scheduleDay active" : "scheduleDay"}
                               onClick={() => dispatch(saveSelectedDate(dayDates[index].toLocaleDateString("en-CA")))}>
                        {index === 0 ? "Сегодня, " : index === 1 ? "Завтра, " : `${sortDays[index]}, `}{`${day.toLocaleString('default', {
                        day: "numeric",
                        month: 'short'
                    })}`}
                    </li>
                })
            }
            {/*<li className={"scheduleDay calendar"}><img src="/assets/icons/calendar.svg" alt="calendarIcon"/></li>*/}
            {/*<li className={"scheduleDay soon"}>скоро</li>*/}
        </ul>
    );
};

export default Schedule;
