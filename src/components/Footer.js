import React from 'react';

const Footer = ({ navigateToContact }) => {
  return (
    <footer className="bg-gray-800 p-4 text-center">
      <button onClick={navigateToContact} className="text-white">Contacto</button>
    </footer>
  );
};

export default Footer;
