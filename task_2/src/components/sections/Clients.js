import React from 'react';
import cl_im1 from '../pictures/client_image1.jpg';
import cl_im2 from '../pictures/client_image2.jpg';

const Clients = () => {
  return (
    <section id="clients">
      <h2>Відгуки Клієнтів</h2>
      <div className="clients-item">
        <img src={cl_im1} alt="Клієнт 1" />
        <p>"Робота студії - це справжнє мистецтво. Їхні звукові композиції вражають своєю глибиною та чистотою звуку." - Дієго</p>
      </div>
      <div className="clients-item">
        <img src={cl_im2} alt="Клієнт 2" />
        <p>"Співпраця з вами була чудовою. Ви вдало втілюєте наші ідеї в звукових образах. Дякуємо!" - Валентина</p>
      </div>
    </section>
  );
};

export default Clients;
