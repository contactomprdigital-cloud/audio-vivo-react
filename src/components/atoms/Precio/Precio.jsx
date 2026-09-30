import './Precio.css'

function Precio(props){

    const precioFormateado = typeof props.precio === 'number'
        ? `$${props.precio.toLocaleString('es-CL')}`
        : props.precio;
        
    return(
        <p className="precio fw-bold mb-0">{precioFormateado}</p>
    );
}

export default Precio;