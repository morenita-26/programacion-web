'use client';

import { useState } from "react";
import { useCart } from "../CartContext";

export default function Carrito() {
  const {
    cartItems,
    isCartOpen,
    closeCart,
    removeFromCart,
    changeQuantity,
    emptyCart,
  } = useCart();

  const [cerrando, setCerrando] = useState(false);
  const [mensajeVacio, setMensajeVacio] = useState(false);
  const [mensajeSaliendo, setMensajeSaliendo] = useState(false);

  if (!isCartOpen) {
    return null;
  }

  function cerrar() {
    setCerrando(true);
    setTimeout(() => {
      closeCart();
      setCerrando(false);
    }, 300);
  }

  function handleComprar() {
    if (cartItems.length === 0) {
      setMensajeVacio(true);
      setMensajeSaliendo(false);
      setTimeout(() => setMensajeSaliendo(true), 1800);
      setTimeout(() => {
        setMensajeVacio(false);
        setMensajeSaliendo(false);
      }, 2300);
      return;
    }

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: cartItems }),
    })
      .then((res) => res.json())
      .then(() => {
        emptyCart();
        alert("¡Pedido realizado con éxito! 🎉");
      })
      .catch(() => {
        alert("Hubo un error al procesar tu pedido.");
      });
  }

  const total = cartItems.reduce(
    (acc, item) => acc + item.cantidad * parseFloat(item.precio.toString().replace(".", "")),
    0
  );

  return (
    <div className={cerrando ? "carrito-overlay cerrando" : "carrito-overlay"} onClick={cerrar}>
      <div className={cerrando ? "carrito-panel cerrando" : "carrito-panel"} onClick={(e) => e.stopPropagation()}>
        <div className="carrito-header">
          <h2>Carrito</h2>
          <button className="carrito-cerrar" onClick={cerrar}>✕</button>
        </div>

        <div className="carrito-items">
          {cartItems.length === 0 ? (
            <p className="carrito-vacio">Tu carrito está vacío.</p>
          ) : (
            cartItems.map((item) => (
              <div className="carrito-item" key={item.imagen}>
                <img src={item.imagen} alt="sticker" />
                <div className="carrito-info">
                  <p className="carrito-precio">$ {item.precio}</p>
                  <div className="carrito-cantidad">
                    <button onClick={() => changeQuantity(item.imagen, -1)}>−</button>
                    <span>{item.cantidad}</span>
                    <button onClick={() => changeQuantity(item.imagen, +1)}>+</button>
                  </div>
                </div>
                <button className="carrito-eliminar" onClick={() => removeFromCart(item.imagen)}>
                  🗑
                </button>
              </div>
            ))
          )}
        </div>

        <div className="carrito-footer">
          {mensajeVacio && (
            <p className={mensajeSaliendo ? "carrito-error saliendo" : "carrito-error"}>
              ⚠️ Tu carrito está vacío, agregá productos antes de comprar.
            </p>
          )}
          <p className="carrito-total">
            Subtotal: <strong>$ {total.toLocaleString("es-AR")}</strong>
          </p>
          <button className="carrito-comprar" onClick={handleComprar}>
            COMPRAR
          </button>
          <button className="carrito-vaciar" onClick={emptyCart}>
            VACIAR CARRITO
          </button>
        </div>
      </div>
    </div>
  );
}
