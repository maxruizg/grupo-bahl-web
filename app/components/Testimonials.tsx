import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    quote: "Un equipo que realmente entiende nuestras necesidades y las transforma en experiencias inolvidables.",
    author: "María González",
    role: "Directora de Marketing",
    company: "Empresa Premium",
  },
  {
    id: 2,
    quote: "Profesionalismo, creatividad y atención al detalle. Grupo Bahlcasa superó todas nuestras expectativas.",
    author: "Carlos Mendoza",
    role: "CEO",
    company: "Corporativo Líder",
  },
  {
    id: 3,
    quote: "Llevamos años trabajando juntos y cada evento es mejor que el anterior. Son nuestro socio estratégico.",
    author: "Ana Rodríguez",
    role: "Gerente de Eventos",
    company: "Marca Internacional",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goTo = (index: number) => {
    setCurrent(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goNext = () => {
    goTo((current + 1) % testimonials.length);
  };

  const goPrev = () => {
    goTo((current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 md:py-32 bg-[var(--color-black)] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-[rgba(201,162,39,0.03)] to-transparent rounded-full blur-3xl" />
      </div>

      {/* Decorative quotes */}
      <div className="absolute top-12 left-8 md:left-16 text-[200px] md:text-[300px] font-display text-[var(--color-gold)]/[0.03] leading-none select-none">
        "
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[var(--color-gold)] text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            Testimonios
          </span>
          <h2 className="heading-display text-3xl md:text-4xl text-white">
            Lo que dicen{" "}
            <span className="text-gradient-gold">nuestros clientes</span>
          </h2>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="relative min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-center"
              >
                {/* Quote */}
                <blockquote className="text-2xl md:text-3xl lg:text-4xl font-display text-white leading-relaxed mb-8">
                  "{testimonials[current].quote}"
                </blockquote>

                {/* Author */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent mb-6" />
                  <p className="text-[var(--color-gold)] font-medium text-lg">
                    {testimonials[current].author}
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
                    {testimonials[current].role} — {testimonials[current].company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-8 mt-12">
            {/* Prev Button */}
            <button
              onClick={goPrev}
              className="w-12 h-12 rounded-full border border-white/10 hover:border-[var(--color-gold)]/50 flex items-center justify-center text-gray-500 hover:text-[var(--color-gold)] transition-all duration-300 hover:bg-[var(--color-gold)]/5"
              aria-label="Anterior"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex items-center gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goTo(index)}
                  className={`transition-all duration-300 ${
                    index === current
                      ? "w-8 h-2 bg-[var(--color-gold)] rounded-full"
                      : "w-2 h-2 bg-white/20 hover:bg-white/40 rounded-full"
                  }`}
                  aria-label={`Ir al testimonio ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={goNext}
              className="w-12 h-12 rounded-full border border-white/10 hover:border-[var(--color-gold)]/50 flex items-center justify-center text-gray-500 hover:text-[var(--color-gold)] transition-all duration-300 hover:bg-[var(--color-gold)]/5"
              aria-label="Siguiente"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
