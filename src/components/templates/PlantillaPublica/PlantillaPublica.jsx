import Container from 'react-bootstrap/Container'
import { useNavigate } from 'react-router-dom'
import { Navbar } from '../../organisms/Navbar/Navbar'
import { Footer } from '../../organisms/Footer/Footer'

export function PlantillaPublica({ children }) {
  const navigate = useNavigate()

  return (
    <>
      <Navbar cantidadCarrito={0} onNavegar={navigate} />
      <Container as="main" className="flex-grow-1 my-4">
        {children}
      </Container>
      <Footer />
    </>
  )
}