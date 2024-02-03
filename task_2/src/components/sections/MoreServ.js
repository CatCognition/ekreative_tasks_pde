import React from 'react';
import au_pr from '../pictures/audio_production_icon.png';
import au_re from '../pictures/audio_restoration_icon.png';
import au_po from '../pictures/post_production_icon.png';

const MoreServ = () => {
  return (
    <section id="more-serv">
      <h2>Більше Послуг</h2>
      <div className="service-item">
        <img src={au_pr} alt="Аудіо-продакшн" />
        <h3>Аудіо-продакшн</h3>
        <p>Ми вам допоможемо у створенні ідеального звукового продукту.</p>
      </div>
      <div className="service-item">
        <img src={au_re} alt="Реставрація аудіо" />
        <h3>Реставрація аудіо</h3>
        <p>Відновлення старих або пошкоджених аудіозаписів.</p>
      </div>
      <div className="service-item">
        <img src={au_po} alt="Аудіо-постпродакшн" />
        <h3>Аудіо-постпродакшн</h3>
        <p>Останні штрихи для найкращого звучання вашого проєкту.</p>
      </div>
    </section>
  );
};

export default MoreServ;
