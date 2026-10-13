"use client";

import { useRouter } from "next/navigation";
import { useNavigation } from "../context/NavigationContext";

/**
 * @param {"home" | "contact" | "about" | "menu"} path
 */

export const useNavigationHook = (path) => {
  const { pages } = useNavigation();

  switch (path) {
    case "home":
      return pages.find((page) => page.name === "home")?.path;

    case "contact":
      return pages.find((page) => page.name === "contact")?.path;

    case "menu":
      return pages.find((page) => page.name === "menu")?.path;

    case "about":
      return pages.find((page) => page.name === "about")?.path;
  }
};

export const useCategoryNavigationHook = () => {
  const productsPath = useNavigationHook("products");

  const getCategorySlug = (name) => {
    return name
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "-");
  };

  return (category) => {
    const slug = getCategorySlug(category.name);
    return `${productsPath}?category=${slug}`;
  };
};

export const useNavigate = () => {
  const router = useRouter();

  const useMenuNavigation = () => {
    router.push(useNavigationHook("menu"), "_blank", "noopener,noreferrer");
  };

  

  return {
    toMenu: useMenuNavigation,
    navigate: (path, cb = () => {}, after = false) => {
      if (after) {
        router.push(path);
        cb();
        return "";
      }
      cb();
      router.push(path);
    },
  };
};
