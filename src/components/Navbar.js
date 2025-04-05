import React from 'react';

const Navbar = ({ navigateToCategory, navigateToContact }) => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-center space-x-4">
        <li><button onClick={() => navigateToCategory('men')} className="text-white">Hombres</button></li>
        <li><button onClick={() => navigateToCategory('women')} className="text-white">Mujeres</button></li>
        <li><button onClick={navigateToContact} className="text-white">Contacto</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
