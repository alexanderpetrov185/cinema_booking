import React from "react";
import styles from "./player.module.scss";
import ReactPlayer from "react-player/lazy";
import ButtonClose from "../buttonClose/ButtonClose";

type Props = {
  videoSrc: string;
  setPlayerIsOpen: React.Dispatch<boolean>;
};

const Player = ({ videoSrc, setPlayerIsOpen }: Props) => {
  return (
    <div className={styles.player}>
      <ButtonClose
        onClick={() => {
          setPlayerIsOpen(false);
        }}
      />
      <ReactPlayer url={`${videoSrc}`} />
    </div>
  );
};

export default Player;
