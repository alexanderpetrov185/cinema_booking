import React from "react";
import "./movieList.scss";
import MovieItem from "../movieItemComponents/movieItem/MovieItem";
import { animated, config, useTransition } from "@react-spring/web";
import { useAppSelector } from "../../redux/hooks/redux";
import PreLoader from "../preLoader/PreLoader";

const MovieList = () => {
  const { data, isLoading, error } = useAppSelector(
    (state) => state.moviesReducer,
  );

  const transition = useTransition(null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.gentle,
  });

  if (error) {
    return <div>{error}</div>;
  }

  return isLoading ? (
    <PreLoader />
  ) : (
    <div style={{ overflow: "hidden" }}>
      {transition((style) => (
        <animated.div className={"movieList"} style={style}>
          {!data || data.length === 0 ? (
            <span className={"noSessionsMessage"}>
              На этот день сеансов нет
            </span>
          ) : (
            data.map((movie) => <MovieItem key={movie._id} movie={movie} />)
          )}
        </animated.div>
      ))}
    </div>
  );
};

export default MovieList;
