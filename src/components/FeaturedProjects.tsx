import { motion } from "motion/react";
import { Github, ExternalLink, Server, Database, Cloud } from "lucide-react";
import portfolio from '../assets/portfolio.png';

const projects = [
  {
    title: "School Management & eLearning Platform",
    description:
      "A modern multi-tenant school management system with integrated eLearning, assessments, attendance tracking, and AI-assisted learning tools. Designed with an API-first architecture for scalability.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop",
    stack: ["Laravel", "React", "MySQL", "Redis", "Docker"],
    highlights: [
      "Multi-tenant architecture",
      "Role-based access control",
      "AI-assisted learning tools",
    ],
    reverse: false,
  },
  {
    title: "Server Monitoring & DevOps Dashboard",
    description:
      "Centralized monitoring platform for tracking Laravel logs, PHP-FPM, Nginx, MySQL performance, SSL status, and server health across multiple environments in real time.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop",
    stack: ["Laravel", "React", "PostgreSQL", "Redis", "Docker"],
    highlights: [
      "Real-time monitoring",
      "SSL & uptime checks",
      "Centralized log management",
    ],
    reverse: true,
  },
  {
    title: "Portfolio & Personal Brand Website",
    description:
      "A high-performance developer portfolio built with React and Tailwind CSS to showcase projects, technical skills, and case studies with modern animations and responsive design.",
    image: '../assets/portfolio.webp',
    stack: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    highlights: [
      "Modern UI/UX",
      "Smooth animations",
      "Responsive design",
    ],
    reverse: false,
  },
  {
    title: "API-First SaaS Backend",
    description:
      "Scalable backend architecture for SaaS applications featuring authentication, queue processing, caching strategies, and secure RESTful APIs optimized for frontend and mobile integrations.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop",
    stack: ["Laravel", "MySQL", "Redis", "RabbitMQ", "Docker"],
    highlights: [
      "Queue processing",
      "API authentication",
      "Scalable architecture",
    ],
    reverse: true,
  },
];

export function FeaturedProjects() {

  
  return (
    <section className="py-32 bg-[#0A0A0A] relative" id="projects">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '3rem', fontWeight: 700, color: '#FAFAFA' }}>
            Featured Projects
          </h2>
          <p className="mt-4 text-lg" style={{ fontFamily: 'Inter, sans-serif', color: '#A1A1AA' }}>
            Production-ready applications built for scale
          </p>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${project.reverse ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={project.reverse ? 'lg:order-2' : ''}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative overflow-hidden rounded-2xl border border-[#1F1F1F] bg-[#111111]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 object-cover"
                    />
                  </div>
                </motion.div>
              </div>

              <div className={project.reverse ? 'lg:order-1' : ''}>
                <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '2rem', fontWeight: 700, color: '#FAFAFA' }} className="mb-4">
                  {project.title}
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', color: '#A1A1AA' }} className="mb-6 text-lg">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-[#111111] border border-[#1F1F1F] text-sm"
                      style={{ fontFamily: 'JetBrains Mono, monospace', color: '#FAFAFA' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="space-y-2 mb-8">
                  {project.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
                      <span style={{ fontFamily: 'Inter, sans-serif', color: '#A1A1AA', fontSize: '0.875rem' }}>
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#111111] border border-[#1F1F1F] text-[#FAFAFA] hover:border-blue-500/50 transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    <Github className="w-4 h-4" /> Code
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#111111] border border-[#1F1F1F] text-[#FAFAFA] hover:border-cyan-500/50 transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    <ExternalLink className="w-4 h-4" /> Demo
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
