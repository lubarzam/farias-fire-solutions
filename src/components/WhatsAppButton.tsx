
import React from 'react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const openWhatsApp = () => {
    const message = "Hola Fabián, me interesa obtener más información sobre sus servicios de calefacción.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/56912345678?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="whatsapp-float" onClick={openWhatsApp}>
      <div className="whatsapp-icon">
        💬
      </div>
      <div className="whatsapp-tooltip">
        ¡Cotiza por WhatsApp!
      </div>
    </div>
  );
};

export default WhatsAppButton;
