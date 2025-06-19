
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Crear mensaje para WhatsApp
    const whatsappMessage = `Hola Fabián, me contacto desde el sitio web:
    
Nombre: ${formData.name}
Email: ${formData.email}
Teléfono: ${formData.phone}
Mensaje: ${formData.message}`;
    
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/56912345678?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const openWhatsApp = () => {
    const message = "Hola Fabián, me interesa cotizar una instalación de calefactor.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/56912345678?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contacto" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Contáctanos</h2>
          <p className="section-subtitle">
            Estamos aquí para ayudarte con tu proyecto de calefacción
          </p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-subtitle">Información de Contacto</h3>
            <div className="contact-item">
              <span className="contact-icon">📱</span>
              <div className="contact-details">
                <strong>WhatsApp</strong>
                <p>+56 9 1234 5678</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <div className="contact-details">
                <strong>Email</strong>
                <p>contacto@solucionesfarias.cl</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div className="contact-details">
                <strong>Ubicación</strong>
                <p>Vilcún, Región de La Araucanía</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">🕒</span>
              <div className="contact-details">
                <strong>Horario de Atención</strong>
                <p>Lunes a Sábado: 8:00 - 18:00</p>
              </div>
            </div>
            <button className="whatsapp-cta" onClick={openWhatsApp}>
              💬 Escribir por WhatsApp
            </button>
          </div>
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3 className="form-title">Enviar Consulta</h3>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Tu nombre completo"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Tu email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Tu teléfono"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Cuéntanos sobre tu proyecto..."
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  className="form-textarea"
                ></textarea>
              </div>
              <button type="submit" className="form-submit">
                Enviar Consulta
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
