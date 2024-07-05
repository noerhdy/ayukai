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
          <li key={track.id}>
            <h3>
              {track.title} - {track.subTitle}
            </h3>
            <p>{track.date}</p>
            <button onClick={() => handlePlay(track)}>Play</button>
          </li>
        ))}
      </ul>
      {currentTrack && <AudioContent musicUrl={currentTrack.play} />}
    </div>
  );
};

export default AudioPlayer;
