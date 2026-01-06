import { motion } from "framer-motion";

const features = [
  {
    number: "01",
    title: "Visión Estratégica",
    description: "Analizamos cada proyecto con una perspectiva integral para maximizar su impacto.",
  },
  {
    number: "02",
    title: "Ejecución Impecable",
    description: "Cuidamos cada detalle desde la concepción hasta la implementación final.",
  },
  {
    number: "03",
    title: "Resultados Medibles",
    description: "Transformamos objetivos en métricas claras y resultados tangibles.",
  },
];

export default function About() {
  return (
    <section id="nosotros" className="section-padding bg-[#0d0d0d] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-[rgba(201,162,39,0.03)] to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-radial from-[rgba(201,162,39,0.02)] to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block text-[var(--color-gold)] text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Quiénes Somos
            </span>
            
            <h2 className="heading-display heading-lg mb-6">
              Somos{" "}
              <span className="text-gradient-gold">Grupo Bahlcasa</span>
            </h2>
            
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p className="text-xl text-gray-300">
                Una <span className="text-[var(--color-gold)] font-medium">Agencia 360</span>
              </p>
              <p>
                Aquí creemos que cada visión tiene el potencial de brillar y en 
                conjunto con nuestros clientes nos encargamos de iluminarla.
              </p>
              <p>
                Desde la primera idea, hasta la ejecución final, transformamos 
                necesidades en <span className="text-white">resultados memorables</span>.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <span className="block text-4xl md:text-5xl font-display text-[var(--color-gold)] mb-1">35+</span>
                <span className="text-sm text-gray-500 uppercase tracking-wider">Años</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <span className="block text-4xl md:text-5xl font-display text-[var(--color-gold)] mb-1">500+</span>
                <span className="text-sm text-gray-500 uppercase tracking-wider">Eventos</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <span className="block text-4xl md:text-5xl font-display text-[var(--color-gold)] mb-1">100+</span>
                <span className="text-sm text-gray-500 uppercase tracking-wider">Clientes</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: 360 Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-square max-w-[500px] mx-auto"
          >
            {/* Rotating Ring */}
            <div className="absolute inset-0 rounded-full border border-[var(--color-gold)]/20 animate-spin-slow" />
            <div className="absolute inset-8 rounded-full border border-[var(--color-gold)]/30" />
            <div className="absolute inset-16 rounded-full border border-[var(--color-gold)]/40" />
            
            {/* Center 360 */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <span className="block text-7xl md:text-8xl font-display text-gradient-gold">360°</span>
                <span className="text-sm tracking-[0.4em] uppercase text-gray-500 mt-2 block">Agencia</span>
              </div>
            </div>

            {/* Floating dots */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-[var(--color-gold)] rounded-full"
            />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-[var(--color-gold)]/60 rounded-full"
            />
            <motion.div
              animate={{ x: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-0 -translate-y-1/2 w-2.5 h-2.5 bg-[var(--color-gold)]/80 rounded-full"
            />
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 right-0 -translate-y-1/2 w-2 h-2 bg-[var(--color-gold)]/70 rounded-full"
            />
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-24">
          {features.map((feature, index) => (
            <motion.div
              key={feature.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group relative p-8 md:p-10 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 hover:border-[var(--color-gold)]/20 transition-all duration-500"
            >
              <span className="text-5xl font-display text-[var(--color-gold)]/20 group-hover:text-[var(--color-gold)]/40 transition-colors">
                {feature.number}
              </span>
              <h3 className="text-xl font-display text-white mt-4 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
