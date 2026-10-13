"use client";

import Link from "next/link";
import useHomeHook from "../hooks/main/Home";

export default function Home() {
  const {
    aboutPath,
    contactPath,
    homePath,
    menuPath,
    menuOpen,
    setMenuOpen,
    highlights,
  } = useHomeHook();
  return (
    <main className="min-h-screen bg-[#f8f5ed] text-[#211a14]">
      {/* Navegación */}
      <nav className="relative z-10 border-b border-[#d9c9a5] bg-[#f0e7d7]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <Link href={homePath} className="group">
            <span className="block font-serif text-2xl font-bold tracking-wide text-[#33251a] sm:text-3xl">
              La Buena Mesa
            </span>
            <span className="mt-1 block text-[9px] uppercase tracking-[0.3em] text-[#a17b3e] sm:text-[10px]">
              Cocina tradicional
            </span>
          </Link>

          <div className="hidden items-center gap-8 text-sm text-[#5b4a37] md:flex">
            <a href={aboutPath} className="transition hover:text-[#a17b3e]">
              Nosotros
            </a>

            <a href={contactPath} className="transition hover:text-[#a17b3e]">
              Contacto
            </a>

            <Link
              href={menuPath}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#a17b3e] px-5 py-3 font-medium text-[#5b3927] transition hover:bg-[#5b3927] hover:text-white"
            >
              Ver la carta
            </Link>
          </div>

          <div className="relative md:hidden">
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              className="flex items-center gap-3 border border-[#a17b3e] px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#5b3927] transition hover:bg-[#5b3927] hover:text-white"
            >
              <span>Menú</span>
              <span className="text-base">{menuOpen ? "×" : "☰"}</span>
            </button>

            {menuOpen && (
              <div className="absolute right-0 top-full z-50 mt-3 w-60 border border-[#d9c9a5] bg-[#f0e7d7] p-2 shadow-xl">
                <Link
                  href={aboutPath}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 text-sm text-[#5b4a37] transition hover:bg-[#e8decc] hover:text-[#a17b3e]"
                >
                  Nosotros
                </Link>

                <Link
                  href={contactPath}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 text-sm text-[#5b4a37] transition hover:bg-[#e8decc] hover:text-[#a17b3e]"
                >
                  Contacto
                </Link>

                <div className="my-2 border-t border-[#d9c9a5]" />

                <Link
                  href={menuPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between bg-[#5b3927] px-4 py-3 text-sm font-semibold text-[#fff8e9] transition hover:bg-[#a17b3e]"
                >
                  La carta
                  <span aria-hidden="true">↗</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Presentación principal */}
      <section className="relative isolate flex min-h-[620px] items-center overflow-hidden bg-[#24180f] sm:min-h-[680px] lg:min-h-[740px]">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2200&q=90')",
          }}
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/45 via-transparent to-black/15" />

        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:py-28">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-12 bg-[#d8b66d]" />
              <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#e8cb8c] sm:text-sm">
                Una experiencia para disfrutar
              </p>
            </div>

            <h1 className="font-serif text-5xl font-bold leading-[1.08] text-[#fff8e9] sm:text-6xl lg:text-7xl xl:text-8xl">
              El placer de
              <span className="mt-2 block italic text-[#dfbd72]">
                comer bien.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/85 sm:text-lg">
              Sabores de siempre, cocina hecha con dedicación y una mesa
              preparada para compartir buenos momentos.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href={menuPath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 items-center justify-center gap-3 bg-[#c5a15a] px-7 text-sm font-semibold text-[#21180d] transition hover:bg-[#e0c27f]"
              >
                Descubrí nuestra carta
                <span aria-hidden="true">↗</span>
              </Link>

              <a
                href={aboutPath}
                className="inline-flex min-h-14 items-center justify-center border border-white/50 px-7 text-sm font-medium text-white transition hover:border-[#dfbd72] hover:text-[#dfbd72]"
              >
                Conocé nuestro restaurante
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-white/75 sm:text-sm">
              <span className="flex items-center gap-2">
                <span className="text-[#dfbd72]">✦</span>
                Cocina tradicional
              </span>
              <span className="hidden h-4 w-px bg-white/30 sm:block" />
              <span className="flex items-center gap-2">
                <span className="text-[#dfbd72]">✦</span>
                Momentos para compartir
              </span>
            </div>
          </div>

          {/* Detalle editorial para escritorio */}
          <div className="hidden justify-self-end lg:block">
            <div className="w-72 border border-[#dfbd72]/60 bg-black/20 p-8 text-center backdrop-blur-sm xl:w-80">
              <span className="font-serif text-4xl text-[#dfbd72]">❧</span>

              <p className="mt-5 font-serif text-2xl italic leading-relaxed text-[#fff8e9]">
                “Cada plato cuenta una historia.”
              </p>

              <div className="mx-auto mt-6 h-px w-16 bg-[#dfbd72]" />

              <p className="mt-5 text-[10px] uppercase tracking-[0.3em] text-[#dfbd72]">
                La Buena Mesa
              </p>
            </div>
          </div>
        </div>

        <a
          href="#nosotros"
          aria-label="Descubrir más"
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[9px] uppercase tracking-[0.3em] text-white/70 lg:flex"
        >
          Descubrí
          <span className="text-xl text-[#dfbd72]">↓</span>
        </a>
      </section>

      {/* Introducción */}
      <section
        id="nosotros"
        className="scroll-mt-8 border-b border-[#e5dac5] bg-[#f0e7d7]"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-12 lg:py-28">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a17b3e]">
              Bienvenidos
            </p>

            <h2 className="mt-4 max-w-xl font-serif text-4xl font-bold leading-tight text-[#33251a] sm:text-5xl">
              Hay sabores que siempre nos encuentran.
            </h2>

            <div className="mt-6 h-px w-20 bg-[#b99551]" />

            <p className="mt-6 max-w-xl text-base leading-8 text-[#756656]">
              Creemos que comer bien es mucho más que sentarse a la mesa. Es
              disfrutar de una receta conocida, descubrir un nuevo sabor y
              compartir tiempo con quienes más queremos.
            </p>

            <Link
              href={aboutPath}
              className="mt-8 inline-flex items-center gap-3 border-b border-[#a17b3e] pb-2 text-sm font-semibold text-[#5b3927] transition hover:gap-5"
            >
              Conocé nuestra historia
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -right-3 -top-3 h-full w-full border border-[#c6a66b] sm:-right-5 sm:-top-5" />

            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=85"
              alt="Mesa preparada para una experiencia gastronómica"
              loading="lazy"
              decoding="async"
              className="relative aspect-[5/4] w-full object-cover"
            />

            <div className="absolute bottom-4 left-4 bg-[#f0e7d7] px-5 py-4 shadow-lg sm:bottom-6 sm:left-6 sm:px-7">
              <p className="font-serif text-xl italic text-[#5b3927]">
                Tradición en cada detalle
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores del restaurante */}
      <section
        id="experiencia"
        className="scroll-mt-8 bg-[#f2ecdf] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a17b3e]">
              Nuestra esencia
            </p>

            <h2 className="mt-4 font-serif text-4xl font-bold text-[#33251a] sm:text-5xl">
              Lo que hace especial a nuestra mesa
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#756656] sm:text-base">
              Una propuesta que combina el cariño por la cocina con el placer de
              compartir.
            </p>
          </div>

          <div className="grid grid-cols-1 border border-[#d9c9a5] bg-[#f0e7d7] sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item, index) => (
              <article
                key={item.number}
                className={`p-7 sm:p-9 lg:p-10 ${
                  index !== 2 ? "lg:border-r lg:border-[#e5dac5]" : ""
                } ${
                  index === 0
                    ? "border-b border-[#e5dac5] sm:border-r lg:border-b-0"
                    : ""
                } ${
                  index === 1
                    ? "border-b border-[#e5dac5] sm:border-b-0 lg:border-r"
                    : ""
                }`}
              >
                <span className="font-serif text-sm italic text-[#b99551]">
                  {item.number}
                </span>

                <h3 className="mt-5 font-serif text-2xl font-bold text-[#33251a]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#756656]">
                  {item.description}
                </p>

                <div className="mt-7 h-px w-12 bg-[#b99551]" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Llamada a la acción */}
      <section className="relative overflow-hidden bg-[#2b1d13] px-5 py-20 text-center sm:px-8 sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(197,161,90,0.13),transparent_65%)]" />

        <div className="relative mx-auto max-w-3xl">
          <span className="font-serif text-3xl text-[#dfbd72]">✦</span>

          <p className="mt-5 text-xs uppercase tracking-[0.35em] text-[#dfbd72]">
            Tu próxima experiencia
          </p>

          <h2 className="mt-4 font-serif text-4xl font-bold leading-tight text-[#fff8e9] sm:text-5xl lg:text-6xl">
            La mesa está servida.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
            Descubrí nuestros platos y encontrá ese sabor que estabas buscando.
          </p>

          <Link
            href={menuPath}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-14 items-center justify-center gap-3 bg-[#c5a15a] px-8 text-sm font-semibold text-[#21180d] transition hover:bg-[#e0c27f]"
          >
            Ver la carta completa
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
