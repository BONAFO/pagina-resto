"use client";

import Link from "next/link";
import { AboutCarousel } from "./AboutCarousel";
import useAboutHook from "../hooks/main/About";

export default function About() {
  const { homePath, menuPath } = useAboutHook();
  return (
    <main className="min-h-screen bg-[#eee5d5] text-[#33251a]">
      {/* Hero */}
      <section className="relative isolate flex min-h-[420px] items-center overflow-hidden bg-[#21170f] sm:min-h-[500px]">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2000&q=85')",
          }}
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#21170f]/95 via-[#21170f]/75 to-[#21170f]/35" />

        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <Link
            href={homePath}
            className="mb-12 inline-flex items-center gap-3 border border-[#b99551]/70 px-4 py-2.5 text-sm text-[#e8dfcc] transition hover:bg-[#c5a15a] hover:text-[#21170f]"
          >
            <span aria-hidden="true">←</span>
            Volver al inicio
          </Link>

          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#dfbd72]">
            <span className="h-px w-10 bg-[#dfbd72]" />
            Nuestra historia
          </p>

          <h1 className="mt-6 max-w-3xl font-serif text-5xl font-bold leading-tight text-[#e8dfcc] sm:text-6xl lg:text-7xl">
            Más que una comida,
            <span className="block italic text-[#dfbd72]">
              un lugar para encontrarnos.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-[#d0c3ae] sm:text-lg">
            En La Buena Mesa creemos que los mejores momentos empiezan alrededor
            de una mesa.
          </p>
        </div>
      </section>

      {/* Nuestra historia */}
      <AboutCarousel />

      {/* Nuestra filosofía */}
      <section className="bg-[#e8decc] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
            <span className="font-serif text-3xl text-[#b99551]">✦</span>

            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#a17b3e]">
              Lo que nos representa
            </p>

            <h2 className="mt-4 font-serif text-4xl font-bold text-[#33251a] sm:text-5xl">
              Nuestra manera de hacer las cosas
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#756653] sm:text-base">
              Una buena experiencia se construye con dedicación, calidez y
              respeto por cada sabor.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px border border-[#d2c2a7] bg-[#d2c2a7] sm:grid-cols-2 lg:grid-cols-3">
            <article className="bg-[#f0e7d7] p-7 sm:p-9 lg:p-10">
              <span className="font-serif text-3xl italic text-[#b99551]">
                01
              </span>

              <h3 className="mt-5 font-serif text-2xl font-bold text-[#33251a]">
                Pasión por la cocina
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#756653]">
                Ponemos dedicación en cada preparación, respetando los sabores
                que hacen especial a la cocina de siempre.
              </p>
            </article>

            <article className="bg-[#f0e7d7] p-7 sm:p-9 lg:p-10">
              <span className="font-serif text-3xl italic text-[#b99551]">
                02
              </span>

              <h3 className="mt-5 font-serif text-2xl font-bold text-[#33251a]">
                Calidez en cada visita
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#756653]">
                Queremos que te sientas cómodo, disfrutes el momento y
                encuentres un espacio para compartir.
              </p>
            </article>

            <article className="bg-[#f0e7d7] p-7 sm:col-span-2 sm:p-9 lg:col-span-1 lg:p-10">
              <span className="font-serif text-3xl italic text-[#b99551]">
                03
              </span>

              <h3 className="mt-5 font-serif text-2xl font-bold text-[#33251a]">
                El gusto de compartir
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#756653]">
                Porque los platos se disfrutan más cuando se convierten en parte
                de una buena historia compartida.
              </p>
            </article>
          </div>
          {/* Navegación inferior */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <Link
              href={homePath}
              className="inline-flex min-h-12 items-center gap-3 border-b border-[#a17b3e] pb-2 text-sm font-semibold text-[#5b3927] transition hover:gap-5"
            >
              <span aria-hidden="true">←</span>
              Volver al inicio
            </Link>

            <Link
              href={menuPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-3 border-b border-[#a17b3e] pb-2 text-sm font-semibold text-[#5b3927] transition hover:gap-5"
            >
              Nuestra carta
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
