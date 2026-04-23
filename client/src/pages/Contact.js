import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">

      {/* 🔥 HEADER */}
      <div className="contact-header">
        <h1>Contact Me</h1>
        <p>Let’s work together or just say hello 👋</p>
      </div>

      <div className="contact-content">

        {/* 📩 FORM */}
        <div className="contact-form-container">
          <h2>Send Message</h2>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Message..." rows="5" required></textarea>

            <button type="submit">Send Message 🚀</button>
          </form>
        </div>

        {/* 📞 INFO */}
        <div className="contact-info">

          <h2>Get in Touch</h2>

          <div className="info-card">
            <span>📧</span>
            <p>bhuwanibikramnembang@gmail.com</p>
          </div>

          <div className="info-card">
            <span>📍</span>
            <p>Nepal / Remote</p>
          </div>

          <div className="info-card">
            <span>💼</span>
            <p>Open for Freelance & Jobs</p>
          </div>

          {/* 🌐 SOCIAL */}
          <div className="social-links">
            <a href="https://github.com/bhuwani7777777" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Contact;