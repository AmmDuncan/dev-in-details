import React from "react";
import { BlueButton, ContactUsRoot } from "./styles";
import { Container } from "../../styles/common";
import ContactUsIllustration from "../../assets/ContactUs";
import Send from "../../assets/Send";

const ContactUs = () => {
  return (
    <ContactUsRoot>
      <Container>
        <header>
          <h2>Contact Us</h2>
          <p>Need our services? Send us a message and we’ll get back to you shortly.</p>
        </header>
        <div className="form-container">
          <form>
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>

            <div>
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows={4} />
            </div>

            <BlueButton type="submit" className="btn btn-primary">
              <span>Send</span>
              <Send />
            </BlueButton>
          </form>
          <div className="illustration">
            <ContactUsIllustration />
          </div>
        </div>
      </Container>
    </ContactUsRoot>
  );
};

export default ContactUs;
