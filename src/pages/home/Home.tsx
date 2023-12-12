import React, { useMemo } from "react";
import "./home.scss";
import Slider from "../../components/slider/Slider";
import MovieList from "../../components/movieList/MovieList";
import Schedule from "../../components/schedule/Schedule";
import useFetch from "../../http/hooks/useFetch";
import { useAppSelector } from "../../redux/hooks/redux";
import SplashScreen from "../../components/splashScreen/SplashScreen";

const Home = () => {
  const slides = useMemo(
    () => [
      {
        url: "/assets/slider/johnWick.png",
        title: "Джон Уик",
      },
      {
        url: "/assets/slider/onceUpon.png",
        title: "Однажды в Голливуде",
      },
      {
        url: "/assets/slider/avatar.png",
        title: "Аватар",
      },
      {
        url: "/assets/slider/interStellar.png",
        title: "Интерстеллар",
      },
      {
        url: "/assets/slider/antMan.png",
        title: "Человек Муравей",
      },
    ],
    [],
  );

  const date = useAppSelector((state) => state.scheduleReducer.date);

  const { data, loading } = useFetch(`/moviesOnDay/${date}`);

  return (
    <>
      <Slider slides={slides} />
      <Schedule />
      <div className="container">
        <div className={"home"}>
          {loading ? <SplashScreen /> : <MovieList movies={data} />}
        </div>
      </div>
    </>
  );
};

export default Home;
