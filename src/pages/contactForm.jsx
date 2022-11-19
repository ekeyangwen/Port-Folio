import React from "react";

const ContactForm = () => {
  return (
    <form
      action="https://public.herotofu.com/v1/ec4b0fd0-5210-11ed-9f58-f3ab7f1a635a"
      method="post"
    >
      <div className="champ">
        <label htmlFor="name">Nom</label>
        <input name="Name" id="name" type="text" required />
      </div>
      <div className="champ">
        <label htmlFor="email">Email</label>
        <input name="Email" id="email" type="email" required />
      </div>
      <div className="champ">
        <label htmlFor="number">Tel</label>
        <input name="number" id="number" type="tel" />
      </div>
      <div className="champ">
        <label htmlFor="message">Message</label>
        <input name="message" id="message" type="text" />
      </div>
      <div className="submit">
        <input className="submitBtn" type="submit" value="Envoyer" />
      </div>
    </form>
  );
};

export default ContactForm;
