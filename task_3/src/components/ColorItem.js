import React, { useState } from 'react';
import soundFile from '../sounds/src_notify.mp3';
import '../styles/ColorPalette.css';

const ColorItem = ({ color }) => {
    const [isCopied, setIsCopied] = useState(false);
  
    const handleClick = () => {
      navigator.clipboard.writeText(color.color);
  
      const audio = new Audio(soundFile);
      audio.play();
  
      setIsCopied(true);
  
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    };
  
    return (
      <div className="color-item" style={{ backgroundColor: color.color }} onClick={handleClick}>
        {isCopied && <span className="copy-text">Скопійовано до буферу!</span>}
      </div>
    );
  };

export default ColorItem;
