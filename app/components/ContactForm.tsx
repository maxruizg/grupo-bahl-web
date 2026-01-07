import { useState } from "react";
import { motion } from "framer-motion";

interface FormData {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  mensaje: string;
}

interface FormErrors {
  email?: string;
  mensaje?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    mensaje: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = "Por favor ingresa un email válido";
    }

    if (formData.mensaje.length < 10) {
      newErrors.mensaje = "El mensaje debe tener al menos 10 caracteres";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after showing success
    setTimeout(() => {
      setFormData({
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        mensaje: "",
      });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contacto" className="section-padding bg-[#0d0d0d] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-radial from-[rgba(219,39,119,0.03)] to-transparent rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-radial from-[rgba(219,39,119,0.02)] to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-[var(--color-pink)] text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Contacto
            </span>
            <h2 className="heading-display heading-lg mb-6">
              Ponte en{" "}
              <span className="text-gradient-pink">contacto</span>{" "}
              con nosotros
            </h2>
            <p className="text-gray-400 text-lg mb-12">
              Llevemos tu idea al siguiente nivel. Cuéntanos sobre tu proyecto
              y te ayudaremos a hacerlo realidad.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-pink)]/10 border border-[var(--color-pink)]/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[var(--color-pink)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium">Rafael Hermo Baqué</p>
                  <p className="text-gray-500 text-sm">Director General</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-pink)]/10 border border-[var(--color-pink)]/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[var(--color-pink)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <a href="mailto:rhermo@grupobahlcasa.com" className="text-white hover:text-[var(--color-pink)] transition-colors">
                    rhermo@grupobahlcasa.com
                  </a>
                  <p className="text-gray-500 text-sm">Email</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-pink)]/10 border border-[var(--color-pink)]/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[var(--color-pink)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <a href="tel:+525525844039" className="text-white hover:text-[var(--color-pink)] transition-colors">
                    +52 55 2584 4039
                  </a>
                  <p className="text-gray-500 text-sm">Celular</p>
                  <a href="tel:+525556898906" className="text-gray-400 hover:text-[var(--color-pink)] transition-colors text-sm">
                    55 5689 8906 (Oficina)
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nombre" className="block text-sm text-gray-400 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full px-6 py-5 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-gray-600 focus:border-[var(--color-pink)]/50 focus:outline-none focus:ring-1 focus:ring-[var(--color-pink)]/20 transition-all"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="apellido" className="block text-sm text-gray-400 mb-2">
                    Apellido
                  </label>
                  <input
                    type="text"
                    id="apellido"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                    className="w-full px-6 py-5 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-gray-600 focus:border-[var(--color-pink)]/50 focus:outline-none focus:ring-1 focus:ring-[var(--color-pink)]/20 transition-all"
                    placeholder="Tu apellido"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-6 py-5 bg-white/[0.03] border rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-1 transition-all ${
                    errors.email
                      ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/20"
                      : "border-white/10 focus:border-[var(--color-pink)]/50 focus:ring-[var(--color-pink)]/20"
                  }`}
                  placeholder="tu@email.com"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="telefono" className="block text-sm text-gray-400 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full px-6 py-5 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-gray-600 focus:border-[var(--color-pink)]/50 focus:outline-none focus:ring-1 focus:ring-[var(--color-pink)]/20 transition-all"
                  placeholder="+52 55 1234 5678"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="mensaje" className="block text-sm text-gray-400 mb-2">
                  Cuéntanos de tu proyecto *
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`w-full px-6 py-5 bg-white/[0.03] border rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-1 transition-all resize-none ${
                    errors.mensaje
                      ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/20"
                      : "border-white/10 focus:border-[var(--color-pink)]/50 focus:ring-[var(--color-pink)]/20"
                  }`}
                  placeholder="Describe tu evento o proyecto..."
                />
                {errors.mensaje && (
                  <p className="text-red-400 text-sm mt-1">{errors.mensaje}</p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                whileHover={{ scale: isSubmitting || isSubmitted ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting || isSubmitted ? 1 : 0.98 }}
                className={`w-full py-4 rounded-xl font-medium text-sm tracking-wider uppercase transition-all duration-300 ${
                  isSubmitted
                    ? "bg-green-600 text-white"
                    : "bg-gradient-to-r from-[var(--color-pink)] to-[var(--color-pink-light)] text-white hover:shadow-lg hover:shadow-[var(--color-pink)]/20"
                } disabled:opacity-70 disabled:cursor-not-allowed`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Enviando...
                  </span>
                ) : isSubmitted ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    ¡Mensaje enviado!
                  </span>
                ) : (
                  "Enviar mensaje"
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
