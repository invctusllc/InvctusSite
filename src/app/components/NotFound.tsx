import { motion } from "motion/react";
import { Link } from "react-router";
import { AlertTriangle, ArrowLeft } from "lucide-react";

export function NotFound() {
  return (
    <div className="pt-20 min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            animate={{
              rotate: [0, 10, -10, 10, 0],
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatDelay: 2,
            }}
            className="inline-block mb-8"
          >
            <AlertTriangle size={80} className="text-primary" strokeWidth={1.5} />
          </motion.div>

          <h1 className="font-display tracking-wider mb-4" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 900 }}>
            404
          </h1>

          <h2 className="font-display tracking-wider mb-6" style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 700 }}>
            PAGE NOT FOUND
          </h2>

          <p className="opacity-70 mb-12" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>

          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-display tracking-wider hover:bg-primary/90 transition-colors"
            style={{ fontSize: '0.875rem', fontWeight: 600 }}
          >
            <ArrowLeft size={16} />
            RETURN HOME
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
