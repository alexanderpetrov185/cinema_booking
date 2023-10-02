import React from 'react';
import "./home.scss"
import Slider from "../../components/slider/Slider";
import MovieList from "../../components/movieList/MovieList";
import {movies} from "../../data";
import Schedule from '../../components/schedule/Schedule';

const slides = [
    {
        url: "https://thegww.com/wp-content/uploads/2020/06/dc-banner-1.png",
        title: "DC"
    },
    {
        url: "https://sun9-10.userapi.com/c837632/v837632115/e843/v_2Zl-HiG_E.jpg",
        title: "Avengers"
    },
    {
        url: "https://nastol.net/wallpaper/middle/34/fantastika-dzhenyueri-dzhons-dzhennifer-lourens.jpg",
        title: "X-mens"
    }
]

const Home = () => {
    return (
        <div className={"home"}>
            <Slider slides={slides}/>
            <div className="contentWrapper">
                <Schedule/>
                <MovieList movies={movies}/>
            </div>
        </div>
    );
};

export default Home;