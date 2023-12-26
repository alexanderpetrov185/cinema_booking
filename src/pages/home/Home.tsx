import React from "react";
import "./home.scss";
import Slider from "../../components/slider/Slider";
import MovieList from "../../components/movieList/MovieList";
import Schedule from "../../components/schedule/Schedule";
import { slides } from "../../dataSlides";

const Home = () => {
  return (
    <>
      <Slider slides={slides} />
      <Schedule />
      <div className="container">
        <div className={"home"}>
          <MovieList />
        </div>
      </div>
    </>
  );
};

export default Home;
