import { motion } from "motion/react";
import { Palette, Layers, Figma, Sparkles } from "lucide-react";

export function Design() {
  const capabilities = [
    {
      icon: Palette,
      title: "Product Interfaces",
      description: "Designing stunning interfaces for our ventures that captivate users and drive engagement.",
    },
    {
      icon: Layers,
      title: "Design Systems",
      description: "Building proprietary, scalable design systems that power our product ecosystem.",
    },
    {
      icon: Figma,
      title: "Rapid Innovation",
      description: "Fast prototyping and iteration cycles to bring ideas from concept to reality.",
    },
    {
      icon: Sparkles,
      title: "Brand Creation",
      description: "Crafting distinctive brand identities for each venture in our portfolio.",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle, rgba(0, 217, 255, 0.2) 2px, transparent 2px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6"
            >
              <Palette size={64} className="text-primary" strokeWidth={1.5} />
            </motion.div>

            <h1 className="font-display tracking-wider mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 900 }}>
              DESIGN
            </h1>
            <p className="max-w-3xl mx-auto opacity-70" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', lineHeight: 1.7 }}>
              Designing breakthrough products that bridge aesthetics and functionality, transforming bold ideas into visually compelling and user-centric ventures.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="font-display tracking-wider mb-4" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700 }}>
              CAPABILITIES
            </h2>
            <div className="w-16 h-1 bg-primary" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-card border border-border p-8 hover:border-primary transition-all"
                >
                  <div className="w-14 h-14 border-2 border-primary/30 group-hover:border-primary flex items-center justify-center mb-6 transition-colors">
                    <Icon size={28} className="text-primary" />
                  </div>

                  <h3 className="font-display tracking-wider mb-3" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                    {capability.title}
                  </h3>

                  <p className="opacity-70" style={{ fontSize: '0.9375rem', lineHeight: 1.7 }}>
                    {capability.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 px-6 lg:px-8 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display tracking-wider mb-6" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700 }}>
                OUR APPROACH
              </h2>
              <p className="opacity-70 mb-6" style={{ fontSize: '0.9375rem', lineHeight: 1.8 }}>
                Great design is the intersection of beauty, utility, and innovation. Our design process is rooted in research, rapid iteration, and bold experimentation—every pixel serves a purpose in our product vision.
              </p>
              <p className="opacity-70" style={{ fontSize: '0.9375rem', lineHeight: 1.8 }}>
                From initial concepts to market launch, we obsess over every detail, ensuring our ventures deliver exceptional design experiences that users love.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {["Research & Discovery", "Ideation & Concept", "Design & Prototype", "Test & Iterate", "Build & Launch"].map((step, index) => (
                <div key={step} className="flex items-center gap-4 p-4 border border-border hover:border-primary transition-colors">
                  <div className="w-10 h-10 border-2 border-primary flex items-center justify-center font-display" style={{ fontWeight: 700 }}>
                    {index + 1}
                  </div>
                  <span className="font-display tracking-wider" style={{ fontSize: '0.9375rem', fontWeight: 500 }}>
                    {step}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
