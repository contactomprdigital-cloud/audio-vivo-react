import { CampoTexto } from '../../atoms/CampoTexto/CampoTexto'

export function CampoFormulario({ id, etiqueta, error, ...resto }) {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label fw-bold">
        {etiqueta}
      </label>
      <CampoTexto id={id} invalido={!!error} {...resto} />
      {error && <div className="invalid-feedback d-block">{error}</div>}
    </div>
  )
}