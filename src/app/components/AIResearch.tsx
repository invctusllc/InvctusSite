import { motion } from "motion/react";
import { Brain, Cpu, Network, Zap } from "lucide-react";

export function AIResearch() {
  const researchAreas = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Building advanced ML models and intelligent systems that power our product innovations.",
    },
    {
      icon: Network,
      title: "Neural Networks",
      description: "Developing proprietary deep learning architectures for our AI-powered ventures.",
    },
    {
      icon: Cpu,
      title: "Natural Language Processing",
      description: "Creating next-generation NLP systems that understand and generate human language.",
    },
    {
      icon: Zap,
      title: "Computer Vision",
      description: "Building visual intelligence systems that see, understand, and reason about the world.",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Neural Network Background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full">
            {[...Array(30)].map((_, i) => {
              const x1 = Math.random() * 100;
              const y1 = Math.random() * 100;
              const x2 = Math.random() * 100;
              const y2 = Math.random() * 100;
              return (
                <motion.line
                  key={i}
                  x1={`${x1}%`}
                  y1={`${y1}%`}
                  x2={`${x2}%`}
                  y2={`${y2}%`}
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-primary"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.3 }}
                  transition={{
                    duration: 2,
                    delay: i * 0.1,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              );
            })}
          </svg>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/10 rounded-full blur-[150px]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
              className="inline-block mb-6"
            >
              <Brain size={64} className="text-primary" strokeWidth={1.5} />
            </motion.div>

            <h1 className="font-display tracking-wider mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 900 }}>
              AI R&D
            </h1>
            <p className="max-w-3xl mx-auto opacity-70" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', lineHeight: 1.7 }}>
              Pioneering artificial intelligence research and building AI-powered products that push the boundaries of what's possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="font-display tracking-wider mb-4" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700 }}>
              RESEARCH AREAS
            </h2>
            <div className="w-16 h-1 bg-primary" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {researchAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-card border border-border p-8 hover:border-primary transition-all overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  <div className="relative z-10">
                    <div className="w-14 h-14 border-2 border-primary/30 group-hover:border-primary flex items-center justify-center mb-6 transition-colors">
                      <Icon size={28} className="text-primary" />
                    </div>

                    <h3 className="font-display tracking-wider mb-3" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                      {area.title}
                    </h3>

                    <p className="opacity-70" style={{ fontSize: '0.9375rem', lineHeight: 1.7 }}>
                      {area.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Innovation */}
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
                DRIVING INNOVATION
              </h2>
              <p className="opacity-70 mb-6" style={{ fontSize: '0.9375rem', lineHeight: 1.8 }}>
                Our research team explores the frontiers of artificial intelligence, developing novel algorithms, architectures, and AI-powered products that transform industries.
              </p>
              <p className="opacity-70 mb-6" style={{ fontSize: '0.9375rem', lineHeight: 1.8 }}>
                We don't just publish papers—we ship products. Our research directly feeds into production systems deployed at scale, creating real-world impact across our venture portfolio.
              </p>
              <div className="flex gap-4 flex-wrap">
                {["PyTorch", "TensorFlow", "JAX", "Hugging Face", "OpenAI", "Anthropic"].map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="px-4 py-2 border border-primary/30 font-display tracking-wider"
                    style={{ fontSize: '0.75rem', fontWeight: 500 }}
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { label: "AI Models", value: "200+" },
                { label: "Products Shipped", value: "15+" },
                { label: "Patents Filed", value: "10+" },
                { label: "Research Papers", value: "50+" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border border-border p-6 text-center"
                >
                  <div className="font-display tracking-wider text-primary mb-2" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                    {stat.value}
                  </div>
                  <div className="opacity-60" style={{ fontSize: '0.75rem', letterSpacing: '0.05em' }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Future */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display tracking-wider mb-6" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700 }}>
              THE FUTURE IS INTELLIGENT
            </h2>
            <p className="opacity-70" style={{ fontSize: '1.0625rem', lineHeight: 1.8 }}>
              We're building the next generation of AI-powered products that are not just intelligent, but also safe, ethical, and transformative. Our research focuses on creating AI systems that augment human capabilities and unlock new possibilities across every venture we build.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
