import "./contactStyles.css";
import { MdEmail } from "react-icons/md";
import { PiInstagramLogoFill } from "react-icons/pi";
import { RiWhatsappFill } from "react-icons/ri";
import React, { useRef } from "react";
import emailjs from "emailjs-com"; // Use correct import for emailjs

const Contacts = () => {
  const form = useRef<HTMLFormElement>(null); // Define the type of ref

  const sendEmail = (e: React.FormEvent) => {
    // Specify the event type
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cge8cfb",
        "template_cgaizs7",
        form.current!, // Use "!" to assert that form.current is not null
        "uUb5r9jphTBuBKMeY" // Replace with your user ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className="icon" />
            <h4>Email</h4>
            <h5>mohammediqbalbe@gmail.com</h5>
            <a href="mailto:mohammediqbalbe@gmail.com">Send an email</a>
          </article>
          <article className="contact__option">
            <PiInstagramLogoFill className="icon" />
            <h4>Instagram</h4>
            <h5>mohammediqbalbe@gmail.com</h5>
            <a href="">Send an email</a>
          </article>
          <article className="contact__option">
            <RiWhatsappFill className="icon" />
            <h4>Email</h4>
            <h5>mohammediqbalbe@gmail.com</h5>
            <a href="mailto:mohammediqbalbe@gmail.com">Send an email</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          {" "}
          {/* Remove "form" attribute */}
          <input type="text" name="name" placeholder="your name" required />
          <input type="email" name="email" placeholder="your email" required />
          <textarea
            placeholder="Write some text"
            name="message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary button">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
