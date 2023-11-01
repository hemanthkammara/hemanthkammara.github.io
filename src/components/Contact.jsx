import React from "react";
import { FaGithub, FaLinkedin, FaLinkedinIn } from "react-icons/fa6";
function Contact() {

  return (
    <div id="contact">
      <div className="contact_details">
        <h2>Contact-Me</h2>
        <p id="contact-phone">+91 9989537586</p>
        <p id="contact-email">hemanthcr217@gmail.com</p>

        <div className="my_icon">
          <a id="contact-github" href="https://github.com/hemanthkammara">
            <FaGithub/>
          </a>
          <br />
          <a
            id="contact-linkedin"
            href="https://www.linkedin.com/in/hemanth-kumar-kammara/"
          >
           <FaLinkedin/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
