import React, { useState } from "react";
import styles from "./movieItem.module.scss";
import ModalWindow from "../../modalWindow/ModalWindow";
import BookingModule from "../../bookingModule/BookingModule";
import { IMovie } from "../../../redux/models/IMovie";
import Player from "../../player/Player";
import SessionCard from "../sessionCard/SessionCard";
import { animated } from "@react-spring/web";

type Props = {
  movie: IMovie;
  style: Object;
};

const MovieItem = ({ movie, style }: Props) => {
  const [playerIsOpen, setPlayerIsOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Дата и Время в нашем регионе (!На стороне сервера не учитывается часовой пояс)
  const nowDate = new Date();

  return (
    <animated.div className={styles.movieItem} key={movie.imdbID} style={style}>
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
      <ModalWindow modalIsOpen={playerIsOpen} setModalIsOpen={setPlayerIsOpen}>
        <Player setPlayerIsOpen={setPlayerIsOpen} videoSrc={movie.trailer} />
      </ModalWindow>
      <ModalWindow modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}>
        <BookingModule
          nowDate={nowDate}
          title={movie.title}
          details={movie.sessionsDetails}
          setModalIsOpen={setModalIsOpen}
        />
      </ModalWindow>
    </animated.div>
  );
};

export default MovieItem;
