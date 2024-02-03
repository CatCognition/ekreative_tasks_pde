import React from 'react';
import logo from '../pictures/logo.png';

const Intro = () => {
  return (
    <section id="intro">
      <h2>Ласкаво просимо!</h2>
      <img src={logo} alt="Лого Студії" />
      <p>Вітаємо вас у нашій звуковій студії. Ми творимо музику, яка зачаровує своєю гармонією та емоціями.</p>
      <p>Наша команда створює унікальні звукові образи для різноманітних проєктів, від музичних композицій до аудіо-інсталяцій.</p>
    </section>
  );
};

export default Intro;
