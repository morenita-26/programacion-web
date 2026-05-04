'use client';

import { useEffect, useRef, useState } from "react";

const images = [
  "/img/greys.jpg",
  "/img/modern.webp",
  "/img/harry.jpg",
  "/img/friends.avif",
];

const loop = [images[images.length - 1], ...images, images[0]];

export default function Slider() {
  const [index, setIndex] = useState(1);
  const [transition, setTransition] = useState(true);
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  const next = () => setIndex((i) => i + 1);
  const prev = () => setIndex((i) => i - 1);

  useEffect(() => {
    if (index === loop.length - 1) {
      setTimeout(() => {
        setTransition(false);
        setIndex(1);
      }, 700);
    }
    if (index === 0) {
      setTimeout(() => {
        setTransition(false);
        setIndex(loop.length - 2);
      }, 700);
    }
  }, [index]);

  useEffect(() => {
    if (!transition) {
      setTimeout(() => setTransition(true), 50);
    }
  }, [transition]);

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

  const realIndex =
    index === 0 ? images.length - 1 : index === loop.length - 1 ? 0 : index - 1;

  return (
    <>
      <p
        ref={ref}
        className={
          visible ? "slider-text slider-fade visible" : "slider-text slider-fade"
        }
      >
        Los MEJORES momentos con tus SERIES
      </p>
      <section className="slider" id="inicio">
        <div
          className="slider-track"
          style={{
            transform: `translateX(-${index * 100}%)`,
            transition: transition ? "transform 0.7s ease-in-out" : "none",
          }}
        >
          {loop.map((img, i) => (
            <img key={i} src={img} className="slide-img" alt={`Slide ${i + 1}`} />
          ))}
        </div>

        <button className="prev" onClick={prev}>
          ❮
        </button>
        <button className="next" onClick={next}>
          ❯
        </button>

        <div className="dots">
          {images.map((_, i) => (
            <span
              key={i}
              className={i === realIndex ? "dot active" : "dot"}
              onClick={() => setIndex(i + 1)}
            />
          ))}
        </div>
      </section>
    </>
  );
}
