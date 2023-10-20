import React from 'react';
import "./movieList.scss"
import MovieItem from "../movieItem/MovieItem";
import {IMovie} from "../../redux/models/IMovie";

type Props = {
    movies: IMovie[]
}

const MovieList = ({movies}: Props) => {
    return (
        <div className={"movieList"}>
            {
                movies.map((movie) => (
                    <MovieItem
                        key={movie._id}
                        movie={movie}
                    />
                ))
            }
        </div>
    );
};

export default MovieList;