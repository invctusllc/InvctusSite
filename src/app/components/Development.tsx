import { motion } from "motion/react";
import { Code, Server, Smartphone, Cloud } from "lucide-react";

export function Development() {
  const expertise = [
    {
      icon: Code,
      title: "Web Platforms",
      description: "Building modern web applications with React, TypeScript, and cutting-edge frameworks for our ventures.",
    },
    {
      icon: Smartphone,
      title: "Mobile Products",
      description: "Native and cross-platform mobile experiences that bring our products to iOS and Android.",
    },
    {
      icon: Server,
      title: "Backend Engineering",
      description: "Scalable, secure backend systems powering our entire product ecosystem.",
    },
    {
      icon: Cloud,
      title: "Infrastructure",
      description: "Cloud-native architecture, DevOps automation, and world-class reliability for all ventures.",
    },
  ];

  const technologies = [
    "React", "TypeScript", "Node.js", "Python", "Go", "Rust",
    "PostgreSQL", "MongoDB", "Redis", "GraphQL", "Docker", "Kubernetes",
    "AWS", "Azure", "GCP", "TensorFlow", "PyTorch", "Next.js"
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px bg-primary"
              style={{
                left: `${Math.random() * 100}%`,
                height: '100%',
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scaleY: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ rotateY: 0 }}
              animate={{ rotateY: 360 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="inline-block mb-6"
            >
              <Code size={64} className="text-primary" strokeWidth={1.5} />
            </motion.div>

            <h1 className="font-display tracking-wider mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 900 }}>
              DEVELOPMENT
            </h1>
            <p className="max-w-3xl mx-auto opacity-70" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', lineHeight: 1.7 }}>
              Engineering scalable, high-performance products with cutting-edge technologies and modern architecture.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="font-display tracking-wider mb-4" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700 }}>
              EXPERTISE
            </h2>
            <div className="w-16 h-1 bg-primary" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {expertise.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-card border border-border p-8 hover:border-primary transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 border-2 border-primary/30 group-hover:border-primary flex items-center justify-center flex-shrink-0 transition-colors">
                      <Icon size={24} className="text-primary" />
                    </div>

                    <div>
                      <h3 className="font-display tracking-wider mb-2" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                        {item.title}
                      </h3>

                      <p className="opacity-70" style={{ fontSize: '0.9375rem', lineHeight: 1.7 }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-6 lg:px-8 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-display tracking-wider mb-4" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700 }}>
              TECH STACK
            </h2>
            <div className="w-16 h-1 bg-primary" />
          </motion.div>

          <div className="flex flex-wrap gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, borderColor: 'var(--primary)' }}
                className="px-6 py-3 border border-border bg-background font-display tracking-wider"
                style={{ fontSize: '0.875rem', fontWeight: 500 }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display tracking-wider mb-6" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700 }}>
              BUILT TO SCALE
            </h2>
            <p className="opacity-70 mb-12" style={{ fontSize: '1.0625rem', lineHeight: 1.8 }}>
              Every product we build is engineered for scale from day one. Clean architecture, comprehensive testing, automated deployment, and world-class reliability are non-negotiable standards across our entire portfolio.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { metric: "99.9%", label: "UPTIME" },
                { metric: "100%", label: "TEST COVERAGE" },
                { metric: "A+", label: "PERFORMANCE" },
                { metric: "24/7", label: "MONITORING" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border border-border p-6"
                >
                  <div className="font-display tracking-wider text-primary mb-2" style={{ fontSize: '1.75rem', fontWeight: 700 }}>
                    {item.metric}
                  </div>
                  <div className="opacity-60" style={{ fontSize: '0.75rem', letterSpacing: '0.1em' }}>
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
