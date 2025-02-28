import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import '../styles/contact.css';

function Contact() {
  const form = useRef(null);
  const [buttonText, setButtonText] = useState("Enviar");
  const [successMessage, setSuccessMessage] = useState("");

  const sendEmail = (event) => {
    event.preventDefault();
    setButtonText("Enviando...");
    setSuccessMessage("");

    const serviceID = import.meta.env.VITE_SERVICE_ID;
    const templateID = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then(() => {
        setButtonText("Enviar");
        setSuccessMessage("¡Correo enviado con éxito!");
        form.current.reset(); // Limpiar el formulario después de enviar
        
        // Después de 5 segundos, eliminar el mensaje de éxito
        setTimeout(() => {
          setSuccessMessage("");
        }, 5000);
      })
      .catch((err) => {
        setButtonText("Enviar");
        setSuccessMessage(`Error al enviar el correo: ${err.text}`);
      });
  };

  return (
    <section className="contact">
      <h2>Contacto</h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className="contact__box">
          <label htmlFor="from_name">Nombre</label>
          <input type="text" name="from_name" id="from_name" required />
          <label htmlFor="email_id">Correo Electrónico</label>
          <input type="email" name="email_id" id="email_id" required />
          <label htmlFor="message">Mensaje</label>
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


