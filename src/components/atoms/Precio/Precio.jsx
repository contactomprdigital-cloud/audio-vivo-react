import './Precio.css'
import { formatoPrecio } from '../../../utils/formatoPrecio'

export function Precio({ valor }) {
  return <p className="precio fw-bold mb-0">{formatoPrecio(valor)}</p>
}