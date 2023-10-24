import React, {useState} from 'react';
import "./bookingModule.scss"
import {ArrowBackIos} from "@mui/icons-material";
import CloseIcon from '@mui/icons-material/Close';
import {useAppSelector} from "../../redux/hooks/redux";
import useFetch from "../../http/hooks/useFetch";
import {saveSelectedSession} from "../../redux/reducers/actionCreators";
import {useAppDispatch} from "../../redux/hooks/redux";

type Props = {
    nowDate: Date,
    title: string,
    details: {
        hallNumber: number,
        date: string,
        price: number,
        sessionId: string,
    } [],
}

const BookingModule = ({nowDate, title, details}: Props) => {
    let rows: number, columns: number;
    const dispatch = useAppDispatch()
    const session = useAppSelector((state) => state.scheduleReducer.session)
    const {data} = useFetch(`/session/${session.sessionId}`)
    const [selectedSession, setSelectedSession] = useState<string>(session.sessionId)
    // className={dateFromReducer.getDay() === day.getDay() ? "activeDay" : "scheduleDay"}

    const dateDay = new Date(useAppSelector((state) => state.scheduleReducer.date)).toLocaleDateString("ru")

    if (data.hallNumber === '1') {
        rows = 8;
        columns = 16;
    } else {
        rows = 9;
        columns = 14;
    }

    return (
        <div className={"bookingModule"}>
            <div className="bookingHeader">
                <ArrowBackIos className="btnBack"/>
                <div className="bookingInfo">
                    <span className={"bookingTitle"}>{title}</span>
                    <span>{dateDay} Кинотеатр Cinema</span>
                </div>
                <CloseIcon className={"btnClose"}/>
            </div>
            <div className="bookingBody">
                <ul className="availableTime">
                    {
                        details.map((details, index) => {
                            if (new Date(details.date.slice(0, -1)) > nowDate) {
                                return <li key={index}>
                                    <button onClick={() => {
                                        setSelectedSession(details.sessionId)
                                        dispatch(saveSelectedSession({
                                            sessionId: details.sessionId,
                                            price: details.price.toString(),
                                            sessionTime: details.date.toLocaleString().slice(11, -8)
                                        }))
                                    }}
                                            className={details.sessionId === selectedSession ? "active sessionButton" : "sessionButton"}>
                                        {details.date.toLocaleString().slice(11, -8)}</button>
                                    <span>{details.price}₽</span>
                                </li>
                            } else {
                                return null
                            }
                        })
                    }
                </ul>
                <div className="movieSchema">
                    <div className="shortInfo">
                        <span>2D 12+ Зал №{`${data.hallNumber}`}</span>
                        <ul className={"seatsInfo"}>
                            <li>🟢{`${data.price}₽ `}</li>
                            <li>🔴Занято</li>
                        </ul>
                    </div>
                    <img src="/assets/images/screen.png" alt="Экран" className="movieScreenImg"/>
                    <section className="seatsSchema">
                        {[...Array(rows)].map((row, index) => (
                            <div className="row" key={index}>
                                <span>{index + 1}</span>
                                {[...Array(columns)].map((seat, index) => (
                                    <div className="seat" key={index}>{index + 1}</div>))}
                                <span>{index + 1}</span>
                            </div>))}
                    </section>
                    <div className="selectedInfo">
                        <div className="selectedTickets">
                            <span>Ряд 5, Место 15</span>
                            <span>🟢150₽</span>
                        </div>
                        <button className="buttonBuy">Купить 150₽</button>
                    </div>
                </div>
            </div>
            <div className="bookingFooter">
                <span className={"support"}>Поддержка: 8 495 230-01-24</span>
                <a href="/" className="needHelp">Мне не пришёл билет</a>
                <span className="credits">2023 ©ООО«Кинокасса»</span>
            </div>
        </div>
    );
};

export default BookingModule;


// <button
//     className={selectedSession === details.sessionId ? "active sessionBtn" : "sessionBtn"}
//     onClick={() => setSelectedSession(details.sessionId)}>{details.date.toLocaleString().slice(11, -8)}</button>
// <span>{details.price}₽</span>