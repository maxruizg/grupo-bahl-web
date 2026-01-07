import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Eventos a la medida",
    subtitle: "Nos encargamos de todo",
    description:
      "Diseñamos y producimos eventos corporativos, lanzamientos, convenciones y experiencias únicas que conectan con tu audiencia.",
    image: "/images/service-eventos.jpg",
  },
  {
    number: "02",
    title: "Punto de venta",
    subtitle: "Experiencias diferenciadas",
    description:
      "Activaciones BTL, sampling, pop-ups y estrategias de trade marketing que generan impacto directo en el consumidor.",
    image: "/images/service-pdv.jpg",
  },
  {
    number: "03",
    title: "Contenido digital",
    subtitle: "Creatividad y media developing",
    description:
      "Producción de contenido, estrategias digitales, manejo de redes sociales y campañas que amplifican tu mensaje.",
    image: "/images/service-digital.jpg",
  },
  {
    number: "04",
    title: "Relaciones Públicas",
    subtitle: "Acercamiento de influencers & artistas",
    description:
      "Gestión de talento, influencer marketing, relaciones con medios y estrategias de comunicación integral.",
    image: "/images/service-rrpp.jpg",
  },
  {
    number: "05",
    title: "Sociales",
    subtitle: "Eventos privados",
    description:
      "Bodas, celebraciones, fiestas temáticas y eventos sociales con la calidad y atención que cada momento especial merece.",
    image: "/images/service-sociales.jpg",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="section-padding bg-[var(--color-black)] relative">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[rgba(219,39,119,0.04)] to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="inline-block text-[var(--color-pink)] text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            Nuestros Servicios
          </span>
          <h2 className="heading-display heading-lg">
            Lo que{" "}
            <span className="text-gradient-pink">hacemos</span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-4">
          {services.map((service, index) => (
            <motion.article
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-white/[0.02] to-transparent border border-white/5 hover:border-[var(--color-pink)]/30 transition-all duration-500">
                <div className="flex flex-col md:flex-row md:items-center gap-6 p-8 md:p-10">
                  {/* Number */}
                  <div className="flex-shrink-0 w-20">
                    <span className="text-5xl md:text-6xl font-display text-[var(--color-pink)]/20 group-hover:text-[var(--color-pink)]/50 transition-colors duration-500">
                      {service.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-grow grid md:grid-cols-[1fr,1.5fr] gap-4 md:gap-8 items-center">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-display text-white group-hover:text-[var(--color-pink-light)] transition-colors mb-1">
                        {service.title}
                      </h3>
                      <span className="text-[var(--color-pink)] text-sm tracking-wide">
                        {service.subtitle}
                      </span>
                    </div>
                    <p className="text-gray-500 group-hover:text-gray-400 transition-colors leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="flex-shrink-0 hidden md:block">
                    <div className="w-12 h-12 rounded-full border border-white/10 group-hover:border-[var(--color-pink)]/50 group-hover:bg-[var(--color-pink)]/10 flex items-center justify-center transition-all duration-500">
                      <svg
                        className="w-5 h-5 text-gray-500 group-hover:text-[var(--color-pink)] transition-colors transform group-hover:translate-x-1 duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Hover gradient line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-pink)]/0 group-hover:via-[var(--color-pink)]/50 to-transparent transition-all duration-500" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
