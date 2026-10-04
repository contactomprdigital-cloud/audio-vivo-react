import Form from 'react-bootstrap/Form'
import './CampoTexto.css'

export function CampoTexto({ id, valor, onChange, tipo = 'text', placeholder, invalido = false }) {
  return (
    <Form.Control
      id={id}
      name={id}
      type={tipo}
      value={valor}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={invalido ? 'campo-texto campo-error' : 'campo-texto'}
    />
  )
}