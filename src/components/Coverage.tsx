
import React from 'react';
import './Coverage.css';

const Coverage = () => {
  const communes = [
    'Vilcún', 'Temuco', 'Padre Las Casas', 'Cunco', 'Melipeuco', 
    'Curacautín', 'Lonquimay', 'Pucón', 'Villarrica', 'Lican Ray'
  ];

  return (
    <section id="cobertura" className="coverage">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Área de Cobertura</h2>
          <p className="section-subtitle">
            Atendemos la Región de La Araucanía desde Vilcún hacia las comunas cercanas
          </p>
        </div>
        <div className="coverage-content">
          <div className="coverage-map">
            <div className="map-placeholder">
              <div className="map-icon">🗺️</div>
              <p className="map-text">Región de La Araucanía</p>
              <div className="location-pin">
                <span className="pin-icon">📍</span>
                <span className="pin-text">Vilcún (Base)</span>
              </div>
            </div>
          </div>
          <div className="coverage-list">
            <h3 className="coverage-subtitle">Comunas que Atendemos:</h3>
            <div className="communes-grid">
              {communes.map((commune, index) => (
                <div key={index} className="commune-item">
                  <span className="commune-icon">✓</span>
                  <span className="commune-name">{commune}</span>
                </div>
              ))}
            </div>
            <div className="coverage-note">
              <p>
                <strong>Zona de operación:</strong> Desde Vilcún hacia comunas aledañas. 
                Para consultas sobre otras localidades, contáctanos directamente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coverage;
