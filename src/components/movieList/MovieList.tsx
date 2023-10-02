import React from 'react';
import "./movieList.scss"
import MovieItem from "../movieItem/MovieItem";

type Props = {
    movies: {
        _id: string;
        imdbID: string;
        poster: string;
        title: string;
        genre: string;
        imdbRating: string;
    }[]
}

const MovieList = ({movies}: Props) => {
    return (
        <div className={"movieList"}>
            {
                movies.map((movie) => (
                    <MovieItem
                        key={movie._id}
                        imdbID={movie.imdbID}
                        poster={movie.poster}
                        title={movie.title}
                        genre={movie.genre}
                        imdbRating={movie.imdbRating}
                    />
                ))
            }
        </div>
    );
};

export default MovieList;