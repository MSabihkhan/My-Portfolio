import React from 'react';
import './contactform.css';

const ContactForm = () => {
  return (
    <div className='form-container'>
      <div className='contents'>
        <h1>Get in Touch</h1>
        <p>If you are interested in my work or want to provide feedback about this website, I am open to exchanging ideas.</p>
      </div>

      <form 
        className="contact-form" 
        action="https://formsubmit.co/mailmsabih@gmail.com" 
        method="POST"
      >
        <input
          type="hidden"
          name="_next"
        />
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="form-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="form-input"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="form-textarea"
        />
        <button type="submit" className="form-button">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
