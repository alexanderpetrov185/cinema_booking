import React from "react";
import "./movieList.scss";
import MovieItem from "../movieItem/MovieItem";
import { IMovie } from "../../redux/models/IMovie";
import { animated, config, useTransition } from "@react-spring/web";

type Props = {
  movies: IMovie[] | undefined;
};

const MovieList = ({ movies }: Props) => {
  const transition = useTransition(null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.gentle,
  });

  return (
    <div style={{ overflow: "hidden" }}>
      {transition((style) => (
        <animated.div className={"movieList"} style={style}>
          {movies ? (
            movies.map((movie) => <MovieItem key={movie._id} movie={movie} />)
          ) : (
            <h2>На сегодня сеансов нет</h2>
          )}
        </animated.div>
      ))}
    </div>
  );
};

export default MovieList;
