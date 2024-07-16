import React, { useState, useRef, useEffect } from "react";
import { Play, Pause } from "lucide-react";

const AudioContent = ({ musicUrl, onPlayPause }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const playAudio = async () => {
    try {
      await audioRef.current.play();
      setIsPlaying(true);
      if (onPlayPause) onPlayPause(true);
    } catch (error) {
      console.error("Error attempting to play audio:", error);
    }
  };

  const pauseAudio = () => {
    audioRef.current.pause();
    setIsPlaying(false);
    if (onPlayPause) onPlayPause(false);
  };

  useEffect(() => {
    const audioElement = audioRef.current;
    const handleAudioEnded = () => {
      setIsPlaying(false);
      if (onPlayPause) onPlayPause(false);
    };

    if (audioElement) {
      if (isPlaying) {
        playAudio();
      } else {
        pauseAudio();
      }

      audioElement.addEventListener("ended", handleAudioEnded);
    }

    return () => {
      if (audioElement) {
        audioElement.removeEventListener("ended", handleAudioEnded);
      }
    };
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
      setIsPlaying(false);
      if (onPlayPause) onPlayPause(false);
    }
  }, [musicUrl]);

  const togglePlay = () => {
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  };

  return (
    <div className="absolute z-40">
      <audio ref={audioRef} src={musicUrl}></audio>
      <button
        className={`font-bold text-xl ${
          isPlaying ? "text-zinc-50" : "text-red-500"
        }`}
        onClick={togglePlay}
      >
        {/* {isPlaying ? "pause" : "play"} */}
        {isPlaying ? <Pause size={24} /> : <Play size={24} />}
      </button>
    </div>
  );
};

export default AudioContent;
