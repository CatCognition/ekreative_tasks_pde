import React from 'react';
import face from '../components/pictures/facebook_icon.png';
import x from '../components/pictures/twitter_icon.png';
import inst from '../components/pictures/instagram_icon.png';

const Footer = () => {
  return (
    <footer>
      <div className="social-icons">
        <a href="https://www.facebook.com/ваша_сторінка" target="_blank">
          <img src={face} alt="Facebook" />
        </a>
        <a href="https://twitter.com/ваша_сторінка" target="_blank" rel="noopener noreferrer">
          <img src={x} alt="Twitter" />
        </a>
        <a href="https://www.instagram.com/ваша_сторінка" target="_blank" rel="noopener noreferrer">
          <img src={inst} alt="Instagram" />
        </a>
      </div>
      <p>&copy; Падун Дмитро 2024 Звукова Студія. Всі права захищені.</p>
    </footer>
  );
};

export default Footer;
