# Prompts utilizados

Componentes y estructura

- Cerrar modal al hacer click fuera y validar input vacío en Promo
- Crear componente Banner con texto a la izquierda e imagen a la derecha
- Crear componente Calidad con dos banners de distintos colores
- Ajustar el tamaño de uno de los dos banners del componente calidad --> Fallo
- Crear componente Carrito con panel lateral, items, subtotal, botones

Estado y lógica React

- Manejar el contador del carrito con useState en App.js
- Pasar props onAdd, onClose, onEliminar, onCambiarCantidad, onVaciar entre componentes
- Lógica de agregar, eliminar y cambiar cantidad en el carrito
- Vaciar carrito automáticamente al confirmar compra

Fetch y APIs

- Reemplazar datos hardcodeados por fetch a /stickers.json con useEffect
- Agregar fetch POST a jsonplaceholder al tocar COMPRAR

Animaciones y CSS

- Animación de aparición con scroll usando useEffect, useRef y useState
- Slider con loop infinito sin saltar visualmente al volver al inicio
- Animación de entrada y salida del panel del carrito
- Animación de mensaje de error con clase .saliendo

CI/CD y deploy

Commit y push a GitHub desde VS Code
Deploy en Vercel conectando repositorio de GitHub
Configurar Root Directory como mi-app

Preguntas conceptuales

Qué es un fetch y para qué sirve
Qué es el DOM y cómo lo usa React
Qué es una API
Diferencias entre React puro y Next.js
