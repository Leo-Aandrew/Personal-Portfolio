import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'; // Custom styles

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_cbyksua',
      'template_xp21aae',
      form.current,
      'mhON4fL2lEswbVErM'
    ).then((result) => {
      alert('Message sent successfully!');
      form.current.reset();
    }, (error) => {
      alert('Failed to send message. Please try again.');
      console.log(error.text);
    });
  };

  return (
    <section className="contact-section" id='contact'>
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="6" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
