import React, { useState } from 'react';
import ColorItem from './ColorItem.js';
import '../styles/ColorPalette.css';
import paletteData from '../data/pallete.json';

const ColorPalette = ({ palette}) => {
    const [selectedPalette, setSelectedPalette] = useState(paletteData[0]); 
  
    const handlePaletteChange = (palette) => {
      setSelectedPalette(palette);
    };

    return (
        <div>
          <div className="label-select">
            <label>Оберіть бажану палітру:</label>
          </div>
          <div className="select-container">
            <select onChange={(e) => handlePaletteChange(paletteData[e.target.value])}>
              {paletteData.map((palette, index) => (
                <option key={index} value={index}>{palette.paletteName}</option>
              ))}
            </select>
          </div>
          <div className="color-palette">
            {selectedPalette.colors.map((color, index) => (
              <ColorItem key={index} color={color} />
            ))}
          </div>
        </div>
      );
            }
            
export default ColorPalette;
