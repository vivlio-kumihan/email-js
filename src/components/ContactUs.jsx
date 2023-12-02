import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./ContactUs.css"

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rnt4ier', 'template_dq4zyxs', form.current, 'qFuS96-H2M1rD2BgC')
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