import { Link, useNavigate } from "react-router";
import { motion } from "motion/react";
import { useState } from "react";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import { useAuth } from "./AuthContext";

export function SignIn() {
  const navigate = useNavigate();
  const { signIn: doSignIn } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const isValid = form.email && form.password;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitted(true);
    doSignIn(form.email);
    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-16 h-16 border-2 border-primary mx-auto mb-6 flex items-center justify-center">
            <motion.svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5 }}
            >
              <path
                d="M5 13l4 4L19 7"
                stroke="var(--primary)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </div>
          <h2 className="font-display text-2xl tracking-wider mb-2">
            WELCOME BACK
          </h2>
          <p className="text-muted-foreground font-body">
            Redirecting you to the homepage...
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-10">
          <motion.div
            className="w-12 h-12 border-2 border-primary mx-auto mb-4 relative"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-1 bg-primary/20" />
          </motion.div>
          <h1 className="font-display text-3xl tracking-wider mb-2">
            SIGN IN
          </h1>
          <p className="text-muted-foreground font-body text-lg">
            Welcome back to Invctus
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block font-display text-sm tracking-wider mb-2 opacity-70">
              EMAIL
            </label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              placeholder="Enter your email address"
              className="w-full bg-secondary border border-border px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block font-display text-sm tracking-wider mb-2 opacity-70">
              PASSWORD
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={form.password}
                onChange={(e) => update("password", e.target.value)}
                placeholder="Enter your password"
                className="w-full bg-secondary border border-border px-4 py-3 pr-12 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-3 cursor-pointer">
              <div className="relative flex h-6 w-6 shrink-0 items-center justify-center">
                <div
                  className={`flex h-5 w-5 items-center justify-center border-2 transition-all duration-300 ${
                    remember
                      ? "border-primary bg-primary/20"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  {remember && (
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M10 3L4.5 8.5L2 6"
                        stroke="var(--primary)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
              </div>
              <input
                type="checkbox"
                className="hidden"
                checked={remember}
                onChange={() => setRemember(!remember)}
              />
              <span className="text-sm text-muted-foreground font-body">
                Remember me
              </span>
            </label>

            <Link
              to="#"
              className="text-sm text-primary hover:underline font-display tracking-wider"
            >
              FORGOT PASSWORD?
            </Link>
          </div>

          {error && (
            <p className="text-destructive text-sm font-body">{error}</p>
          )}

          {/* Submit */}
          <motion.button
            type="submit"
            disabled={!isValid}
            whileHover={isValid ? { scale: 1.02 } : {}}
            whileTap={isValid ? { scale: 0.98 } : {}}
            className={`w-full py-4 font-display tracking-wider text-sm flex items-center justify-center gap-2 transition-all ${
              isValid
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "bg-secondary text-muted-foreground cursor-not-allowed"
            }`}
          >
            SIGN IN
            <ArrowRight size={16} />
          </motion.button>
        </form>

        <p className="text-center text-muted-foreground font-body mt-8">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-primary hover:underline font-display tracking-wider text-sm"
          >
            SIGN UP
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
