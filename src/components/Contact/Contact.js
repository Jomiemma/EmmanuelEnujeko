import { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import FindMe from "../../reusables/FindMe";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qcpl5wo",
        "template_za6wcsg",
        form.current,
        "mNz13wbMDbxIGO6Oi"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("Error sending message:", error.text);
          alert("Failed to send message, please try again.");
        }
      );
  };

  return (
    <section className="contact-container" id="contact">
      <div className="contact-content">
        <div className="contact-left">
          <h2>Emmanuel Enujeko</h2>
          <FindMe />
        </div>
        <div className="contact-right">
          <h2>Contact Me</h2>
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <label>Name</label>
            <input type="text" name="name" required placeholder="Your Name" />

            <label>Subject</label>
            <input
              type="text"
              name="subject"
              required
              placeholder="Email Subject"
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
            />

            <label>Message</label>
            <input
              name="message"
              required
              placeholder="Write your message..."
            />

            <button type="submit">Send</button>
            {/* </div> */}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
