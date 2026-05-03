import { useState } from "react";


function Navbar({ cartCount, onCartClick }) {
  const [open, setOpen] = useState(false);

  return (
      <header className="navbar">
        <div className="logo">
          <span className="brand">Sticker Mania</span>
          <span className="since">Since 2026</span>
        </div>
    

      <nav>
        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          Inicio
        </a>

        <div className="dropdown">
          <button
            className="series-button"
            onClick={() => setOpen(!open)}
          >
            Series
          </button>

          {open && (
            <div className="dropdown-content">
              <a href="#friends" onClick={() => setOpen(false)}>Friends</a>
              <a href="#greys" onClick={() => setOpen(false)}>Grey's Anatomy</a>
              <a href="#harry" onClick={() => setOpen(false)}>Harry Potter</a>
              <a href="#modern" onClick={() => setOpen(false)}>Modern Family</a>
            </div>
          )}
        </div>

        <a href="#contacto">Contacto</a>

        <a href="#carrito" className="cart" onClick={(e) => { e.preventDefault(); onCartClick(); }}>
          🛒 Carrito <span>{cartCount}</span>
        </a>
      </nav>
    </header>
  );
}

export default Navbar;