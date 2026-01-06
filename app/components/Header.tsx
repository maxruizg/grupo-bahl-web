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
                {/* Logo Icon */}
                <div className="relative">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-transform duration-500 group-hover:rotate-6"
                  >
                    <defs>
                      <linearGradient
                        id="goldGradient"
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
                      stroke="url(#goldGradient)"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      d="M18 14h10c2 0 3 1.5 3 3.5S30 21 28 21H18V14z"
                      fill="url(#goldGradient)"
                      opacity="0.9"
                    />
                    <path
                      d="M18 26h11c2.5 0 4 2 4 4.5S31.5 35 29 35H18V26z"
                      fill="url(#goldGradient)"
                      opacity="0.9"
                    />
                  </svg>
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-[#c9a227] blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                </div>
                {/* Text */}
                <div className="hidden sm:block">
                  <span className="text-lg font-display font-medium tracking-wide text-gradient-gold">
                    Bahlcasa
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
                      ? "text-[#c9a227]"
                      : "text-gray-300 hover:text-[#c9a227]"
                  }`}
                >
                  {link.label}
                  {location.pathname === link.href && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a227] to-transparent"
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
                  className="w-full h-0.5 bg-[#c9a227] origin-left"
                />
                <motion.span
                  animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                  className="w-4 h-0.5 bg-[#c9a227]"
                />
                <motion.span
                  animate={{
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? -7 : 0,
                  }}
                  className="w-full h-0.5 bg-[#c9a227] origin-left"
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
                          ? "text-gradient-gold"
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
                  className="text-[#c9a227] text-sm hover:underline"
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
