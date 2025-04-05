import { useRouter } from 'next/router';

export default function Producto() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Detalles del producto: {id}</h1>
    </div>
  );
}