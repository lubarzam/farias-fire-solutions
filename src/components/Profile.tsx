
import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <section id="perfil" className="profile">
      <div className="container">
        <div className="profile-content">
          <div className="profile-image-container">
            <div className="profile-image">
              <div className="profile-placeholder">
                <span className="profile-icon">👨‍🔧</span>
              </div>
            </div>
          </div>
          <div className="profile-info">
            <h2 className="profile-name">Fabián Farías</h2>
            <h3 className="profile-title">Técnico Instalador Especialista</h3>
            <div className="experience-badge">
              <span className="experience-number">40+</span>
              <span className="experience-text">Años de Experiencia</span>
            </div>
            <p className="profile-description">
              Con más de cuatro décadas dedicado a la instalación y mantención de sistemas de calefacción, 
              Fabián Farías se ha consolidado como uno de los técnicos más experimentados y confiables 
              de la Región de La Araucanía.
            </p>
            <p className="profile-description">
              Su expertise abarca desde estufas a leña tradicionales hasta los más modernos sistemas 
              de pellets multimarcas, garantizando instalaciones seguras y eficientes que brindan 
              calidez y confort a los hogares de la región.
            </p>
            <div className="profile-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">✓</span>
                <span>Técnico Certificado</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">✓</span>
                <span>Multimarcas</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">✓</span>
                <span>Garantía de Calidad</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
