import './AutoPlayer.css';
import React from 'react';
import ReactPlayer from 'react-player';

function AutoPlayer({ videoURL }) {
  return (
    <>
      <ReactPlayer url={videoURL} playing="true" />
    </>
  );
}

export default AutoPlayer;