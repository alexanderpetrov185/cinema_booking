import React from 'react';
import "./schedule.scss";

const monthName = new Date().toLocaleString('default', {month: 'short'});
const dayOfWeek = new Date().getDay();
const allDays = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
let dayDates = new Array(5)

const Schedule = () => {
    const sortDays = allDays.slice(dayOfWeek).concat(allDays.slice(0, dayOfWeek))

    const addDay = (dayCount: number) => {
        const todayDate = new Date();
        return new Date(todayDate.setDate(todayDate.getDate() + dayCount))
    }

    for (let i = 0; i < 5; i++) {
        dayDates[i] = addDay(i)
    }


    return (
        <ul className={"schedule"}>
            <li>{`Сегодня, ${dayDates[0].getDate()} ${monthName}`}</li>
            <li>{`Завтра, ${dayDates[1].getDate()} ${monthName}`}</li>
            <li>{`${sortDays[2]}, ${dayDates[2].getDate()} ${monthName}`}</li>
            <li>{`${sortDays[3]}, ${dayDates[3].getDate()} ${monthName}`}</li>
            <li>{`${sortDays[4]}, ${dayDates[4].getDate()} ${monthName}`}</li>
            <li><img src="/assets/icons/calendar.svg" alt="calenarIcon"/></li>
            <li><span>скоро</span></li>
        </ul>
    );
};

export default Schedule;