// Imports useState for storing form input and useNavigate for redirecting pages
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  // Creates a navigation function to send the user back to Home after submitting
  const navigate = useNavigate();

  // Stores all contact form values
  const [contactInfo, setContactInfo] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  // Updates the correct form field whenever the user types
  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    setContactInfo({
      ...contactInfo,
      [name]: value,
    });
  }

  // Handles the form submission
  function handleSubmit(event) {
    event.preventDefault();

    // Sends the contact form data to the Home page
    navigate("/", { state: contactInfo });
  }

  return (
    <section>
      <h1>Contact Me</h1>

      <div className="contactLayout">
        {/* Displays personal contact details */}
        <div className="contactPanel">
          <h2>Contact Information</h2>

          <p>
            <strong>Email:</strong> sukhpreet1997fdk@gmail.com
          </p>

          <p>
            <strong>Phone:</strong> (437)-326-2533
          </p>

          <p>
            <strong>Location:</strong> Brampton, Canada
          </p>
        </div>

        {/* Contact form for collecting user information */}
        <form onSubmit={handleSubmit} className="contactForm">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={contactInfo.firstName}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={contactInfo.lastName}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Contact Number"
            value={contactInfo.phone}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={contactInfo.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Message"
            value={contactInfo.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="button">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;