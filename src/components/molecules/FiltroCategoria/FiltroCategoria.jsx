import { Selector } from '../../atoms/Selector/Selector'

export function FiltroCategoria({ categorias, activa, onElegir }) {
  const opciones = [
    { valor: '', texto: 'Todas' },
    ...categorias.map((c) => ({ valor: c.slug, texto: c.nombre })),
  ]

  return (
    <div className="d-flex align-items-center gap-2 mb-4">
      <label htmlFor="filtro-categoria" className="fw-bold">
        Categoría
      </label>
      <Selector
        id="filtro-categoria"
        valor={activa}
        opciones={opciones}
        onChange={onElegir}
      />
    </div>
  )
}