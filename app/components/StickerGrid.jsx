'use client';

import { useEffect, useState } from "react";
import { useCart } from "../CartContext";

export default function StickerGrid() {
  const [seriesData, setSeriesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("/stickers.json")
      .then((res) => res.json())
      .then((data) => {
        setSeriesData(data);
        setLoading(false);
      })
      .catch(() => {
        setSeriesData([]);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p style={{ textAlign: "center", padding: "40px" }}>Cargando stickers...</p>;
  }

  return (
    <main className="main">
      {seriesData.map((serie) => (
        <section key={serie.id} id={serie.id}>
          <h2>{serie.titulo}</h2>

          <div className="grid">
            {serie.stickers.map((sticker, index) => (
              <article className="card" key={index}>
                <img src={sticker.imagen} alt={`Sticker de ${serie.titulo}`} />
                <button
                  className="add"
                  onClick={() => addToCart({ imagen: sticker.imagen, precio: sticker.precio })}
                >
                  Agregar al carrito
                </button>
                <p>$ {sticker.precio}</p>
              </article>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
