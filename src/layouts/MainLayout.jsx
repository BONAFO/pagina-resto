"use client";
import Footer from "../components/Footer";
import { NavigationProvider } from "../context/NavigationContext";

export default function MainLayout({ children }) {
  return (
    <>
      <NavigationProvider>
        {children}
        <Footer />
      </NavigationProvider>
    </>
  );
}
