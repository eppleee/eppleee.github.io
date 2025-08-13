import '../pages/pages.css';
import { Element } from 'react-scroll';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import linkedin from '../assets/linkedin.png';
import email from '../assets/email.png';
import phone from '../assets/phone-call.png';
import location from '../assets/location-pin.png';
import github from '../assets/github.png';
import corner from '../assets/corner-flower.png';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_f7t5wcs', 'template_5a52b0e', form.current, 'wp2bHOqdxJjGTZ0rA')
      .then((result) => {
        console.log('Email successfully sent!', result.text);
        alert('Message sent successfully!');
        e.target.reset();
      }, (error) => {
        console.error('Failed to send email:', error.text);
        alert('Failed to send message, please try again.');
      });
  };
  return (
    <>
      <Element name="contact">
        <section className="contact-page">
          {/* corner flowers */}
          <img src={corner} alt="" className="corner corner--tl" />
          <img src={corner} alt="" className="corner corner--tr" />
          <img src={corner} alt="" className="corner corner--bl" />
          <img src={corner} alt="" className="corner corner--br" />

          {/* centered content */}
          <div className="contact-inner">
            <span className="contact-title">Contact Me</span>
            <span className="contact-desc">Please fill out the form to get into contact with me</span>

            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <input type="text" className="name" name="user_name" placeholder="Your Name" required />
              <input type="email" className="email" name="user_email" placeholder="Your Email" required />
              <textarea className="message" name="message" rows="5" placeholder="Your Message" required></textarea>
              <button type="submit" value="Send" className="submitBtn">Submit</button>

              <div className="links">
                <a href="https://www.linkedin.com/in/kourtney-giles-/" target="_blank" rel="noopener noreferrer">
                  <img src={linkedin} alt="linkedin" className="link" />
                </a>
                <a href="mailto:kourtneygiles@outlook.com">
                  <img src={email} alt="email" className="link" />
                </a>
                <a href="tel:+14438103289">
                  <img src={phone} alt="phone" className="link" />
                </a>
                <a
                  href="https://www.bing.com/maps?qs=LS&pq=washing+dc&sk=CSYN1&sc=16-10&pglt=299&q=washing+dc+map&cvid=d1443aef4b0f48a6bb0dcd05f6ec3e3e&gs_lcrp=EgRlZGdlKgcIABAAGPkHMgcIABAAGPkHMgYIARBFGDkyBggCEAAYQDIGCAMQLhhAMgYIBBAAGEAyBggFEAAYQDIGCAYQABhAMgYIBxAAGEAyBggIEAAYQNIBCDI0MDZqMGoxqAIAsAIA&FORM=ANNTA1&PC=U531"
                  target="_blank" rel="noopener noreferrer"
                >
                  <img src={location} alt="location" className="link" />
                </a>
                <a href="https://github.com/eppleee" target="_blank" rel="noopener noreferrer">
                  <img src={github} alt="github" className="link" />
                </a>
              </div>
            </form>
          </div>
        </section>
      </Element>
    </>
  );
}

export default Contact;
