// src/components/Contact.jsx
import { useRef } from "react";
import emailjs from "@emailjs/browser";


function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // 1️⃣ Send mail to YOU
    emailjs
      .sendForm(
        "service_t6xvakp",      // ✅ Your Service ID
        "template_onv9ci1",     // ✅ Template to YOU
        formRef.current,
        "jn-3D2JNNK5VCbTJA"     // ✅ Your Public Key
      )
      .then(
        () => {
          // 2️⃣ Auto-reply to USER
          emailjs.sendForm(
            "service_t6xvakp",
            "template_btbzyaw",  // ✅ Template to USER
            formRef.current,
            "jn-3D2JNNK5VCbTJA"
          );

          alert("✅ Message sent successfully!");
          e.target.reset();
        },
        () => {
          alert("❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="contact-section">
      <div className="contact-header">
        <p className="contact-eyebrow">CONTACT ME</p>
        <h1 className="contact-title">
          One Step Away From Building a Million-Dollar BUSINESS
        </h1>
      </div>

      <div className="contact-panel">
        {/* LEFT – FORM */}
        <div className="contact-form glass-card">
          <h3 className="contact-form-title">Send me a message</h3>

          <form ref={formRef} onSubmit={sendEmail}>
            <div className="form-group modern">
              <input type="text" name="name" required />
              <label>Your Name</label>
            </div>

            <div className="form-group modern">
              <input type="email" name="email" required />
              <label>Your Email</label>
            </div>

            <div className="form-group modern">
              <input type="text" name="subject" required />
              <label>Subject</label>
            </div>

            <div className="form-group modern">
              <textarea name="message" rows="4" required />
              <label>Your Message</label>
            </div>

            <button type="submit" className="form-btn modern-btn">
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT – DETAILS */}
        <div className="contact-info glass-card">
          <div>
            <h3>Email Me At</h3>
            <a href="mailto:krishnamantena06@gmail.com">
              <p>krishnamantena06@gmail.com</p>
            </a>

            <h3>Call Me At</h3>
            <a href="tel:+919346245037">
              <p>9346245037</p>
            </a>
          </div>

          <div className="contact-social">
            <h3>Find Me On</h3>
            <div className="contact-links">
              <a
                href="https://www.instagram.com/krishna_08_2003/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/mantenakrishnateja/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>

              <a
                href="https://github.com/krishnamantena"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
