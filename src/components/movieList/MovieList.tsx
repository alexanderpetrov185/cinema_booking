import React from "react";
import styles from "./movieList.module.scss";
import MovieItem from "../movieItemComponents/movieItem/MovieItem";
import { animated, config, useTransition } from "@react-spring/web";
import { useAppSelector } from "../../redux/hooks/redux";
import SchedulePreLoader from "../preLoaders/schedulePreLoader/SchedulePreLoader";

const MovieList = () => {
  const { data, isLoading, error } = useAppSelector(
    (state) => state.moviesReducer,
  );

  const transition = useTransition(data && data.length !== 0 ? data : null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    config: config.gentle,
  });

  if (error) {
    return <div>{error}</div>;
  }

  if (isLoading) {
    return <SchedulePreLoader />;
  }

  return (
    <>
      {transition((style, movie) => (
        <animated.div className={styles.movieList} style={style}>
          {movie ? (
            <MovieItem key={movie._id} movie={movie} />
          ) : (
            <span className={styles.noSessionsMessage}>
              На этот день сеансов нет
            </span>
          )}
        </animated.div>
      ))}
    </>
  );
};

export default MovieList;
