import './Selector.css'

export function Selector({ id, valor, opciones = [], onChange }) {
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
      {opciones.map((opcion) => (
        <option key={opcion.valor} value={opcion.valor}>
          {opcion.texto}
        </option>
      ))}
    </select>
  )
}