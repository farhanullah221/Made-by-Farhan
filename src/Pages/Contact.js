import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cafebf6", //
        "template_flnq2ne", //
        form.current,
        "ZVoQJCLV_LI1DhZbQ" //
      )
      .then(
        (result) => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to send message. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <div className="contact-grid">
      <div className="contact-form-details wow fadeIn">
        <div className="container">
          <div className="row contact-row">
            <div className="col-md-8 col-md-offset-2 col-sm-12 contact-col">
              <h3>Write Your Message Here</h3>

              <div className="contact-form">
                <form ref={form} onSubmit={sendEmail}>
                  <div className="form-group">
                    <input
                      type="text"
                      name="user_name"
                      className="form-control"
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="email"
                      name="user_email"
                      className="form-control"
                      placeholder="Your Email"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      name="user_phone"
                      className="form-control"
                      placeholder="Your Phone"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <textarea
                      name="message"
                      rows="6"
                      className="form-control"
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-success">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
