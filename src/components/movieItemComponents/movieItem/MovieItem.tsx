import React, { useState } from "react";
import styles from "./movieItem.module.scss";
import ModalWindow from "../../modalWindow/ModalWindow";
import BookingModule from "../../bookingModule/BookingModule";
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
    <div className={styles.movieItem} key={movie.imdbID}>
      <div className={styles.imageContainer}>
        <img
          src={movie.poster}
          alt={`poster ${movie.title}`}
          onClick={() => setPlayerIsOpen(true)}
        />
        <button
          className={styles.playButton}
          onClick={() => setPlayerIsOpen(true)}
        >
          <span className={styles.playIcon} />
        </button>
      </div>
      <SessionCard
        title={movie.title}
        genre={movie.genre}
        sessionsDetails={movie.sessionsDetails}
        nowDate={nowDate}
        setModalIsOpen={setModalIsOpen}
      />
      {playerIsOpen && (
        <ModalWindow
          modalIsOpen={playerIsOpen}
          setModalIsOpen={setPlayerIsOpen}
        >
          <Player setPlayerIsOpen={setPlayerIsOpen} videoSrc={movie.trailer} />
        </ModalWindow>
      )}
      {modalIsOpen && (
        <ModalWindow modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}>
          <BookingModule
            nowDate={nowDate}
            title={movie.title}
            details={movie.sessionsDetails}
            setModalIsOpen={setModalIsOpen}
          />
        </ModalWindow>
      )}
    </div>
  );
};

export default MovieItem;
