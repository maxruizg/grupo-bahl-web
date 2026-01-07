import { motion } from "framer-motion";
import type { MetaFunction } from "react-router";
import ContactForm from "~/components/ContactForm";

export const meta: MetaFunction = () => {
  return [
    { title: "Contacto | Grupo Bahlcasa - Agencia 360" },
    {
      name: "description",
      content:
        "Contáctanos para crear tu próximo evento o experiencia. 35 años de resultados memorables. Director General: Rafael Hermo Baqué.",
    },
  ];
};

export default function Contacto() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-8 md:pt-40 md:pb-12 bg-[var(--color-black)] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-radial from-[rgba(219,39,119,0.03)] to-transparent rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block text-[var(--color-pink)] text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Contacto
            </span>
            <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Hablemos de tu{" "}
              <span className="text-gradient-pink">próximo proyecto</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Estamos listos para escucharte y ayudarte a crear experiencias
              que dejen huella.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />

      {/* Map Section (Placeholder) */}
      <section className="py-16 bg-[var(--color-black)]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border border-white/10 h-[400px] bg-[var(--color-gray-900)] flex items-center justify-center"
          >
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--color-pink)]/10 border border-[var(--color-pink)]/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-[var(--color-pink)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p className="text-gray-500">Ciudad de México, México</p>
              <p className="text-gray-600 text-sm mt-1">Mapa interactivo próximamente</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
