export default function ProductCard({ nombre, precio, imagen }) {
  return (
    <div>
      <img src={imagen} alt={nombre} />
      <h3>{nombre}</h3>
      <p>{precio}</p>
      <button>Comprar</button>
    </div>
  );
}