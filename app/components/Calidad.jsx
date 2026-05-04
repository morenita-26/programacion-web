'use client';

import { useEffect, useRef, useState } from "react";

export default function Calidad() {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

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

  return (
    <>
      <div className="calidad-banner1">
        <div>
          <h2>Calidad premium<br />a simple vista</h2>
          <p>Todos nuestros productos son de vinilo protegido</p>
        </div>
        <img
          ref={ref}
          src="/img/calidad_premium.png"
          alt="calidad"
          className={visible ? "calidad-img slider-fade visible" : "calidad-img slider-fade"}
        />
      </div>

      <div className="calidad-banner2">
        <h3>Acabados únicos</h3>
        <img src="/img/acabados_unicos.png" alt="acabados" className="calidad-banner2-img" />
      </div>
    </>
  );
}
