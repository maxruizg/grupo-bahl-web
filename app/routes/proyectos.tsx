import { motion } from "framer-motion";
import { Link } from "react-router";
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Proyectos | Grupo Bahlcasa - Casos de Éxito" },
    {
      name: "description",
      content:
        "Descubre nuestros casos de éxito: eventos corporativos, convenciones, activaciones BTL y más. 35 años creando experiencias memorables.",
    },
  ];
};

const projects = [
  {
    id: 1,
    title: "Porsche",
    subtitle: "24HRS. Driven to Le Mans Mexico City",
    year: "2025",
    category: "Evento Corporativo",
  },
  {
    id: 2,
    title: "Domino's Pizza",
    subtitle: "Convención de Gerentes",
    year: "2025",
    category: "Convención",
  },
  {
    id: 3,
    title: "Aura Media",
    subtitle: "Premios Aura",
    year: "2025",
    category: "Premiación",
  },
  {
    id: 4,
    title: "Líderes",
    subtitle: "Premios 25 Líderes de MKT",
    year: "2025",
    category: "Premiación",
  },
  {
    id: 5,
    title: "Mattel",
    subtitle: "Desfile el día del niño",
    year: "2024",
    category: "Activación",
  },
  {
    id: 6,
    title: "Omoda Jaeco",
    subtitle: "Drive Test",
    year: "2024",
    category: "Evento Automotriz",
  },
  {
    id: 7,
    title: "Nivea Men",
    subtitle: "Activación con Real Madrid",
    year: "2024",
    category: "Activación BTL",
  },
  {
    id: 8,
    title: "Fiestas Privadas",
    subtitle: "Artistas",
    year: "2024",
    category: "Eventos Sociales",
  },
];

const categories = ["Todos", "Evento Corporativo", "Convención", "Premiación", "Activación", "Eventos Sociales"];

export default function Proyectos() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[var(--color-black)] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-[rgba(219,39,119,0.03)] to-transparent rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-[var(--color-pink)] text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Portafolio
            </span>
            <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Nuestros{" "}
              <span className="text-gradient-pink">casos de éxito</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Más de 35 años transformando ideas en experiencias memorables
              para las marcas más importantes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 md:py-20 bg-[#0d0d0d]">
        <div className="container-custom">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-3 mb-12"
          >
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  index === 0
                    ? "bg-[var(--color-pink)] text-[var(--color-black)]"
                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-2xl bg-[var(--color-gray-900)] aspect-[4/3]">
                  {/* Gradient placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-gray-800)] via-[var(--color-gray-900)] to-[var(--color-black)]">
                    <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_50%,rgba(219,39,119,0.1),transparent_70%)]" />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <span className="inline-block w-fit px-3 py-1 rounded-full bg-[var(--color-pink)]/10 border border-[var(--color-pink)]/30 text-[var(--color-pink)] text-xs tracking-wider uppercase mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-display text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                      {project.subtitle}
                    </p>
                    <span className="text-[var(--color-pink)] text-sm font-medium mt-2">
                      {project.year}
                    </span>
                  </div>

                  {/* Border */}
                  <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[var(--color-pink)]/30 transition-colors duration-500 pointer-events-none" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[var(--color-black)] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-[rgba(219,39,119,0.05)] to-transparent rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="heading-display text-3xl md:text-4xl text-white mb-6">
              ¿Listo para crear tu{" "}
              <span className="text-gradient-pink">próximo evento</span>?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Cuéntanos tu idea y juntos la convertiremos en una experiencia
              inolvidable.
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[var(--color-pink)] to-[var(--color-pink-light)] text-white font-medium rounded-full hover:shadow-lg hover:shadow-[var(--color-pink)]/20 transition-all duration-300"
            >
              <span>Contáctanos</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
