import React, {useState} from 'react';
import "./movieItem.scss"
import ModalWindow from "../modalWindow/ModalWindow";
import BookingModule from "../bookingModule/BookingModule";
import {IMovie} from "../../redux/models/IMovie";
import Player from '../player/Player';
import SessionCard from "../sessionDetails/SessionCard";


type Props = {
    movie: IMovie
}

const MovieItem = ({movie}: Props) => {
    const [playerIsOpen, setPlayerIsOpen] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const nowDate = new Date() // Дата и Время в нашем регионе (!На стороне сервера не учитывается часовой пояс)


    return (
        <div className="movieItem" key={movie.imdbID}>
            <div className="imageContainer">
                <img src={movie.poster} alt={`poster ${movie.title}`} onClick={() => setModalIsOpen(true)}/>
                <button className="playButton" onClick={() => setPlayerIsOpen(true)}>
                    <span className="play"/>
                </button>
                <ModalWindow modalIsOpen={playerIsOpen} setModalIsOpen={setPlayerIsOpen}>
                    {playerIsOpen && <Player videoSrc={movie.trailer}/>}
                </ModalWindow>
            </div>
            <SessionCard title={movie.title} genre={movie.genre} sessionsDetails={movie.sessionsDetails}
                         nowDate={nowDate} setModalIsOpen={setModalIsOpen}/>
            <ModalWindow modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}>
                {modalIsOpen &&
                    <BookingModule nowDate={nowDate}
                                   title={movie.title} details={movie.sessionsDetails}/>}
            </ModalWindow>
        </div>
    );
};


export default MovieItem;


// {movie.sessionsDetails.map((details) => {
//         if (new Date(details.date) > nowTime) {
//             return <div key={details._id} className={"sessionDetails"}>
//                 <div onClick={() => {
//                     setModalIsOpen(true);
//                     dispatch(saveSelectedSession({
//                         sessionId: details.sessionId,
//                         price: details.price.toString(),
//                         sessionTime: details.date.toLocaleString().slice(11, -8)
//                     }))
//                 }}>
//                     <span>{details.date.toLocaleString().slice(11, -8)}</span>
//                     <span>{details.price}₽</span>
//                 </div>
//                 <span className={"hallNumber"}>Зал {details.hallNumber}</span>
//             </div>
//         } else {
//             return null
//         }
//     }
// )}