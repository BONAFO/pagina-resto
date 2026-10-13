"use client";

import useAboutCarouselHook from "../hooks/main/AboutCarousel";

export function AboutCarousel() {
  const {
    aboutSlides,
    active,
    current,
    handleTouchEnd,
    handleTouchStart,
    setActive,
  } = useAboutCarouselHook();

  return (
    <section
      id="nosotros"
      className="scroll-mt-8 border-b border-[#d2c2a7] bg-[#f0e7d7]"
    >
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="grid grid-cols-1 items-center gap-10 touch-pan-y lg:grid-cols-2 lg:gap-20"
        >
          {/* Imagen */}
          <div className="relative mx-auto w-full max-w-xl lg:mx-0">
            <div className="absolute -right-3 -top-3 h-full w-full border border-[#c6a66b] sm:-right-5 sm:-top-5" />

            <div className="relative aspect-[5/4] w-full overflow-hidden">
              {aboutSlides.map((slide, index) => (
                <img
                  key={slide.image}
                  src={slide.image}
                  alt={slide.alt}
                  loading="lazy"
                  decoding="async"
                  draggable="false"
                  className={`absolute inset-0 h-full w-full select-none object-cover transition-opacity duration-700 ${
                    active === index ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}

              <div className="absolute bottom-4 left-4 max-w-[85%] bg-[#e8decc] px-5 py-4 shadow-lg sm:bottom-6 sm:left-6 sm:px-7">
                <p className="font-serif text-xl italic text-[#5b3927]">
                  {current.imageLabel}
                </p>
              </div>
            </div>
          </div>

          {/* Texto */}
          <div className="flex min-h-[620px] flex-col justify-center sm:min-h-[580px] lg:min-h-[620px]">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a17b3e]">
              {current.eyebrow}
            </p>

            <h2 className="mt-4 min-h-[5.5rem] font-serif text-4xl font-bold leading-tight text-[#33251a] sm:min-h-[7rem] sm:text-5xl">
              {current.title}
            </h2>

            <div className="mt-6 h-px w-20 shrink-0 bg-[#b99551]" />

            <div className="mt-6 min-h-[320px] space-y-4 sm:min-h-[300px]">
              {current.paragraphs.map((paragraph, index) => (
                <p
                  key={`${active}-${index}`}
                  className="text-sm leading-7 text-[#756653] sm:text-base sm:leading-8"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Controles e indicadores */}
            <div className="mt-6 flex items-center gap-4">
              <div className="ml-2 flex items-center gap-2">
                {aboutSlides.map((slide, index) => (
                  <button
                    key={slide.eyebrow}
                    type="button"
                    onClick={() => setActive(index)}
                    aria-label={`Ver contenido ${index + 1}`}
                    aria-current={active === index ? "step" : undefined}
                    className={`h-1.5 transition-all duration-300 ${
                      active === index
                        ? "w-8 bg-[#a17b3e]"
                        : "w-3 bg-[#c9b99c] hover:bg-[#a17b3e]"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
