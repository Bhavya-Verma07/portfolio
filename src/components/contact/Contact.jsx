import React from "react";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail />
            <h4>Email</h4>
            <h5>me.bhavyaverma111@gmail.com</h5>
            <a href="mailto:me.bhavyaverma111@gmail.com" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp />
            <h4>WhatsApp</h4>
            <h5>8299384632</h5>
            <a
              href="https://api.whatsapp.com/send?phone=8299384632"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* End of contact  options  */}
        {/* <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
        </form> */}
      </div>
    </section>
  );
};

export default Contact;
