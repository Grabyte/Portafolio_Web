import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import '../contact.css'

function Contact() {
  const form = useRef(null);
  const [buttonText, setButtonText] = useState("Send Email");

  const sendEmail = (event) => {
    event.preventDefault();
    setButtonText("Sending...");

    const serviceID = "default_service"; // Reemplázalo con tu Service ID
    const templateID = "template_hvdk88l"; // Reemplázalo con tu Template ID
    const publicKey = "GvjHafj-y65Ozgzv7"; // Reemplázalo con tu Public Key

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then(() => {
        setButtonText("Send Email");
        alert("¡Correo enviado con éxito!");
        form.current.reset(); // Limpia el formulario después de enviar
      })
      .catch((err) => {
        setButtonText("Send Email");
        alert("Error al enviar el correo: " + err.text);
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
        </form>


    </section>
  );
}

export default Contact;
