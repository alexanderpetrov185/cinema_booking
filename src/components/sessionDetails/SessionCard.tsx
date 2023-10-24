import React from 'react';
import "./sessionCard.scss"
import {useAppDispatch} from "../../redux/hooks/redux";
import {saveSelectedDate, saveSelectedSession} from "../../redux/reducers/actionCreators";


type Props = {
    title: string,
    genre: string,
    sessionsDetails: {
        hallNumber: number,
        date: string,
        price: number,
        sessionId: string,
        _id: string
    }[],
    nowDate: Date,
    setModalIsOpen: (arg0: boolean) => void
}

const SessionCard = ({title, genre, sessionsDetails, nowDate, setModalIsOpen}: Props) => {

    const dispatch = useAppDispatch()
    const tomorrowToSelect = () => {
        dispatch(saveSelectedDate(new Date(nowDate.setDate(nowDate.getDate() + 1)).toLocaleDateString("en-CA")))
    }

    return (
        <div className={"sessionCard"}>
            <h2 className="movieTitle">{title}</h2>
            <span className="movieGenre">{genre}</span>
            <div className="movieSessions">
                {sessionsDetails.map((details, index) => {
                        if (new Date(details.date.slice(0, -1)) > nowDate) {
                            return <div key={details._id} className={"sessionDetails"}>
                                <div onClick={() => {
                                    setModalIsOpen(true);
                                    dispatch(saveSelectedSession({
                                        sessionId: details.sessionId,
                                        price: details.price.toString(),
                                        sessionTime: details.date.toLocaleString().slice(11, -8)
                                    }))
                                }}>
                                    <span>{details.date.toLocaleString().slice(11, -8)}</span>
                                    <span>{details.price}₽</span>
                                </div>
                                <span className={"hallNumber"}>Зал {details.hallNumber}</span>
                            </div>
                        } else {
                            if (index === sessionsDetails.length - 1) {
                                return <span key={details._id} className={"tomorrowSessions"}
                                             onClick={() => tomorrowToSelect()}>Сеансы на завтра</span>
                            } else
                                return null
                        }
                    }
                )}
            </div>
        </div>
    );
};

export default SessionCard;