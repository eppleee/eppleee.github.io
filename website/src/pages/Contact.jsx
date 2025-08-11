import '../pages/pages.css';
import linkedin from '../assets/linkedin.png'
import email from '../assets/email.png'
import phone from '../assets/phone-call.png'
import location from '../assets/location-pin.png'
import github from '../assets/github.png'


function Contact() {
  return (
    <section className="contact-page">
    <span className="contact-title">Contact Me</span>
    <span className="contact-desc">Please fill out the form to get into contact with me</span>
    <form className="contact-form">
        <input type="text" className="name" placeholder='Your Name'/>
        <input type="text" className="email" placeholder='Your Email'/>
        <textarea className = "message" name="message" rows="5" placeholder='Your Message'></textarea>
        <button type = "submit" value = "Send" className="submitBtn">Submit</button>
        <div className="links">
            <img src= {linkedin} alt="linkedin" className="link" />
            <img src= {email} alt="email" className="link" />
            <img src= {phone} alt="phone" className="link" />
            <img src= {location} alt="location" className="link" />
            <img src= {github} alt="github" className="link" />
        </div>
    </form>
    </section>
    )
}

export default Contact;