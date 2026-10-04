import './Boton.css'

export function Boton({ children, onClick, variante = 'comprar', tipo = 'button', deshabilitado = false }) {
  return (
    <button
      type={tipo}
      className={`btn-${variante}`}
      onClick={onClick}
      disabled={deshabilitado}
    >
      {children}
    </button>
  )
}