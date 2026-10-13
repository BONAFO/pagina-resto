"use client";

import { useState } from "react";
import useRoutesHook from "../Routes";

export default function useHomeHook() {
  const [menuOpen, setMenuOpen] = useState(false);

  const highlights = [
    {
      number: "01",
      title: "Cocina con identidad",
      description:
        "Recetas tradicionales, ingredientes seleccionados y sabores que invitan a volver.",
    },
    {
      number: "02",
      title: "Un lugar para disfrutar",
      description:
        "Compartí una buena comida, una charla tranquila y momentos especiales.",
    },
    {
      number: "03",
      title: "Nuestra carta",
      description:
        "Desde clásicos argentinos hasta opciones para disfrutar en cualquier momento.",
    },
  ];
  const { aboutPath, contactPath, homePath, menuPath } = useRoutesHook();

  return {
    aboutPath,
    contactPath,
    homePath,
    menuPath,
    menuOpen,
    setMenuOpen,
    highlights,
  };
}
