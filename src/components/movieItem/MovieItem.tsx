import React, {useState} from 'react';
import "./movieItem.scss"
import ModalWindow from "../modalWindow/ModalWindow";

type Props = {
    poster: string;
    title: string;
    genre: string;
    imdbRating: string;
    imdbID: string;
}

const MovieItem = ({poster, title, genre, imdbRating, imdbID}: Props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <div className="movieItem" key={imdbID}>
            <div className="imageContainer">
                <img src={poster} alt={`poster ${title}`}/>
                <div className="playItem">
                    <button className="playButton" onClick={() => setModalIsOpen(true)}>
                        <span className="play"></span>
                    </button>
                </div>
            </div>
            <div className="info">
                <h2 className="movieTitle">{title}</h2>
                <span className="movieGenre">{genre}</span>
                <span className={"cinemaHall"}>зал №1</span>
                <ul>
                    <li onClick={() => setModalIsOpen(true)}>9:25
                        <span>330 руб.</span>
                    </li>
                    <li onClick={() => setModalIsOpen(true)}>9:25
                        <span>330 руб.</span>
                    </li>
                    <li onClick={() => setModalIsOpen(true)}>9:25
                        <span>330 руб.</span>
                    </li>
                    <li onClick={() => setModalIsOpen(true)}>9:25
                        <span>330 руб.</span>
                    </li>
                    <li onClick={() => setModalIsOpen(true)}>9:25
                        <span>330 руб.</span>
                    </li>
                </ul>
                <ModalWindow modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium alias, culpa, cum
                        cupiditate dicta facilis illum modi quam quas qui quo quod repudiandae rerum sapiente, soluta
                        unde vel velit.</p>
                </ModalWindow>
            </div>
        </div>

    );
};


export default MovieItem;