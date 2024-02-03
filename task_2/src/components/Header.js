import React, { useRef } from 'react';
import MiniPlayer from './MiniPlayer';

const Header = () => {
  const introRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const directorRef = useRef(null);
  const moreServRef = useRef(null);
  const clientsRef = useRef(null);
  const contactsRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header>
      <MiniPlayer />
      <h1>Звукова Студія</h1>
      <nav>
        <ul>
        <a href="#intro" onClick={() => scrollToSection(introRef)}>Головна</a>
        <a href="#about" onClick={() => scrollToSection(aboutRef)}>Про нас</a>
        <a href="#services" onClick={() => scrollToSection(servicesRef)}>Наші Послуги</a>
        <a href="#portfolio" onClick={() => scrollToSection(portfolioRef)}>Портфоліо</a>
        <a href="#director" onClick={() => scrollToSection(directorRef)}>Від Директора</a>
        <a href="#more-serv" onClick={() => scrollToSection(moreServRef)}>Більше Послуг</a>
        <a href="#clients" onClick={() => scrollToSection(clientsRef)}>Відгуки</a>
        <a href="#contacts" onClick={() => scrollToSection(contactsRef)}>Контакти</a>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
