import { useEffect, useState } from "react";

export default function useAboutCarouselHook() {
  const aboutSlides = [
    {
      eyebrow: "Quiénes somos",
      title: "El valor de las cosas simples.",
      paragraphs: [
        "La Buena Mesa nace del amor por la cocina tradicional, los ingredientes elegidos con cuidado y esas recetas que nos recuerdan a casa.",
        "Queremos que cada visita sea una oportunidad para desconectar de la rutina, disfrutar de buenos sabores y compartir tiempo con las personas que más importan.",
        "Cuidamos cada detalle, desde la preparación de nuestros platos hasta el ambiente que te recibe, para que siempre tengas ganas de volver.",
      ],
      image:
        "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=85",
      alt: "Un restaurante preparado para recibir a sus comensales",
      imageLabel: "Hecho para compartir",
    },
    {
      eyebrow: "Nuestra cocina",
      title: "Tradición que se siente en cada plato.",
      paragraphs: [
        "Nos inspiran los sabores de siempre, las recetas que pasan de generación en generación y el placer de cocinar con dedicación.",
        "Seleccionamos cada ingrediente pensando en el equilibrio, la calidad y ese sabor que convierte una comida en un recuerdo.",
        "Nuestra cocina busca respetar lo tradicional sin dejar de disfrutar cada nueva preparación.",
      ],
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=85",
      alt: "Una mesa con platos preparados para compartir",
      imageLabel: "El sabor de la tradición",
    },
    {
      eyebrow: "Nuestra esencia",
      title: "Los mejores momentos suceden alrededor de una mesa.",
      paragraphs: [
        "Una charla que se alarga, una celebración inesperada o una cena entre amigos: creemos que la comida siempre encuentra la forma de reunirnos.",
        "Queremos ofrecerte un espacio cálido donde disfrutar, compartir y sentirte a gusto.",
        "Porque al final, lo que hace especial a una comida no es solamente lo que hay en el plato, sino también con quién lo compartimos.",
      ],
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
      alt: "Interior cálido de un restaurante",
      imageLabel: "Un lugar para encontrarnos",
    },
  ];
  const [active, setActive] = useState(0);
  const [touchStart, setTouchStart] = useState(null);

  const previous = () => {
    setActive((prev) => (prev - 1 + aboutSlides.length) % aboutSlides.length);
  };

  const next = () => {
    setActive((prev) => (prev + 1) % aboutSlides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % aboutSlides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStart === null) return;

    const touchEnd = e.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;
    const threshold = 50;

    if (distance > threshold) {
      next();
    } else if (distance < -threshold) {
      previous();
    }

    setTouchStart(null);
  };

  const current = aboutSlides[active];

  return {
    aboutSlides,
    active,
    setActive,
    touchStart,
    setTouchStart,
    previous,
    next,
    handleTouchStart,
    handleTouchEnd,
    current,
  };
}
