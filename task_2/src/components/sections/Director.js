import React from 'react';

const Director = () => {
  return (
    <section id="director">
      <h2>Від Директора</h2>
      <p>Привіт! Я, Дмитро, директор студії. Моя мета - створити для вас найкращі звукові історії та надати професійні аудіо-рішення.</p>
      <div className="youtube-video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Ваш_YouTube_відео_ID" frameBorder="0" allowFullScreen></iframe>
        <p>Можете ознайомитись з нашою роботою на <a href="https://www.youtube.com/ваш_YouTube_канал" target="_blank">YouTube</a>.</p>
      </div>
    </section>
  );
};

export default Director;
