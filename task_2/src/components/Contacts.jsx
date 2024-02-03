import React from 'react';
import CopyToClipboardButton from './sections/CopyToClipboardButton';

const Contacts = () => {
  return (
    <section id="contacts">
      <h2>Контакти</h2>
      <p>Email: <CopyToClipboardButton text={email} /></p>
      <p>Телефон: <CopyToClipboardButton text={phone} /></p>
      <p>При потребі зв'яжіться з нами для деталей та інших питань.</p>
    </section>
  );
};

export default Contacts;