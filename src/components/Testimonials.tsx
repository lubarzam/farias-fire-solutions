
import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'María González',
      location: 'Temuco',
      text: 'Excelente servicio de Fabián. Instaló nuestra estufa a pellets de manera impecable y nos explicó todo el mantenimiento. Muy profesional y confiable.',
      rating: 5
    },
    {
      name: 'Carlos Ramírez',
      location: 'Vilcún',
      text: 'Después de 40 años en el rubro, se nota la experiencia. Reparó nuestra estufa antigua y quedó como nueva. Totalmente recomendado.',
      rating: 5
    },
    {
      name: 'Ana Morales',
      location: 'Cunco',
      text: 'Servicio rápido y eficiente. Fabián llegó puntual, trabajó ordenadamente y el precio fue muy justo. Sin duda lo volveremos a contratar.',
      rating: 5
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>★</span>
    ));
  };

  return (
    <section id="testimonios" className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Lo que Dicen Nuestros Clientes</h2>
          <p className="section-subtitle">
            La confianza de nuestros clientes es nuestro mejor respaldo
          </p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-content">
                <div className="stars">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <strong className="author-name">{testimonial.name}</strong>
                  <span className="author-location">{testimonial.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
