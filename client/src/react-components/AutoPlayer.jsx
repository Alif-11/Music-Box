import './AutoPlayer.css';
import React from 'react';
import ReactPlayer from 'react-player';

function AutoPlayer({ videoURL }) {
  return (
    <>
      <div className="center">
        <ReactPlayer url={videoURL} playing="true" />
      </div >
    </>
  );
}

export default AutoPlayer;