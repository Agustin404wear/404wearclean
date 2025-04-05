import React from 'react';

const ProductCard = ({ nombre, precio, imagen, addToCart }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img src={imagen} alt={nombre} className="w-full h-48 object-cover rounded-t-lg" />
      <h3 className="text-xl font-bold my-2">{nombre}</h3>
      <p className="text-lg">${precio}</p>
      <button onClick={addToCart} className="bg-blue-500 text-white mt-4 p-2 w-full rounded-lg">Añadir al carrito</button>
    </div>
  );
};

export default ProductCard;
