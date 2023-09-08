import React from 'react';
import "./movieItem.scss"
import ButtonBuy from "../buttonBuy/ButtonBuy";
import PlayButton from "../playButton/playButton";

type Props = {
    images: string[];
}

const MovieItem = ({images}: Props) => {
    return (
        <>
            {images.map((image) => (
                    <div className="movieItem" key={image}>
                        <div className="imageContainer">
                            <img src={image} alt="movieTitle"/>
                            <div className="playItem">
                                <PlayButton/>
                            </div>
                        </div>
                        <div className="info">
                            <h2 className="movieTitle">Леди Баг и Супер-Кот: Пробуждение силы (2D, 6+)
                            </h2>
                            <span className="movieGenre">Комедия</span>
                            <span className={"cinemaHall"}>зал №1</span>
                            <ul>
                                <li>9:25
                                    <span>
                                            330 руб.
                                        </span>
                                </li>
                                <li>12:25
                                    <span>
                                            330 руб.
                                        </span>
                                </li>
                                <li>13:45
                                    <span>
                                            330 руб.
                                        </span>
                                </li>
                                <li>17:40
                                    <span>
                                            330 руб.
                                        </span>
                                </li>
                                <li>23:40
                                    <span>
                                            330 руб.
                                        </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                )
            )}
        </>
    );
};


export default MovieItem;