import { motion } from "motion/react";
import { Package, Target, Rocket, Users } from "lucide-react";

export function Product() {
  const focus = [
    {
      icon: Target,
      title: "Venture Strategy",
      description: "Defining bold visions and strategic roadmaps for our portfolio of innovative products.",
    },
    {
      icon: Users,
      title: "Market Discovery",
      description: "Deep user and market insights that shape our product decisions and drive innovation.",
    },
    {
      icon: Rocket,
      title: "Launch Excellence",
      description: "Strategic go-to-market execution bringing our ventures from zero to market impact.",
    },
    {
      icon: Package,
      title: "Portfolio Growth",
      description: "Building and scaling a diverse portfolio of products from inception to market leadership.",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(45deg, rgba(0, 217, 255, 0.1) 25%, transparent 25%),
                               linear-gradient(-45deg, rgba(0, 217, 255, 0.1) 25%, transparent 25%),
                               linear-gradient(45deg, transparent 75%, rgba(0, 217, 255, 0.1) 75%),
                               linear-gradient(-45deg, transparent 75%, rgba(0, 217, 255, 0.1) 75%)`,
              backgroundSize: '60px 60px',
              backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px'
            }}
            animate={{ backgroundPosition: ['0 0, 0 30px, 30px -30px, -30px 0px', '60px 60px, 60px 90px, 90px 30px, 30px 60px'] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="inline-block mb-6"
            >
              <Package size={64} className="text-primary" strokeWidth={1.5} />
            </motion.div>

            <h1 className="font-display tracking-wider mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 900 }}>
              PRODUCT
            </h1>
            <p className="max-w-3xl mx-auto opacity-70" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', lineHeight: 1.7 }}>
              Incubating transformative products that solve real problems and create lasting impact across industries and markets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="font-display tracking-wider mb-4" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700 }}>
              OUR FOCUS
            </h2>
            <div className="w-16 h-1 bg-primary" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {focus.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-card border border-border p-8 hover:border-primary transition-all relative overflow-hidden"
                >
                  <motion.div
                    className="absolute top-0 left-0 w-1 h-0 bg-primary"
                    whileHover={{ height: '100%' }}
                    transition={{ duration: 0.3 }}
                  />

                  <div className="w-14 h-14 border-2 border-primary/30 group-hover:border-primary flex items-center justify-center mb-6 transition-colors">
                    <Icon size={28} className="text-primary" />
                  </div>

                  <h3 className="font-display tracking-wider mb-3" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                    {item.title}
                  </h3>

                  <p className="opacity-70" style={{ fontSize: '0.9375rem', lineHeight: 1.7 }}>
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 px-6 lg:px-8 bg-card border-y border-border">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display tracking-wider mb-6" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700 }}>
              VENTURE PHILOSOPHY
            </h2>
            <p className="opacity-70 mb-8" style={{ fontSize: '1.0625rem', lineHeight: 1.8 }}>
              We build products that matter. Every venture in our portfolio solves real problems with bold solutions. Our approach combines data-driven insights with creative risk-taking to create products that don't just meet market needs—they define new markets.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                { label: "User-Centric", value: "Always" },
                { label: "Data-Driven", value: "100%" },
                { label: "Innovation", value: "First" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border border-border p-6"
                >
                  <div className="font-display tracking-wider text-primary mb-2" style={{ fontSize: '2rem', fontWeight: 700 }}>
                    {item.value}
                  </div>
                  <div className="opacity-60" style={{ fontSize: '0.875rem', letterSpacing: '0.1em' }}>
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
