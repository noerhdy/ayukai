import React, { useState } from "react";
import { dataAm } from "./dataAm";
import AudioContent from "./AudioContent";

const AudioPlayer = () => {
  const [currentTrack, setCurrentTrack] = useState(null);

  const handlePlay = (track) => {
    setCurrentTrack(track);
  };

  return (
    <div>
      <h1>Music Playlist</h1>
      <ul>
        {dataAm.map((track) => (
          <li key={track}>
            <button onClick={() => handlePlay(track)}>{track.title}</button>
          </li>
        ))}
      </ul>
      {currentTrack && <AudioContent musicUrl={currentTrack.play} />}
    </div>
  );
};

export default AudioPlayer;
