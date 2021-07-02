import React from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_xacy70n",
        "template_04kx1fc",
        e.target,
        "user_TX4tFr3XOhZsWCPOE5LKM"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div className="contact text-center">
      <h1>
        Envíanos un correo contándonos tu caso y te responderemos en el menor
        tiempo posible.
      </h1>
      <form className="contact-form" onSubmit={sendEmail}>
        <label for="subject">Asunto</label>
        <input
          className="form-control"
          id="subject"
          placeholder="Escribe un asunto"
          name="subject"
          required
        ></input>
        <label for="name">Nombre</label>
        <input
          className="form-control"
          id="name"
          placeholder="Escribe tu nombre"
          name="name"
          required
        ></input>
        <label for="email">Correo electrónico</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Escriber tu correo"
          name="email"
          required
        ></input>
        <label for="message">Mensaje</label>
        <textarea
          className="form-control"
          id="message"
          rows="3"
          placeholder="Haz un resumen de tu caso"
          name="message"
          required
        ></textarea>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contact;
