import React from 'react';
import "./movieItem.scss"
import PlayButton from "../playButton/playButton";

type Props = {
    id: number;
    poster: string;
    title: string;
    genre: string;
    imdbRating: string;
}

const MovieItem = ({poster, title, genre, imdbRating}: Props) => {
    return (
        <div className="movieItem" key={poster}>
            <div className="imageContainer">
                <img src={poster} alt={`poster ${title}`}/>
                <div className="playItem">
                    <PlayButton/>
                </div>
            </div>
            <div className="info">
                <h2 className="movieTitle">{title}</h2>
                <span className="movieGenre">{genre}</span>
                <span className={"cinemaHall"}>зал №1</span>
                <ul>
                    <li>9:25
                        <span>330 руб.</span>
                    </li>
                    <li>12:25
                        <span>330 руб.</span>
                    </li>
                    <li>13:45
                        <span>330 руб.</span>
                    </li>
                    <li>17:40
                        <span>330 руб.</span>
                    </li>
                    <li>23:40
                        <span>330 руб.</span>
                    </li>
                </ul>
            </div>
        </div>

    );
};


export default MovieItem;