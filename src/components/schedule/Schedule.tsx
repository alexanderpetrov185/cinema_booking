import React from 'react';
import "./schedule.scss";

const todayDate = new Date();
const monthName = todayDate.toLocaleString('default', {month: 'short'});
const dayNumber = todayDate.getDate();
const dayOfWeek = todayDate.getDay();
const allDays = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']


const Schedule = () => {
    const sortDays = allDays.slice(dayOfWeek).concat(allDays.slice(0, dayOfWeek))

    return (
        <ul className={"schedule"}>
            <li>{`Сегодня, ${dayNumber} ${monthName}`}</li>
            <li>{`Завтра, ${dayNumber} ${monthName}`}</li>
            <li>{`${sortDays[2]}, ${dayNumber} ${monthName}`}</li>
            <li>{`${sortDays[3]}, ${dayNumber} ${monthName}`}</li>
            <li>{`${sortDays[4]}, ${dayNumber} ${monthName}`}</li>
            <li><img src="/assets/icons/calendar.svg" alt="calenarIcon"/></li>
            <li><span>скоро</span></li>
        </ul>
    );
};

export default Schedule;