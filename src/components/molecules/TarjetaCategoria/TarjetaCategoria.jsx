import './TarjetaCategoria.css'

export function TarjetaCategoria({ categoria, onVer }) {
  return (
    <article className="tarjeta-categoria">
      <button
        type="button"
        className="tarjeta-categoria-boton"
        onClick={() => onVer(categoria.slug)}
      >
        <img src={categoria.imagen} alt="" />
        <span>{categoria.nombre}</span>
      </button>
    </article>
  )
}