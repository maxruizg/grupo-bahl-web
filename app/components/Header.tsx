import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/proyectos", label: "Proyectos" },
    { href: "/contacto", label: "Contacto" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-black/90 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="container-custom">
          <nav className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link
              to="/"
              className="relative z-50 group"
              aria-label="Grupo Bahlcasa - Inicio"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-3"
              >
                {/* Logo Icon - Elegant GB Monogram */}
                <div className="relative">
                  <svg
                    width="52"
                    height="52"
                    viewBox="0 0 52 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-all duration-500 group-hover:scale-105"
                  >
                    <defs>
                      <linearGradient
                        id="pinkGradient"
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
                        id="pinkGradientReverse"
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
                      stroke="url(#pinkGradient)"
                      strokeWidth="1.5"
                      fill="none"
                      opacity="0.3"
                      className="origin-center transition-transform duration-700 group-hover:rotate-45"
                      style={{ transformOrigin: '26px 26px' }}
                    />
                    {/* G Letter - Left side */}
                    <path
                      d="M12 26C12 18.268 18.268 12 26 12C29.5 12 32.7 13.3 35 15.5L32.5 18C30.8 16.4 28.5 15.5 26 15.5C20.201 15.5 15.5 20.201 15.5 26C15.5 31.799 20.201 36.5 26 36.5C29.5 36.5 32.5 34.8 34.5 32.2V28H26V24.5H38V33.5C35 38.5 30.8 41 26 41C18.268 41 12 34.732 12 26Z"
                      fill="url(#pinkGradient)"
                    />
                    {/* B Letter - Overlapping right side */}
                    <path
                      d="M28 14H36C39.866 14 43 17.134 43 21C43 23.2 42 25.2 40.4 26.5C42.5 27.8 44 30.2 44 33C44 37.418 40.418 41 36 41H28V38H36C38.761 38 41 35.761 41 33C41 30.239 38.761 28 36 28H28V25H36C37.657 25 39 23.657 39 22C39 20.343 37.657 19 36 19H28V14Z"
                      fill="url(#pinkGradientReverse)"
                      opacity="0.9"
                    />
                    {/* Accent dot */}
                    <circle
                      cx="42"
                      cy="14"
                      r="3"
                      fill="url(#pinkGradient)"
                      className="origin-center transition-all duration-500 group-hover:scale-125"
                    />
                  </svg>
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-[#db2777] blur-2xl opacity-0 group-hover:opacity-25 transition-opacity duration-500" />
                </div>
                {/* Text */}
                <div className="hidden sm:flex flex-col">
                  <span className="text-xl font-display font-semibold tracking-wide text-gradient-pink leading-tight">
                    Bahlcasa
                  </span>
                  <span className="text-[10px] text-gray-500 tracking-[0.2em] uppercase">
                    Grupo
                  </span>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-12">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`relative text-sm font-medium tracking-widest uppercase transition-colors duration-300 ${
                    location.pathname === link.href
                      ? "text-[#db2777]"
                      : "text-gray-300 hover:text-[#db2777]"
                  }`}
                >
                  {link.label}
                  {location.pathname === link.href && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#db2777] to-transparent"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:block">
              <Link
                to="/contacto"
                className="btn btn-outline text-xs px-6 py-3"
              >
                Hablemos
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative z-50 w-12 h-12 flex items-center justify-center"
              aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isMobileMenuOpen}
            >
              <div className="w-6 h-4 relative flex flex-col justify-between">
                <motion.span
                  animate={{
                    rotate: isMobileMenuOpen ? 45 : 0,
                    y: isMobileMenuOpen ? 7 : 0,
                  }}
                  className="w-full h-0.5 bg-[#db2777] origin-left"
                />
                <motion.span
                  animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                  className="w-4 h-0.5 bg-[#db2777]"
                />
                <motion.span
                  animate={{
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? -7 : 0,
                  }}
                  className="w-full h-0.5 bg-[#db2777] origin-left"
                />
              </div>
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden bg-black/98 backdrop-blur-xl"
          >
            <div className="flex flex-col items-center justify-center h-full">
              <nav className="flex flex-col items-center gap-8">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: index * 0.1 + 0.1 }}
                  >
                    <Link
                      to={link.href}
                      className={`text-3xl font-display font-light tracking-wide ${
                        location.pathname === link.href
                          ? "text-gradient-pink"
                          : "text-gray-200"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Contact info in mobile menu */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-12 left-0 right-0 text-center"
              >
                <p className="text-gray-500 text-sm mb-2">Contáctanos</p>
                <a
                  href="mailto:rhermo@grupobahlcasa.com"
                  className="text-[#db2777] text-sm hover:underline"
                >
                  rhermo@grupobahlcasa.com
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
