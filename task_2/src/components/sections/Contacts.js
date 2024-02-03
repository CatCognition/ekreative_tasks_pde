import React from 'react';
import CopyToClipboardButton from './CopyToClipboardButton';

const Contacts = () => {
  return (
    <section id="contacts">
      <h2>Контакти</h2>
      <p>Email: <CopyToClipboardButton text="info@soundstudio.com" /></p>
      <p>Телефон: <CopyToClipboardButton text="+123 456 7890" /></p>
      <p>При потребі зв'яжіться з нами для деталей та інших питань.</p>
    </section>
  );
};

export default Contacts;