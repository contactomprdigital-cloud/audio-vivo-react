import React from 'react'
import './Selector.css'

export default function Selector({ id, valor, opciones = [], onChange }) {
  const handleChange = (e) => {
    if (onChange) {
      onChange(e.target.value)
    }
  }

  return (
    <select
      id={id}
      value={valor}
      onChange={handleChange}
      className="selector-atom"
    >
      {opciones.map((opcion, index) => (
        <option key={index} value={opcion.valor}>
          {opcion.texto}
        </option>
      ))}
    </select>
  )
}