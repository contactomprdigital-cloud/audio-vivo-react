# Nombre del Equipo
audio-vivo-team
## Integrantes
- Santiago Aburto (san.aburto@duocuc.cl)
- Vicente Aninao (vi.aninao@duocuc.cl)
- Martin Perez (mart.perezr@duocuc.cl)


## Caso
Audio Vivo


## Descripción del caso
Tienda de instrumentos (Guitarras, Bajos, Baterias, Teclados, etc) ubicada en la región de Valparaíso. En su etapa actual, el proyecto resuelve la interacción del usuario en la web mediante un desarrollo enfocado puramente en el frontend. Principalmente, habilita la exploración de un catálogo con 40 productos organizados en 5 categorías de instrumentos. Además, resuelve el proceso de selección implementando un carrito de compras funcional que permite agregar ítems, eliminar productos y calcular el total acumulado. Evita la pérdida de la compra al cambiar o recargar la página gracias a la persistencia de datos en el navegador utilizando localStorage. Por último, previene el ingreso de datos incorrectos validando el formato del formulario de inicio de sesión con JavaScript e integra contenido audiovisual promocional embebido desde YouTube.


## Estructura del proyecto
src/
├── components/
│   ├── atoms/
            BotonEnviar.jsx
            InputCampo.jsx
│   ├── molecules/
            Login.jsx
│   ├── organisms/
            Inicio.jsx
│   └── templates/
└── pages/


## Tecnologías
- React + Vite
- React Bootstrap


## Cómo ejecutar el proyecto
npm install
npm run dev


## Material complementario
Carpeta de Drive con documentos del semestre (ERS y otros):
(https://docs.google.com/document/d/1uXJkwkW-v7cms3Os6l3B5VIBBNBEkOpyYk8jSU-PbRg/edit?usp=drive_link)