import React from 'react';
import "./home.scss"
import Slider from "../../components/slider/Slider";
import MovieList from "../../components/movieList/MovieList";
import Schedule from '../../components/schedule/Schedule';
import MovieService from "../../http/services/MovieService";
import {IMovie} from "../../redux/models/IMovie";
import useFetch from "../../http/hooks/useFetch";
import {useAppSelector} from "../../redux/hooks/redux";

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
    const date = useAppSelector((state) => state.scheduleReducer.date)

    const {data, loading, error} = useFetch(`/moviesOnDay/${date}`)
    // const [movies, setMovies] = React.useState<IMovie[]>([])

    // async function getMovies() {
    //     try {
    //         const response = await MovieService.fetchMovies()
    //         setMovies(response.data)
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }
    //
    // React.useEffect(() => {
    //     void getMovies()
    // }, [])

    return (
        <div className={"home"}>
            <Slider slides={slides}/>
            <div className="contentWrapper">
                <Schedule/>
                <MovieList movies={data}/>
            </div>
        </div>
    );
};

export default Home;