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
                        <img src={image} alt=""/>
                        <div className="playBlock">
                            <PlayButton/>
                        </div>
                        <div className="info">
                            <div className="InfoTitle">Леди Баг и Супер-Кот: Пробуждение силы (2D, 6+)
                            </div>
                            <div className="closestSession">
                                <span className={"session Title"}>Ближайший сеанс</span>
                                <span className={"session Timer"}>9:25</span>
                                <div className={"session TimeLeft"}>Осталось:
                                    <span>
                                           2 ч. 50 мин.
                                       </span>
                                </div>
                                <ButtonBuy/>
                                <div className={"session Price"}>Стоимость:
                                    <span>
                                            330 руб.
                                        </span>
                                </div>
                            </div>
                            <div className="todaySessionTime">
                                <span>1 зал</span>
                                <ul>
                                    <li>9:25</li>
                                    <li>15:40</li>
                                    <li>23:40</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            )}
        </>
    );
};


export default MovieItem;