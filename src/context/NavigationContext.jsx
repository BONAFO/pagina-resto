"use client";

import { createContext, useContext } from "react";

const NavigationContext = createContext();

const navigation = {
  pages: [
    { name: "home", path: "/" },
    { name: "about", path: "/about", slug: "Nosotros", inFoot: true },
    { name: "contact", path: "/contact", slug: "Contacto", inFoot: true },
    { name: "menu", path: "https://menu-resto-ten.vercel.app/", slug: "", inFoot: false },
  ],
};

export function NavigationProvider({ children }) {
  return (
    <NavigationContext.Provider value={navigation}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  return useContext(NavigationContext);
}
