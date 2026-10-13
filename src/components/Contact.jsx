
"use client";

import Link from "next/link";
import useContactHook from "../hooks/main/Contact";
import ContactTestModal from "../layouts/ContactTestModal";

export default function Contact() {
  const {
    business,
    form,
    handleChange,
    homePath,
    inputClass,
    menuPath,
    contactItemClass,
    handleFormSubmit,
    isReservation,
    modalOpen,
    openTestModal,
    phoneRequired,
    setModalOpen,
  } = useContactHook();

 

  return (
    <main className="min-h-screen bg-[#f0e7d7] text-[#33251a]">
      {/* Encabezado */}
      <section className="px-5 pb-10 pt-8 sm:px-8 sm:pb-14 sm:pt-12">
        <div className="mx-auto max-w-7xl">
          <Link
            href={homePath}
            className="mb-10 inline-flex text-sm text-[#756653] transition hover:text-[#a17b3e]"
          >
            ← Volver al inicio
          </Link>

          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#a17b3e]">
              Estamos para vos
            </p>

            <h1 className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-6xl">
              Hablemos un rato.
            </h1>

            <div className="mx-auto mt-6 h-px w-20 bg-[#b99551]" />

            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#756653] sm:text-base sm:leading-8">
              ¿Tenés alguna consulta, querés organizar una ocasión especial o
              simplemente necesitás más información? Nos encantaría escucharte.
            </p>
          </div>
        </div>
      </section>

      {/* Información y formulario */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24">
        <div className="mx-auto grid max-w-7xl items-stretch gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          {/* Información del restaurante */}
          <aside className="flex flex-col bg-[#21170f] p-7 text-[#f1dfb5] sm:p-10">
            <p className="text-xs uppercase tracking-[0.3em] text-[#b99551]">
              {business.tagline}
            </p>

            <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
              Una buena charla también abre el apetito.
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#c5b8a3]">
              Estamos para ayudarte con tus reservas, consultas y encuentros
              especiales. Contanos qué necesitás.
            </p>

            <div className="my-8 h-px bg-[#5d452d]" />

            <div className="space-y-7">
              {/* Dirección: Google Maps sigue funcionando */}
              <div className="flex gap-4">
                <span className="text-xl text-[#dfbd72]">⌖</span>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#b99551]">
                    Dirección
                  </p>

                  <button
                    type="button"
                    onClick={openTestModal}
                    className={`${contactItemClass} text-left`}
                  >
                    {business.address}
                  </button>

                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      business.address,
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-block text-xs text-[#dfbd72] transition hover:text-white"
                  >
                    Cómo llegar →
                  </a>
                </div>
              </div>

              {/* Horarios: abre el modal */}
              <div className="flex gap-4">
                <span className="text-xl text-[#dfbd72]">◷</span>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#b99551]">
                    Horarios
                  </p>

                  <button
                    type="button"
                    onClick={openTestModal}
                    className={`${contactItemClass} text-left leading-6`}
                  >
                    {business.hours}
                  </button>
                </div>
              </div>

              {/* Correo: abre el modal */}
              <div className="flex gap-4">
                <span className="text-xl text-[#dfbd72]">✉</span>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#b99551]">
                    Correo electrónico
                  </p>

                  <button
                    type="button"
                    onClick={openTestModal}
                    className={`${contactItemClass} break-all text-left`}
                  >
                    {business.email}
                  </button>
                </div>
              </div>

              {/* Teléfono: abre el modal */}
              <div className="flex gap-4">
                <span className="text-xl text-[#dfbd72]">☎</span>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#b99551]">
                    Teléfono y reservas
                  </p>

                  <button
                    type="button"
                    onClick={openTestModal}
                    className={`${contactItemClass} text-left`}
                  >
                    {business.phone}
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-auto pt-10">
              <p className="font-serif text-xl italic text-[#dfbd72]">
                Te esperamos en nuestra mesa.
              </p>
            </div>
          </aside>

          {/* Formulario */}
          <div className="border border-[#d2c2a7] bg-[#e8decc] p-6 sm:p-10 lg:p-12">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a17b3e]">
                  Contacto
                </p>

                <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">
                  Dejanos tu mensaje.
                </h2>
              </div>

              <span className="hidden text-2xl text-[#b99551] sm:block">
                ✦
              </span>
            </div>

            <p className="mt-4 text-sm leading-7 text-[#756653]">
              Completá tus datos y contanos cómo podemos ayudarte.
            </p>

            <form onSubmit={handleFormSubmit} className="mt-8 space-y-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium"
                  >
                    Nombre completo *
                  </label>

                  <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="¿Cómo te llamás?"
                    autoComplete="name"
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium"
                  >
                    Correo electrónico {!isReservation && "*"}
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    autoComplete="email"
                    required={!isReservation}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium"
                  >
                    Teléfono {phoneRequired ? "*" : "(opcional)"}
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Tu número de contacto"
                    autoComplete="tel"
                    required={phoneRequired}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium"
                  >
                    Motivo de consulta *
                  </label>

                  <select
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  >
                    <option>Reserva de mesa</option>
                    <option>Eventos y celebraciones</option>
                    <option>Consulta sobre la carta</option>
                    <option>Otra consulta</option>
                  </select>
                </div>
              </div>

              {isReservation && (
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="date"
                      className="mb-2 block text-sm font-medium"
                    >
                      Fecha deseada *
                    </label>

                    <input
                      id="date"
                      name="date"
                      type="date"
                      min={new Date().toLocaleDateString("en-CA")}
                      value={form.date}
                      onChange={handleChange}
                      required
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="guests"
                      className="mb-2 block text-sm font-medium"
                    >
                      Cantidad de personas
                    </label>

                    <select
                      id="guests"
                      name="guests"
                      value={form.guests}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option>1 persona</option>
                      <option>2 personas</option>
                      <option>3 personas</option>
                      <option>4 personas</option>
                      <option>5 personas</option>
                      <option>6 personas</option>
                      <option>7 o más personas</option>
                    </select>
                  </div>
                </div>
              )}

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  Tu mensaje {!isReservation && "*"}
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Escribí tu consulta o contanos algún detalle..."
                  required={!isReservation}
                  className={`${inputClass} resize-y`}
                />
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 bg-[#5b3927] px-6 py-4 text-sm font-semibold text-[#f1dfb5] transition hover:bg-[#3b281c] sm:w-auto"
              >
                Preparar consulta
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>

              <p className="text-xs leading-5 text-[#8b7a65]">
                Los campos marcados con * son obligatorios. Este formulario
                es una demostración y no envía datos reales.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Invitación a la carta */}
      <section className="border-t border-[#d2c2a7] bg-[#e8decc] px-5 py-12 text-center sm:px-8 sm:py-16">
        <p className="font-serif text-2xl italic text-[#5b3927] sm:text-3xl">
          Mientras tanto, hay algo rico esperándote.
        </p>

        <Link
          href={menuPath}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex border border-[#b99551] px-7 py-3 text-sm font-semibold text-[#5b3927] transition hover:bg-[#5b3927] hover:text-[#f1dfb5]"
        >
          Descubrir nuestra carta →
        </Link>
      </section>

      {/* Modal de demostración */}
      <ContactTestModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </main>
  );
}
