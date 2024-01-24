import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
 


export default function New() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_zen1c9o', 'template_kobhgqg', form.current, 'hAogoroxbq5GkiE_9')
        .then((result) => {
            console.log(result.text);
            
        }, (error) => {
            console.log(error.text);
        });
    };



     
  return (
     <>
      <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" required/>
      <label>Email</label>
      <input type="email" name="user_email" required/>
      <label>Phone Number</label>
      <input type="number" name="phone_number" required/>
      <label>Message</label>
      <textarea name="message" required/>
      <input type="submit" value="Send" />
      
    </form>
     <h1>Hello Raaj sir</h1>
     </>
  )
}
