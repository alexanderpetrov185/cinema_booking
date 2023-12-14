import React from "react";
import "./movieList.scss";
import MovieItem from "../movieItemComponents/movieItem/MovieItem";
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
          {!movies || movies.length === 0 ? (
            <span className={"noSessionsMessage"}>
              На этот день сеансов нет
            </span>
          ) : (
            movies.map((movie) => <MovieItem key={movie._id} movie={movie} />)
          )}
        </animated.div>
      ))}
    </div>
  );
};

export default MovieList;
