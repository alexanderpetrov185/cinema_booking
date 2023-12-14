import React from "react";
import "./home.scss";
import Slider from "../../components/slider/Slider";
import MovieList from "../../components/movieList/MovieList";
import Schedule from "../../components/schedule/Schedule";
import useFetch from "../../http/hooks/useFetch";
import { useAppSelector } from "../../redux/hooks/redux";
import PreLoader from "../../components/preLoader/PreLoader";
import { slides } from "../../dataSlides";

const Home = () => {
  const date = useAppSelector((state) => state.scheduleReducer.date);

  const { data, loading } = useFetch(`/moviesOnDay/${date}`);

  return (
    <>
      <Slider slides={slides} />
      <Schedule />
      <div className="container">
        <div className={"home"}>
          {loading ? <PreLoader /> : <MovieList movies={data} />}
        </div>
      </div>
    </>
  );
};

export default Home;
