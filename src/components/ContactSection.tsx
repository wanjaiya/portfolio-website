import { motion } from "motion/react";
import { Github, Linkedin, Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section className="py-32 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '3.5rem', fontWeight: 700, color: '#FAFAFA', lineHeight: 1.1 }} className="mb-6">
            Let's Build Something{' '}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>

          <p className="mb-12 text-xl" style={{ fontFamily: 'Inter, sans-serif', color: '#A1A1AA', maxWidth: '600px', margin: '0 auto 3rem' }}>
            Always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <motion.a
              href="https://github.com/wanjaiya"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-4 rounded-xl bg-[#111111] border border-[#1F1F1F] text-[#FAFAFA] hover:border-blue-500/50 transition-colors"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
            >
              <Github className="w-5 h-5" />
              GitHub
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/paul-wanjaiya/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-4 rounded-xl bg-[#111111] border border-[#1F1F1F] text-[#FAFAFA] hover:border-blue-500/50 transition-colors"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </motion.a>

            <motion.a
              href="mailto:kangethewanjaiya@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
            >
              <Mail className="w-5 h-5" />
              Email Me
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="pt-12 border-t border-[#1F1F1F]"
          >
            <p style={{ fontFamily: 'Inter, sans-serif', color: '#A1A1AA', fontSize: '0.875rem' }}>
              © 2026 Full Stack Developer. Building scalable solutions, one commit at a time.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
