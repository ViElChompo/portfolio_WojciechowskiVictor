import React, { useState, useCallback, useEffect } from "react";

export default function GalleryProject({ project }) {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const images = project.images || [];
  const onOpen = (i) => { setIdx(i); setOpen(true); };
  const onClose = () => setOpen(false);
  const prev = useCallback(() => setIdx((i) => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setIdx((i) => (i + 1) % images.length), [images.length]);

  // ESC / ← →
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, prev, next]);

  return (
    <section className="space-y-6">
      {/* Header */}
      <header className="space-y-2">
        <h1 className="text-xl font-semibold text-gray-900">{project.title}</h1>
        <div className="flex flex-wrap items-center gap-2 text-sm text-gray-700">
          <span className="rounded-full border border-gray-200 bg-white px-3 py-1">{project.year}</span>
          <span className="rounded-full border border-gray-200 bg-white px-3 py-1">{project.category}</span>
          {(project.techStack || []).map((t) => (
            <span key={t} className="rounded-full border border-gray-200 bg-white px-3 py-1">{t}</span>
          ))}
        </div>
      </header>

      {/* Cover */}
      {project.cover && (
        <div
          className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm cursor-zoom-in"
          onClick={() => onOpen(0)}
        >
          <img src={project.cover} alt={project.title} className="w-full h-auto object-cover" />
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {images.map((img, i) => (
          <figure
            key={i}
            className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
          >
            <button
              type="button"
              onClick={() => onOpen(i)}
              className="relative block w-full text-left cursor-zoom-in"
            >
              <img
                src={img.src}
                alt={img.alt || project.title}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </button>
            {img.alt && (
              <figcaption className="px-4 py-3 text-sm text-gray-700 border-t border-gray-100 bg-gray-50">
                {img.alt}
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      {/* Lightbox */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={onClose}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="relative max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[idx]?.src}
              alt={images[idx]?.alt || project.title}
              className="w-full h-auto rounded-xl shadow-2xl"
            />
            {images[idx]?.alt && (
              <div className="mt-3 text-sm text-gray-100/90">
                {images[idx].alt}
              </div>
            )}

            {/* Controls */}
            <button
              type="button"
              onClick={onClose}
              className="absolute -top-3 -right-3 rounded-full bg-white/90 hover:bg-white shadow p-2"
              aria-label="Fermer"
            >
              ✕
            </button>
            <div className="absolute inset-y-0 left-0 flex items-center">
              <button
                type="button"
                onClick={prev}
                className="mx-2 rounded-full bg-white/90 hover:bg-white shadow p-2"
                aria-label="Précédent"
              >
                ‹
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center">
              <button
                type="button"
                onClick={next}
                className="mx-2 rounded-full bg-white/90 hover:bg-white shadow p-2"
                aria-label="Suivant"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
