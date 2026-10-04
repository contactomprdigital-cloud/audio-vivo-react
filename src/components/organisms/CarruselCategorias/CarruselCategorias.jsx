import { TarjetaCategoria } from '../../molecules/TarjetaCategoria/TarjetaCategoria'
import './CarruselCategorias.css'

export function CarruselCategorias({ categorias, onVer }) {
  return (
    <div className="carrusel-categorias">
      {categorias.map((categoria) => (
        <TarjetaCategoria key={categoria.slug} categoria={categoria} onVer={onVer} />
      ))}
    </div>
  )
}