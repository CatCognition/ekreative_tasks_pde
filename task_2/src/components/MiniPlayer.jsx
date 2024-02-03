import React, { useState, useRef } from 'react';
import './MiniPlayer.css';
import audioFile from './song.mp3';

const MiniPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false); // Змінено на `false`
  const [volume, setVolume] = useState(50);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume / 100;
  };

  const mute = () => {
    audioRef.current.muted = !audioRef.current.muted;
  };

  return (
    <div className="mini-player">
      <button className={`play-pause ${isPlaying ? 'playing' : ''}`} onClick={togglePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <input
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={handleVolumeChange}
        className="volume-slider"
      />
      <button className="mute-button" onClick={mute}>
        {audioRef.current && audioRef.current.muted ? 'Unmute' : 'Mute'}
      </button>
      <audio ref={audioRef} src={audioFile} />
    </div>
  );
};

export default MiniPlayer;
