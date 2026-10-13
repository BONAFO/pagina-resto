"use client";

export default function ContactTestModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-5 py-8 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="test-modal-title"
        className="relative w-full max-w-md border border-[#b99551]/60 bg-[#f0e7d7] p-7 shadow-2xl sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ornamento */}
        <div className="text-center">
          <span className="font-serif text-3xl text-[#b99551]">
            ✦
          </span>

          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#a17b3e]">
            La Buena Mesa
          </p>

          <h2
            id="test-modal-title"
            className="mt-4 font-serif text-3xl font-bold leading-tight text-[#33251a] sm:text-4xl"
          >
            ¡Es una prueba!
          </h2>

          <div className="mx-auto mt-5 h-px w-16 bg-[#b99551]" />

          <p className="mt-6 text-sm leading-7 text-[#756653]">
            Gracias por completar el formulario. Esta página es una
            demostración, por lo que tu consulta no se envió y no se
            realizó ninguna reserva.
          </p>

          <p className="mt-3 font-serif text-lg italic text-[#5b3927]">
            ¡Esperamos que te haya gustado!
          </p>
        </div>

        {/* Acción */}
        <button
          type="button"
          onClick={onClose}
          autoFocus
          className="mt-8 flex min-h-12 w-full items-center justify-center gap-3 bg-[#5b3927] px-6 py-3 text-sm font-semibold text-[#f1dfb5] transition hover:bg-[#3b281c]"
        >
          Entendido
          <span aria-hidden="true">→</span>
        </button>

        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar modal"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center text-xl text-[#756653] transition hover:text-[#33251a]"
        >
          ×
        </button>
      </div>
    </div>
  );
}