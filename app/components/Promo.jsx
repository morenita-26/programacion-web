'use client';

import { useEffect, useRef, useState } from "react";

export default function Promo() {
  const ref = useRef();
  const [visible, setVisible] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [serie, setSerie] = useState("");
  const [enviado, setEnviado] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const top = ref.current.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function enviarPedido() {
    if (!serie.trim()) return;
    setEnviado(true);

    setTimeout(() => {
      setOpenModal(false);
      setSerie("");
      setEnviado(false);
    }, 1500);
  }

  return (
    <>
      <section className="promo">
        <h2 ref={ref} className={visible ? "fade visible" : "fade"}>
          Todos los stickers para tus series favoritas
        </h2>

        <div className="cta-box">
          <button onClick={() => setOpenModal(true)}>
            ¿No está tu serie? ¡Pedila!
          </button>
        </div>
      </section>

      {openModal && (
        <div className="modal-overlay" onClick={() => setOpenModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            {!enviado ? (
              <>
                <h2>¿Qué serie te gustaría?</h2>
                <input
                  type="text"
                  placeholder="Ej: Breaking Bad"
                  value={serie}
                  onChange={(e) => setSerie(e.target.value)}
                />
                <button onClick={enviarPedido}>Enviar</button>
              </>
            ) : (
              <h2 className="success">Enviado correctamente</h2>
            )}
          </div>
        </div>
      )}
    </>
  );
}
