import React from 'react';
import "./player.scss"
import ReactPlayer from 'react-player/lazy'

type Props = {
    videoSrc: string
}

const Player = ({videoSrc}: Props) => {
    return (
        <ReactPlayer url={`${videoSrc}`}/>
    );
};

export default Player;