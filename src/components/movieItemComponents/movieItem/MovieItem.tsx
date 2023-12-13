import React, { useState } from "react";
import "./movieItem.scss";
import ModalWindow from "../../modalWindow/ModalWindow";
import BookingModule from "../bookingModule/BookingModule";
import { IMovie } from "../../../redux/models/IMovie";
import Player from "../../player/Player";
import SessionCard from "../sessionCard/SessionCard";

type Props = {
  movie: IMovie;
};

const MovieItem = ({ movie }: Props) => {
  const [playerIsOpen, setPlayerIsOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const nowDate = new Date(); // Дата и Время в нашем регионе (!На стороне сервера не учитывается часовой пояс)

  return (
    <div className="movieItem" key={movie.imdbID}>
      <div className="imageContainer">
        <img
          src={movie.poster}
          alt={`poster ${movie.title}`}
          onClick={() => setPlayerIsOpen(true)}
        />
        <button className="playButton" onClick={() => setPlayerIsOpen(true)}>
          <span className="play" />
        </button>
        <ModalWindow
          modalIsOpen={playerIsOpen}
          setModalIsOpen={setPlayerIsOpen}
        >
          {playerIsOpen && <Player videoSrc={movie.trailer} />}
        </ModalWindow>
      </div>
      <SessionCard
        title={movie.title}
        genre={movie.genre}
        sessionsDetails={movie.sessionsDetails}
        nowDate={nowDate}
        setModalIsOpen={setModalIsOpen}
      />
      <ModalWindow modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}>
        {modalIsOpen && (
          <BookingModule
            nowDate={nowDate}
            title={movie.title}
            details={movie.sessionsDetails}
            setModalIsOpen={setModalIsOpen}
          />
        )}
      </ModalWindow>
    </div>
  );
};

export default MovieItem;
