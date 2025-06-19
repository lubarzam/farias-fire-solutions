
import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Soluciones <span className="highlight">Farías</span>
            </h1>
            <h2 className="hero-subtitle">
              Instalación y Mantención de Calefactores
            </h2>
            <p className="hero-description">
              Más de 40 años de experiencia en instalación de estufas a leña y pellets. 
              Servicio técnico especializado en la Región de La Araucanía.
            </p>
            <button className="cta-button" onClick={scrollToContact}>
              Cotiza tu Instalación
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
