import Banner from "./components/Banner";
import Calidad from "./components/Calidad";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Promo from "./components/Promo";
import Slider from "./components/Slider";
import StickerGrid from "./components/StickerGrid";
import Carrito from "./components/Carrito";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Banner />

      <div className="franja-blanca">
        <img src="/img/descuento.png" alt="descuento" className="franja-img" />
        <p>
          ¡Super descuento solo
          <br />por el mes de
          <br />Mayo!
        </p>
      </div>

      <Slider />
      <div className="separador-blanco"></div>
      <Calidad />
      <Promo />
      <StickerGrid />
      <Footer />
      <Carrito />
    </>
  );
}
