import { motion } from "motion/react";
import { Link } from "react-router";
import { Palette, Package, Code, Brain, ArrowRight } from "lucide-react";

export function Home() {
  const ventures = [
    {
      icon: Palette,
      title: "DESIGN",
      description: "Building exceptional user experiences through innovative design systems and visual innovation.",
      link: "/design",
      delay: 0.1,
    },
    {
      icon: Package,
      title: "PRODUCT",
      description: "Incubating transformative products that solve real problems and create lasting impact.",
      link: "/product",
      delay: 0.2,
    },
    {
      icon: Code,
      title: "DEVELOPMENT",
      description: "Engineering scalable, high-performance solutions from concept to market.",
      link: "/development",
      delay: 0.3,
    },
    {
      icon: Brain,
      title: "AI R&D",
      description: "Pioneering artificial intelligence research and deploying next-generation AI systems.",
      link: "/ai-research",
      delay: 0.4,
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(0, 217, 255, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(0, 217, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: '100px 100px'
          }} />
        </div>

        {/* Glow Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-8"
            >
              <div className="w-24 h-24 border-4 border-primary relative mx-auto">
                <div className="absolute inset-2 bg-primary/20" />
                <motion.div
                  className="absolute -top-1 -left-1 w-4 h-4 bg-primary"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -top-1 -right-1 w-4 h-4 bg-primary"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
                <motion.div
                  className="absolute -bottom-1 -left-1 w-4 h-4 bg-primary"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
                <motion.div
                  className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                />
              </div>
            </motion.div>

            <h1 className="font-display tracking-wider mb-6" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 900, lineHeight: 1.1 }}>
              INVCTUS
            </h1>
            <p className="max-w-3xl mx-auto mb-12 opacity-70" style={{ fontSize: 'clamp(1.125rem, 2vw, 1.5rem)', lineHeight: 1.6 }}>
              An innovation incubator architecting the future through breakthrough products, cutting-edge AI, and transformative technology ventures.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/design"
                className="group relative px-8 py-4 bg-primary text-primary-foreground font-display tracking-wider overflow-hidden"
                style={{ fontSize: '0.875rem', fontWeight: 600 }}
              >
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative flex items-center gap-2 justify-center">
                  EXPLORE VENTURES
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display tracking-wider mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700 }}>
              WHAT WE BUILD
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ventures.map((venture, index) => {
              const Icon = venture.icon;
              return (
                <motion.div
                  key={venture.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: venture.delay }}
                >
                  <Link
                    to={venture.link}
                    className="group block relative bg-card border border-border p-8 hover:border-primary transition-all duration-300 overflow-hidden h-full"
                  >
                    <motion.div
                      className="absolute inset-0 bg-primary/5"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '0%' }}
                      transition={{ duration: 0.3 }}
                    />

                    <div className="relative z-10">
                      <div className="w-12 h-12 border-2 border-primary/50 group-hover:border-primary flex items-center justify-center mb-6 transition-colors">
                        <Icon size={24} className="text-primary" />
                      </div>

                      <h3 className="font-display tracking-wider mb-3 group-hover:text-primary transition-colors" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                        {venture.title}
                      </h3>

                      <p className="opacity-70 mb-4" style={{ fontSize: '0.9375rem', lineHeight: 1.7 }}>
                        {venture.description}
                      </p>

                      <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity" style={{ fontSize: '0.875rem' }}>
                        <span className="font-display tracking-wider" style={{ fontWeight: 600 }}>
                          LEARN MORE
                        </span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 lg:px-8 border-y border-border bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { number: "25+", label: "VENTURES BUILT" },
              { number: "15+", label: "ACTIVE PROJECTS" },
              { number: "$50M+", label: "VALUE CREATED" },
              { number: "10+", label: "YEARS INNOVATING" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-display tracking-wider text-primary mb-2" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700 }}>
                  {stat.number}
                </div>
                <div className="opacity-60" style={{ fontSize: '0.75rem', letterSpacing: '0.1em' }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
