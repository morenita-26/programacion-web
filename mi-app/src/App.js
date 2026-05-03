import { useState } from "react";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Promo from "./components/Promo";
import StickerGrid from "./components/StickerGrid";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Calidad from "./components/Calidad";
import Carrito from "./components/Carrito";
import "./App.css";

function App() {
  const [carrito, setCarrito] = useState([]);
  const [carritoAbierto, setCarritoAbierto] = useState(false);

  function agregarAlCarrito(sticker) {
    setCarrito((prev) => {
      const existe = prev.find((item) => item.imagen === sticker.imagen);
      if (existe) {
        return prev.map((item) =>
          item.imagen === sticker.imagen
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }
      return [...prev, { ...sticker, cantidad: 1 }];
    });
  }

  function eliminarDelCarrito(imagen) {
    setCarrito((prev) => prev.filter((item) => item.imagen !== imagen));
  }

  function cambiarCantidad(imagen, delta) {
    setCarrito((prev) =>
      prev.map((item) =>
        item.imagen === imagen
          ? { ...item, cantidad: Math.max(1, item.cantidad + delta) }
          : item
      )
    );
  }

  function vaciarCarrito() {
    setCarrito([]);
  }

  const cartCount = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <div>
      <Navbar cartCount={cartCount} onCartClick={() => setCarritoAbierto(true)} />
      <Banner />
      <div className="franja-blanca">
        <img src="/img/descuento.png" alt="descuento" className="franja-img" />
        <p>¡Super descuento solo<br />por el mes de<br />Mayo!</p>
      </div>
      <Slider />
      <div className="separador-blanco"></div>
      <Calidad />
      <Promo />
      <StickerGrid onAdd={agregarAlCarrito} />
      <Footer />

      {carritoAbierto && (
        <Carrito
          items={carrito}
          onClose={() => setCarritoAbierto(false)}
          onEliminar={eliminarDelCarrito}
          onCambiarCantidad={cambiarCantidad}
          onVaciar={vaciarCarrito}
        />
      )}
    </div>
  );
}

export default App;