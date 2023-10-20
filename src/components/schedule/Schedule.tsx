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

    const [activeDay, setActiveDay] = React.useState<Date>(dayDates[0])


    return (
        <ul className={"schedule"}>
            {
                dayDates.map((day, index) => {
                    return <li key={day} className={activeDay.getDay() === day.getDay() ? "activeDay" : "scheduleDay"}
                               onClick={() => setActiveDay(dayDates[index])}>
                        {index === 0 ? "Сегодня, " : index === 1 ? "Завтра, " : `${sortDays[index]}, `}{`${day.getDate()} ${monthName}`}
                    </li>
                })
            }
            {/*<li className={"scheduleDay calendar"}><img src="/assets/icons/calendar.svg" alt="calendarIcon"/></li>*/}
            {/*<li className={"scheduleDay soon"}>скоро</li>*/}
        </ul>
    );
};

export default Schedule;