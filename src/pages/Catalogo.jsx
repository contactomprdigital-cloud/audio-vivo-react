import { useNavigate, useParams } from 'react-router-dom'
import productos from '../data/productos.json'
import categorias from '../data/categorias.json'
import { PlantillaPublica } from '../components/templates/PlantillaPublica/PlantillaPublica'
import { FiltroCategoria } from '../components/molecules/FiltroCategoria/FiltroCategoria'
import { CatalogoProductos } from '../components/organisms/CatalogoProductos/CatalogoProductos'

export default function Catalogo() {
  const navigate = useNavigate()
  const { slug = '' } = useParams() // en /catalogo no hay slug: queda ''

  const categoria = categorias.find((c) => c.slug === slug)
  const visibles = categoria
    ? productos.filter((p) => p.categoria === categoria.nombre)
    : productos

  function elegirCategoria(nuevoSlug) {
    navigate(nuevoSlug ? `/categoria/${nuevoSlug}` : '/catalogo')
  }

  
  function agregarAlCarrito(producto) {
    console.log('Agregar al carrito:', producto.nombre)
  }

  return (
    <PlantillaPublica>
      <h1 className="h2 text-center mb-4">
        {categoria ? categoria.nombre : 'Catálogo completo'}
      </h1>
      <FiltroCategoria categorias={categorias} activa={slug} onElegir={elegirCategoria} />
      <CatalogoProductos productos={visibles} onAgregar={agregarAlCarrito} />
    </PlantillaPublica>
  )
}