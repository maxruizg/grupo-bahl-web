import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video/Image Placeholder with Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-black" />
        
        {/* Animated gradient orbs */}
        <motion.div
          style={{ y }}
          className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-[#c9a227]/10 rounded-full blur-[150px]"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "50%"]) }}
          className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-[#9a7b1f]/10 rounded-full blur-[120px]"
        />
        
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(201, 162, 39, 0.5) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(201, 162, 39, 0.5) 1px, transparent 1px)`,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 container-custom text-center"
      >
        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-3 mb-8"
        >
          <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#c9a227]" />
          <span className="text-[#c9a227] text-xs font-medium tracking-[0.3em] uppercase">
            Agencia 360
          </span>
          <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#c9a227]" />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="heading-display heading-xl mb-6"
        >
          <span className="block text-white">35 años de</span>
          <span className="block text-gradient-gold italic">
            resultados memorables
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light"
        >
          Transformamos cada visión en una experiencia extraordinaria.
          <br className="hidden md:block" />
          Desde la primera idea hasta la ejecución final.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <Link to="/proyectos" className="btn btn-primary">
            <span>Ver proyectos</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <Link to="/contacto" className="btn btn-ghost">
            <span>Iniciar proyecto</span>
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-20 md:mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {[
            { number: "35+", label: "Años de experiencia" },
            { number: "500+", label: "Eventos realizados" },
            { number: "100+", label: "Clientes satisfechos" },
            { number: "∞", label: "Ideas por explorar" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
              className="text-center"
            >
              <p className="text-3xl md:text-4xl font-display font-light text-gradient-gold mb-2">
                {stat.number}
              </p>
              <p className="text-gray-500 text-xs uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-gray-500"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Decorative corners */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-[#c9a227]/20" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r border-t border-[#c9a227]/20" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-[#c9a227]/20" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-[#c9a227]/20" />
    </section>
  );
}
