import { Element } from 'react-scroll';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import linkedin from '../styles/assets/linkedin.png';
import email from '../styles/assets/email.png';
import phone from '../styles/assets/phone-call.png';
import location from '../styles/assets/location-pin.png';
import github from '../styles/assets/github.png';
import corner from '../styles/assets/corner-flower.png';

import { Mail } from 'lucide-react';
import { Button } from '../components/ui/button';

export function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_f7t5wcs',
      'template_5a52b0e',
      form.current,
      'wp2bHOqdxJjGTZ0rA'
    )
      .then(() => {
        alert('Message sent successfully!');
        e.target.reset();
      })
      .catch(() => {
        alert('Failed to send message, please try again.');
      });
  };

  return (
    <section
      id="contact"
      className="relative px-4 py-20 bg-white"
    >
      <div className="
        absolute  /* Position absolutely (covers entire section) */
        inset-0   /* top-0 right-0 bottom-0 left-0 (full coverage) */
        flex      /* Flexbox layout */
      ">
        {/* Left 40% - white background (hidden on mobile) */}
        <div className="
          hidden
          md:block      /* Show on medium screens (768px+) */
          w-[40%]       /* Width 40% */
          bg-pink-100
          dark:bg-pink-500
        "></div>

        {/* Right 60% - pink background */}
        <div className="
          w-full                    /* Full width on mobile */
          md:w-[60%]                /* 60% width on medium screens (768px+) */
          bg-gradient-to-b          /* Gradient from top to bottom */
          md:bg-none                /* No gradient on medium screens+ */
          from-pink-300                /* Gradient start: white */
          via-pink-50 
          to-white
          md:bg-white 
            dark:from-gray-800
            dark:to-gray-800
            dark:via-pink-750
            dark:md:bg-gray-800
        "></div>
      </div>
      <div className="relative max-w-xl mx-auto">

        {/* Header */}
        <h2 className="mb-4 text-3xl font-semibold text-center text-slate-900 dark:text-white">
          Contact Me
        </h2>

        <p className="max-w-md mx-auto mb-12 text-center text-slate-600 dark:text-slate-300">
          Please fill out the form to get into contact with me
        </p>

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="p-6 space-y-4 bg-white border shadow-lg rounded-xl"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 border rounded-full outline-none inline-block px-6 py-2 mb-6 border-pink-200 dark:border-pink-400 rounded-full bg-white/50 dark:text-slate-900 backdrop-blur-sm/20"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 border rounded-full outline-none inline-block px-6 py-2 mb-6 border-pink-200 dark:border-pink-400 rounded-full bg-white/50 dark:text-slate-900 backdrop-blur-sm/20"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full p-3 border rounded-lg outline-none inline-block px-6 py-2 mb-6 border-pink-200 dark:border-pink-400 rounded-full bg-white/50 dark:text-slate-900 backdrop-blur-sm/20"
          ></textarea>

          {/* Submit Button */}
          <Button
            type="submit"
            className="flex items-center justify-center w-full gap-2 bg-pink-200 dark:bg-pink-400 hover:bg-pink-300 dark:hover:bg-pink-500 font-medium rounded-lg px-6 py-2"
          >
            <Mail className="w-4 h-4 " />
            Send Message
          </Button>

          {/* Links section */}
          <div className="flex justify-center gap-6 mt-4">
            <a href="https://www.linkedin.com/in/kourtney-giles-/" target="_blank">
              <img src={linkedin} className="w-8 hover:opacity-80" />
            </a>
            <a href="mailto:kourtneygiles@outlook.com">
              <img src={email} className="w-8 hover:opacity-80" />
            </a>
            <a href="tel:+14438103289">
              <img src={phone} className="w-8 hover:opacity-80" />
            </a>
            <a
              href="https://www.bing.com/maps?q=washing+dc+map"
              target="_blank"
            >
              <img src={location} className="w-8 hover:opacity-80" />
            </a>
            <a href="https://github.com/eppleee" target="_blank">
              <img src={github} className="w-8 hover:opacity-80" />
            </a>
          </div>
        </form>

        {/* Footer */}
        <footer className="pt-8 mt-20 text-center border-t bg-white border-slate-200 text-slate-600 dark:bg-gray-800 dark:text-slate-300">
          <p>© 2025 Kourtney Giles. Built with React & Tailwind CSS.</p>
        </footer>
      </div>
    </section>
  );
}

export default Contact;
