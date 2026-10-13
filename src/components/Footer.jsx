import Link from "next/link";
import useFooterHook from "../hooks/main/Footer";

export default function Footer() {
  const { contactPath, homePath, menuPath } = useFooterHook();

  return (
    <footer className="border-t border-[#5d452d] bg-[#21170f] px-5 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
        <Link href={homePath} className="group">
          <p className="font-serif text-xl font-bold text-[#f1dfb5] transition group-hover:text-[#dfbd72]">
            La Buena Mesa
          </p>
          <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-[#b99551]">
            Cocina tradicional
          </p>
        </Link>

        <p className="text-xs text-[#c5b8a3]">
          © {new Date().getFullYear()} · Una experiencia para disfrutar.
        </p>

        <Link
          href={contactPath}
          className="text-sm text-[#dfbd72] transition hover:text-[#e8dfcc]"
        >
          ← Contacto
        </Link>

        <Link
          href={menuPath}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-[#dfbd72] transition hover:text-[#e8dfcc]"
        >
          Nuestra carta →
        </Link>
      </div>
    </footer>
  );
}
