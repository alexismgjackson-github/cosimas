import "./Contact.css";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  // console.log(formData);

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <div className="contact-container">
        <h1>Contact Us</h1>
        <div className="contact-info">
          <div className="phone-and-email-container">
            <ul className="phone-and-email">
              <li>Telephone: (206) 123-4567</li>
              <li>Email: info@cosimascoffee.com</li>
            </ul>
          </div>
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <label htmlFor="">First Name (required)</label>
              <input
                type="text"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
                className="contact-form-input"
                required
              />
              <label htmlFor="">Last Name (required)</label>
              <input
                type="text"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
                className="contact-form-input"
                required
              />
              <label htmlFor="">Email (required)</label>
              <input
                type="text"
                onChange={handleChange}
                name="email"
                value={formData.email}
                className="contact-form-input"
                required
              />
              <label htmlFor="">Message (required)</label>
              <textarea
                id="contact-form-textarea"
                cols="30"
                rows="10"
                onChange={handleChange}
                name="message"
                value={formData.message}
                required
              />
              <button className="contact-btn">Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
