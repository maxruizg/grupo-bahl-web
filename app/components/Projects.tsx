import { motion } from "framer-motion";
import { Link } from "react-router";

const projects = [
  {
    id: 1,
    title: "Porsche",
    subtitle: "24HRS. Driven to Le Mans Mexico City",
    year: "2025",
    category: "Evento Corporativo",
    image: "/images/project-porsche.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Domino's Pizza",
    subtitle: "Convención anual de gerentes",
    year: "2025",
    category: "Convención",
    image: "/images/project-dominos.jpg",
    featured: false,
  },
  {
    id: 3,
    title: "Aura Media",
    subtitle: "Premios Aura",
    year: "2025",
    category: "Premiación",
    image: "/images/project-aura.jpg",
    featured: false,
  },
  {
    id: 4,
    title: "Líderes",
    subtitle: "Premios 25 Líderes MKT",
    year: "2025",
    category: "Premiación",
    image: "/images/project-lideres.jpg",
    featured: false,
  },
];

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative ${project.featured ? "md:col-span-2 md:row-span-2" : ""}`}
    >
      <div className="relative overflow-hidden rounded-2xl bg-[var(--color-gray-900)] aspect-[4/3] md:aspect-auto md:h-full min-h-[280px]">
        {/* Gradient placeholder - replace with actual image */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-gray-800)] via-[var(--color-gray-900)] to-[var(--color-black)]">
          {/* Image overlay pattern */}
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_50%,rgba(219,39,119,0.1),transparent_70%)]" />
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

        {/* Content */}
        <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
          {/* Category badge */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block w-fit px-4 py-1.5 rounded-full bg-[var(--color-pink)]/10 border border-[var(--color-pink)]/30 text-[var(--color-pink)] text-xs tracking-wider uppercase mb-4"
          >
            {project.category}
          </motion.span>

          {/* Title */}
          <h3 className={`font-display text-white mb-1 ${project.featured ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"}`}>
            {project.title}
          </h3>

          {/* Subtitle */}
          <p className="text-gray-400 group-hover:text-gray-300 transition-colors mb-2">
            {project.subtitle}
          </p>

          {/* Year */}
          <span className="text-[var(--color-pink)] text-sm font-medium">
            {project.year}
          </span>

          {/* Hover arrow */}
          <div className="absolute bottom-8 right-8 md:bottom-10 md:right-10 w-10 h-10 rounded-full border border-white/20 group-hover:border-[var(--color-pink)] group-hover:bg-[var(--color-pink)]/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <svg
              className="w-4 h-4 text-white group-hover:text-[var(--color-pink)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 17L17 7M17 7H7M17 7V17"
              />
            </svg>
          </div>
        </div>

        {/* Border glow on hover */}
        <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[var(--color-pink)]/30 transition-colors duration-500 pointer-events-none" />
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="proyectos" className="section-padding bg-[#0d0d0d] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-[rgba(219,39,119,0.02)] to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-[var(--color-pink)] text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Portafolio
            </span>
            <h2 className="heading-display heading-lg">
              Nuestros casos{" "}
              <span className="text-gradient-pink">hablan</span>{" "}
              por nosotros
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Link
              to="/proyectos"
              className="inline-flex items-center gap-3 text-[var(--color-pink)] hover:text-[var(--color-pink-light)] transition-colors group"
            >
              <span className="text-sm tracking-wider uppercase">Ver todos</span>
              <span className="w-8 h-8 rounded-full border border-current flex items-center justify-center group-hover:bg-[var(--color-pink)]/10 transition-colors">
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
