import React, {useState} from 'react';
import "./movieItem.scss"
import ModalWindow from "../modalWindow/ModalWindow";
import BookingModule from "../bookingModule/BookingModule";
import {IMovie} from "../../redux/models/IMovie";

type Props = {
    movie: IMovie
}

const MovieItem = ({movie}: Props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const nowTime = new Date() // Время в нашем регионе (!На стороне сервера не учитывается часовой пояс)

    return (
        <div className="movieItem" key={movie.imdbID}>
            <div className="imageContainer">
                <img src={movie.poster} alt={`poster ${movie.title}`}/>
                <button className="playButton" onClick={() => setModalIsOpen(true)}>
                    <span className="play"/>
                </button>
            </div>
            <div className="info">
                <h2 className="movieTitle">{movie.title}</h2>
                <span className="movieGenre">{movie.genre}</span>
                <div className="movieSessions">
                    {movie.sessionsDetails.map((details) => {
                            if (new Date(details.date) > nowTime) {
                                return <div key={details._id} className={"sessionDetails"}>
                                    <div onClick={() => setModalIsOpen(true)}>
                                        <span>{details.date.toLocaleString().slice(11, -8)}</span>
                                        <span>{details.price}₽</span>
                                    </div>
                                    <span className={"hallNumber"}>Зал {details.hallNumber}</span>
                                </div>
                            } else {
                                return null
                            }
                        }
                    )}
                </div>
                <ModalWindow modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}>
                    <BookingModule/>
                </ModalWindow>
            </div>
        </div>
    );
};


export default MovieItem;
