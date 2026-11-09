import { motion } from "motion/react";
import { ArrowRight, Github, Terminal, Mail, Linkedin, User2, User } from "lucide-react";


export function HeroSection() {
  const scrollToSection = () => {
    const section = document.getElementById("projects");


    section?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <section className="min-h-screen relative overflow-hidden flex items-center bg-[#0A0A0A]">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />
      <div className="absolute inset-0" style={{
        backgroundImage: `linear-gradient(rgba(31, 31, 31, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(31, 31, 31, 0.3) 1px, transparent 1px)`,
        backgroundSize: '64px 64px'
      }} />

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20"
            >
              <span className="text-sm text-blue-400" style={{ fontFamily: 'Inter, sans-serif' }}>
                Available for new opportunities
              </span>
            </motion.div>

            <h1 className="mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(2.25rem, 4.5vw, 3.25rem)', fontWeight: 700, lineHeight: 1.1, color: '#FAFAFA' }}>
              Senior Software Engineer building{' '}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                backend systems, integrations and learning platforms
              </span>
            </h1>

            <p className="mb-4 text-lg" style={{ fontFamily: 'Inter, sans-serif', color: '#A1A1AA' }}>
              I design, build and run software for banks, development finance institutions, research organisations and government, from Open edX platforms to API integrations with enterprise systems.
            </p>
            <p className="mb-8 text-base" style={{ fontFamily: 'Inter, sans-serif', color: '#A1A1AA' }}>
              PHP • Laravel • REST APIs • React • MySQL • Open edX • Linux
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToSection}
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white flex items-center gap-2"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
              >
                View Projects <ArrowRight className="w-4 h-4" />
              </motion.button>
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
            </div>
          </motion.div>

          {/* Right Content - Terminal Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-2xl blur-xl" />
            <div className="relative bg-[#111111]/80 backdrop-blur-xl border border-[#1F1F1F] rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-[#1F1F1F]">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.875rem', color: '#A1A1AA' }}>
                  profile.sh
                </span>
                <div className="ml-auto flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
              </div>

              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.875rem' }} className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-green-400">$</span>
                  <span className="text-[#A1A1AA]">whoami</span>
                </div>
                <div className="text-blue-400 ml-4 flex flex-row"><User2 className="w-4 h-4 mr-2" aria-hidden="true" />Paul Kangethe Wanjaiya</div>
                <div className="text-cyan-400 ml-4 flex flex-row"><Mail className="w-4 h-4 mr-2" aria-hidden="true" />kangethewanjaiya@gmail.com</div>
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-green-400">$</span>
                  <span className="text-[#A1A1AA]">cat experience</span>
                </div>
                <div className="text-[#D4D4D8] ml-4">2018–now  Senior Software Engineer, Farwell Innovations</div>
                <div className="text-[#D4D4D8] ml-4">2013–2018 Lead Software Developer, iCard Africa</div>
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-green-400">$</span>
                  <span className="text-[#A1A1AA]">cat now</span>
                </div>
                <div className="text-green-400 ml-4">→ Designing an agentic reporting platform on Laravel</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
