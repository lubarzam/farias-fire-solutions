
import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: '🔧',
      title: 'Instalación',
      description: 'Instalación profesional de estufas a leña y pellets multimarcas con garantía de calidad.'
    },
    {
      icon: '⚙️',
      title: 'Mantención',
      description: 'Servicio de mantención preventiva y correctiva para prolongar la vida útil de tu equipo.'
    },
    {
      icon: '🔨',
      title: 'Reparación',
      description: 'Reparación especializada de estufas y cañones con repuestos originales.'
    },
    {
      icon: '📦',
      title: 'Venta de Insumos',
      description: 'Próximamente: kits de instalación y accesorios para calefacción.'
    }
  ];

  return (
    <section id="servicios" className="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Nuestros Servicios</h2>
          <p className="section-subtitle">
            Soluciones integrales en calefacción con más de 40 años de experiencia
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
