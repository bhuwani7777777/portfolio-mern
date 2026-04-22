import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">

      <h1>Contact Me</h1>

      <form className="contact-form">
        <input placeholder="Name" />
        <input placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button>Send Message</button>
      </form>

    </div>
  );
}

export default Contact;