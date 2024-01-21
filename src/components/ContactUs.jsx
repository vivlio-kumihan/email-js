import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./ContactUs.css"

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_v7vchel', 'template_3il9pue', form.current, '8CNHjWM-Lc3IDsgLS')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  const hash = { name: "髙廣信之と申します。", price: 1000 }




  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="userName" />
      <label>Email</label>
      <input type="email" name="userEmail" />
      <label>Message</label>
      <textarea name="note" />
      <textarea 
      name="hashName" readOnly value={`${hash.name}`}/>
      <textarea name="hashPrice" readOnly value={`${hash.price}`}/>
      <input type="submit" value="Send" />
    </form>
  );
};

export default ContactUs;