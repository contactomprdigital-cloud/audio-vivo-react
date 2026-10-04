import { Link } from 'react-router-dom'

export default function NoEncontrada() {
  return (
    <div className="text-center my-5">
      <h1>Página no encontrada</h1>
      <p>La dirección que buscas no existe.</p>
      <Link to="/">Volver al inicio</Link>
    </div>
  )
}