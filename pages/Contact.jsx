import "./Contact.css";

export default function Contact() {
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
            <form className="contact-form">
              <label htmlFor="">First Name</label>
              <input type="text" />
              <label htmlFor="">Last Name</label>
              <input type="text" />
              <label htmlFor="">Email (required)</label>
              <input type="text" />
              <label htmlFor="">Message (required)</label>
              <textarea name="" id="" cols="30" rows="10"></textarea>
              <button className="contact-btn">Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
