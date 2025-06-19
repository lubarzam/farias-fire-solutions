
import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Instalación de estufa a leña moderna'
    },
    {
      src: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Estufa de pellets en living'
    },
    {
      src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Calefactor instalado en hogar'
    },
    {
      src: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Trabajo de mantención realizado'
    },
    {
      src: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Instalación profesional completada'
    },
    {
      src: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Reparación de sistema de calefacción'
    }
  ];

  return (
    <section id="galeria" className="gallery">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Galería de Trabajos</h2>
          <p className="section-subtitle">
            Algunos de nuestros trabajos realizados en la Región de La Araucanía
          </p>
        </div>
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image.src} alt={image.alt} className="gallery-image" loading="lazy" />
              <div className="gallery-overlay">
                <span className="gallery-text">{image.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
