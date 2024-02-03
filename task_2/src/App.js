import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Intro from './components/sections/Intro';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Portfolio from './components/sections/Portfolio';
import Director from './components/sections/Director';
import MoreServices from './components/sections/MoreServ';
import Clients from './components/sections/Clients';
import Contacts from './components/sections/Contacts';
import ScrollToTopButton from './components/ScrollToTopButton';
import './styles/styles.css';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Intro />
      <About />
      <Services />
      <Portfolio />
      <Director />
      <MoreServices />
      <Clients />
      <Contacts />
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default App;
