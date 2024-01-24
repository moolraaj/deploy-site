import React, { useRef,useState,useEffect } from 'react';
import emailjs from '@emailjs/browser';
import '../src/New.css'


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



    const [fakeStore, setFakeStore] = useState([]);

    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setFakeStore(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);
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
