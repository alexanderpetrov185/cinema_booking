import React from "react";
import "./SchedulePage.scss";
import MovieItem from "../../components/movieItemComponents/movieItem/MovieItem";
import { useAppSelector } from "../../redux/hooks/redux";
import useFetch from "../../http/hooks/useFetch";
import PreLoader from "../../components/preLoader/PreLoader";
import { IMovie } from "../../redux/models/IMovie";
import Slider from "../../components/slider/Slider";
import { slides } from "../../dataSlides";

const SchedulePage = () => {
  const date = useAppSelector((state) => state.scheduleReducer.date);

  const { data: movies, loading } = useFetch(`/moviesOnDay/${date}`);

  if (loading) {
    return <PreLoader />;
  }

  return (
    <>
      <Slider slides={slides} />
      <div className="container">
        <div className={"schedulePage"}>
          {!movies || movies.length === 0 ? (
            <span className={"noSessionsMessage"}>
              На этот день сеансов нет
            </span>
          ) : (
            movies.map((movie: IMovie) => (
              <MovieItem key={movie._id} movie={movie} />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default SchedulePage;
