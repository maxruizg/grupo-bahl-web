import { motion } from "framer-motion";

// Client brand logos - using placeholder boxes with names for now
// Replace with actual logo images when available
const brands = [
  { name: "Porsche", id: 1 },
  { name: "Domino's Pizza", id: 2 },
  { name: "Mattel", id: 3 },
  { name: "Omoda Jaeco", id: 4 },
  { name: "Nivea Men", id: 5 },
  { name: "Aura Media", id: 6 },
  { name: "Corona", id: 7 },
  { name: "Modelo", id: 8 },
  { name: "Bimbo", id: 9 },
  { name: "Liverpool", id: 10 },
  { name: "Telcel", id: 11 },
  { name: "BBVA", id: 12 },
];

function BrandLogo({ name }: { name: string }) {
  return (
    <div className="flex-shrink-0 w-48 h-24 mx-6 px-6 flex items-center justify-center bg-white/[0.02] rounded-xl border border-white/5 hover:border-[var(--color-gold)]/20 transition-all duration-300 group">
      <span className="text-gray-500 group-hover:text-gray-300 text-sm font-medium tracking-wide transition-colors text-center">
        {name}
      </span>
    </div>
  );
}

function MarqueeRow({ direction = "left", speed = 30 }: { direction?: "left" | "right"; speed?: number }) {
  const animationDuration = `${speed}s`;
  
  return (
    <div className="flex overflow-hidden mask-gradient-x">
      <motion.div
        className="flex"
        animate={{
          x: direction === "left" ? [0, -50 * 16 * brands.length / 2] : [-50 * 16 * brands.length / 2, 0],
        }}
        transition={{
          x: {
            duration: speed,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {/* Double the brands for seamless loop */}
        {[...brands, ...brands].map((brand, index) => (
          <BrandLogo key={`${brand.id}-${index}`} name={brand.name} />
        ))}
      </motion.div>
    </div>
  );
}

export default function Brands() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-black)] relative overflow-hidden">
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-gold)]/20 to-transparent" />
      
      <div className="container-custom mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="heading-display text-2xl md:text-3xl text-white">
            Marcas que han{" "}
            <span className="text-gradient-gold">confiado</span>{" "}
            en nosotros
          </h2>
        </motion.div>
      </div>

      {/* Marquee Rows */}
      <div className="space-y-6">
        <MarqueeRow direction="left" speed={40} />
        <MarqueeRow direction="right" speed={35} />
      </div>

      {/* Subtle bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-gold)]/20 to-transparent" />
    </section>
  );
}
