import React from 'react';
import "./movieList.scss"
import MovieItem from "../movieItem/MovieItem";

type Props = {
    movies: {
        images: string[];
        imdbID: string;
    }[]
}

const MovieList = ({movies}: Props) => {
    return (
        <div className={"movieList"}>
            {
                movies.map((movie) => (
                    <MovieItem key={movie.imdbID} images={movie.images}/>
                ))
            }
        </div>
    );
};

export default MovieList;