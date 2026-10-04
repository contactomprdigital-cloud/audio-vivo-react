import './EtiquetaStock.css'

export function EtiquetaStock({ stock }) {
  if (stock <= 0) {
    return <p className="stock stock-agotado">Sin stock</p>
  }

  return (
    <p className="stock">
      Stock: {stock} {stock === 1 ? 'disponible' : 'disponibles'}
    </p>
  )
}