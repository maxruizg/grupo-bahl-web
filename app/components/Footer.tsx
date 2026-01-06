import { Link } from "react-router";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5">
      {/* Main Footer */}
      <div className="container-custom py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-6">
              <svg
                width="56"
                height="56"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="footerGoldGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#f5e6b8" />
                    <stop offset="50%" stopColor="#c9a227" />
                    <stop offset="100%" stopColor="#9a7b1f" />
                  </linearGradient>
                </defs>
                <path
                  d="M12 8h18c4 0 7 3 7 7 0 3-2 5.5-5 6.5 4 1 7 4 7 8 0 5-4 9-9 9H12V8z"
                  stroke="url(#footerGoldGradient)"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M18 14h10c2 0 3 1.5 3 3.5S30 21 28 21H18V14z"
                  fill="url(#footerGoldGradient)"
                  opacity="0.9"
                />
                <path
                  d="M18 26h11c2.5 0 4 2 4 4.5S31.5 35 29 35H18V26z"
                  fill="url(#footerGoldGradient)"
                  opacity="0.9"
                />
              </svg>
            </Link>
            <p className="text-xl font-display text-gradient-gold mb-4">
              35 años de resultados memorables
            </p>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Transformamos ideas en experiencias que perduran. Cada proyecto es
              una oportunidad de crear algo extraordinario.
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-[#c9a227] text-xs font-medium tracking-widest uppercase mb-6">
              Navegación
            </h4>
            <nav className="flex flex-col gap-4">
              <Link
                to="/"
                className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
              >
                Inicio
              </Link>
              <Link
                to="/proyectos"
                className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
              >
                Proyectos
              </Link>
              <Link
                to="/contacto"
                className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
              >
                Contacto
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-[#c9a227] text-xs font-medium tracking-widest uppercase mb-6">
              Servicios
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="text-gray-400 text-sm">Eventos a la medida</li>
              <li className="text-gray-400 text-sm">Punto de venta</li>
              <li className="text-gray-400 text-sm">Contenido digital</li>
              <li className="text-gray-400 text-sm">Relaciones públicas</li>
              <li className="text-gray-400 text-sm">Eventos sociales</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-[#c9a227] text-xs font-medium tracking-widest uppercase mb-6">
              Contacto
            </h4>
            <div className="space-y-4">
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">
                  Director General
                </p>
                <p className="text-gray-200 text-sm">Rafael Hermo Baqué</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">
                  Email
                </p>
                <a
                  href="mailto:rhermo@grupobahlcasa.com"
                  className="text-gray-200 text-sm hover:text-[#c9a227] transition-colors"
                >
                  rhermo@grupobahlcasa.com
                </a>
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">
                  Teléfono
                </p>
                <a
                  href="tel:+525525844039"
                  className="text-gray-200 text-sm hover:text-[#c9a227] transition-colors block"
                >
                  +52 55 2584 4039
                </a>
                <a
                  href="tel:+525556898906"
                  className="text-gray-400 text-sm hover:text-[#c9a227] transition-colors"
                >
                  Oficina: 55 5689 8906
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container-custom py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            © {currentYear} Grupo Bahlcasa. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-6">
            <Link
              to="/privacidad"
              className="text-gray-600 text-xs hover:text-gray-400 transition-colors"
            >
              Privacidad
            </Link>
            <Link
              to="/terminos"
              className="text-gray-600 text-xs hover:text-gray-400 transition-colors"
            >
              Términos
            </Link>
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-gray-500 hover:text-[#c9a227] transition-colors group"
            aria-label="Volver arriba"
          >
            <span className="text-xs uppercase tracking-wide">Arriba</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:-translate-y-1"
            >
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
