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
            <Link to="/" className="inline-flex items-center gap-3 mb-6 group">
              <svg
                width="56"
                height="56"
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-500 group-hover:scale-105"
              >
                <defs>
                  <linearGradient
                    id="footerPinkGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#fce7f3" />
                    <stop offset="50%" stopColor="#db2777" />
                    <stop offset="100%" stopColor="#9d174d" />
                  </linearGradient>
                  <linearGradient
                    id="footerPinkGradientReverse"
                    x1="100%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#f472b6" />
                    <stop offset="100%" stopColor="#db2777" />
                  </linearGradient>
                </defs>
                {/* Outer decorative ring */}
                <circle
                  cx="26"
                  cy="26"
                  r="24"
                  stroke="url(#footerPinkGradient)"
                  strokeWidth="1.5"
                  fill="none"
                  opacity="0.3"
                />
                {/* G Letter - Left side */}
                <path
                  d="M12 26C12 18.268 18.268 12 26 12C29.5 12 32.7 13.3 35 15.5L32.5 18C30.8 16.4 28.5 15.5 26 15.5C20.201 15.5 15.5 20.201 15.5 26C15.5 31.799 20.201 36.5 26 36.5C29.5 36.5 32.5 34.8 34.5 32.2V28H26V24.5H38V33.5C35 38.5 30.8 41 26 41C18.268 41 12 34.732 12 26Z"
                  fill="url(#footerPinkGradient)"
                />
                {/* B Letter - Overlapping right side */}
                <path
                  d="M28 14H36C39.866 14 43 17.134 43 21C43 23.2 42 25.2 40.4 26.5C42.5 27.8 44 30.2 44 33C44 37.418 40.418 41 36 41H28V38H36C38.761 38 41 35.761 41 33C41 30.239 38.761 28 36 28H28V25H36C37.657 25 39 23.657 39 22C39 20.343 37.657 19 36 19H28V14Z"
                  fill="url(#footerPinkGradientReverse)"
                  opacity="0.9"
                />
                {/* Accent dot */}
                <circle
                  cx="42"
                  cy="14"
                  r="3"
                  fill="url(#footerPinkGradient)"
                />
              </svg>
              <div className="flex flex-col">
                <span className="text-2xl font-display font-semibold tracking-wide text-gradient-pink leading-tight">
                  Bahlcasa
                </span>
                <span className="text-[10px] text-gray-500 tracking-[0.2em] uppercase">
                  Grupo
                </span>
              </div>
            </Link>
            <p className="text-xl font-display text-gradient-pink mb-4">
              35 años de resultados memorables
            </p>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Transformamos ideas en experiencias que perduran. Cada proyecto es
              una oportunidad de crear algo extraordinario.
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-[#db2777] text-xs font-medium tracking-widest uppercase mb-6">
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
            <h4 className="text-[#db2777] text-xs font-medium tracking-widest uppercase mb-6">
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
            <h4 className="text-[#db2777] text-xs font-medium tracking-widest uppercase mb-6">
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
                  className="text-gray-200 text-sm hover:text-[#db2777] transition-colors"
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
                  className="text-gray-200 text-sm hover:text-[#db2777] transition-colors block"
                >
                  +52 55 2584 4039
                </a>
                <a
                  href="tel:+525556898906"
                  className="text-gray-400 text-sm hover:text-[#db2777] transition-colors"
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
            className="flex items-center gap-2 text-gray-500 hover:text-[#db2777] transition-colors group"
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
