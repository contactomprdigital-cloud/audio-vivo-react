import './ContadorCantidad.css'

export function ContadorCantidad({cantidad, min = 1, max = Infinity, onCambiar}){
    return(
        <div className="contador">
            <button type="button" className="contador-boton" onClick={() => onCambiar(cantidad - 1)}
            disabled={cantidad <= min}
            aria-label="Resta uno">
                -
            </button>
            <span className="contador-numero">{cantidad}</span>
            <button type="button" className="contador-boton" onClick={() => onCambiar(cantidadd + 1)}
            disabled={cantidad >= max}
            aria-label="Sumar uno">
                +
            </button>
        </div>
    )
}