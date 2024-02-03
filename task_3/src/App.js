import React from 'react';
import Header from './components/Header';
import ColorPalette from './components/ColorPalette';
import Footer from './components/Footer';
import './styles/App.css';
import paletteData from './data/pallete.json';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <ColorPalette palette={paletteData[0]} />
      <Footer />
    </div>
  );
};

export default App;
