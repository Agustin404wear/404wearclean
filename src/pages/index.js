import { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import products from '../data/products.json';
import { useRouter } from 'next/router';

export default function Home() {
  const { cart, addToCart } = useContext(CartContext);
  const router = useRouter();

  const navigateToCategory = (category) => {
    router.push(`/category/${category}`);
  };

  const navigateToContact = () => {
    router.push('/contact');
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar navigateToCategory={navigateToCategory} navigateToContact={navigateToContact} />

      <main className="container mx-auto px-4 py-6">
        <h1 className="text-4xl font-bold text-center my-8">Bienvenidos a 404wear</h1>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard
                key={product.id}
                nombre={product.nombre}
                precio={product.precio}
                imagen={product.imagen}
                addToCart={() => addToCart(product)}
              />
            ))
          ) : (
            <p className="text-center text-lg">No hay productos disponibles.</p>
          )}
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold">Carrito de compras</h2>
          {cart.length > 0 ? (
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  {item.nombre} - ${item.precio}
                </li>
              ))}
            </ul>
          ) : (
            <p>El carrito está vacío.</p>
          )}
        </section>
      </main>

      <Footer navigateToContact={navigateToContact} />
    </div>
  );
}
