import React from 'react';
import re_ic from '../pictures/recording_icon.png';
import mi_ic from '../pictures/mixing_icon.png';
import sd_ic from '../pictures/sound_design_icon.png';

const Services = () => {
  return (
    <section id="services">
      <h2>Наші Послуги</h2>
      <div className="service-item">
        <img src={re_ic} alt="Звукозапис" />
        <h3>Звукозапис</h3>
        <p>Ми надаємо послуги з якісного звукозапису для вашого проєкту.</p>
      </div>
      <div className="service-item">
        <img src={mi_ic} alt="Мікшування та мастеринг" />
        <h3>Мікшування та мастеринг</h3>
        <p>Наша команда забезпечить високоякісне мікшування та мастеринг вашого матеріалу.</p>
      </div>
      <div className="service-item">
        <img src={sd_ic} alt="Саунддизайн" />
        <h3>Саунддизайн</h3>
        <p>Створення унікальних звукових образів для вашого проєкту чи події.</p>
      </div>
    </section>
  );
};

export default Services;
