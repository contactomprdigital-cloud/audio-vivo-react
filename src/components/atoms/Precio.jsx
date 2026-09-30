import './styles/Precio.css'

function Precio(props){
    return(
        <p className="precio fw-bold mb-0">{props.precio}</p>
    );
}

export default Precio;