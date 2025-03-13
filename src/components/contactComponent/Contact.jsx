import { useContext, useEffect, useRef, useState } from 'react';
import { LanguageContext } from '../languagueProviderComponent/languagueContext';
import contactText from './ContactText';
import emailjs from "@emailjs/browser";
import '../../styles/contact.css';

function Contact() {
  const { language } = useContext(LanguageContext);
  const text = contactText[language];

  const form = useRef(null);
  const [buttonText, setButtonText] = useState(text.button.send);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    setButtonText(text.button.send);
  }, [language, text.button.send]);

  const sendEmail = (event) => {
    event.preventDefault();
    setButtonText(text.button.sending); // Usar el texto según idioma
    setSuccessMessage("");

    const serviceID = import.meta.env.VITE_SERVICE_ID;
    const templateID = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then(() => {
        setButtonText(text.button.send);
        setSuccessMessage(text.messages.success);
        form.current.reset();

        setTimeout(() => {
          setSuccessMessage("");
        }, 5000);
      })
      .catch((err) => {
        setButtonText(text.button.send);
        setSuccessMessage(`${text.messages.error} ${err.text}`);
      });
  };

  return (
    <section className="contact">
      <h2>{text.title}</h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className="contact__box">
          <label htmlFor="from_name">{text.labels.name}</label>
          <input type="text" name="from_name" id="from_name" required />
          <label htmlFor="email_id">{text.labels.email}</label>
          <input type="email" name="email_id" id="email_id" required />
          <label htmlFor="message">{text.labels.message}</label>
          <textarea name="message" id="message" cols={30} rows={10} required></textarea>
          <input className="contact__btn" type="submit" value={buttonText} />
        </div>
        {successMessage && (
          <div className="success__message">
            {successMessage}
          </div>
        )}
      </form>
    </section>
  );
}

export default Contact;



