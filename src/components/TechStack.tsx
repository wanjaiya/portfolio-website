import { motion } from "motion/react";
import { Code, Server, Database, Cloud, Settings } from "lucide-react";

const categories = [
  {
    icon: Code,
    title: "Frontend",
    color: "from-blue-500 to-cyan-400",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Bootstrap"]
  },
  {
    icon: Server,
    title: "Backend",
    color: "from-purple-500 to-pink-400",
    technologies: ["PHP", "Laravel", "REST APIs", "Node.js", "Python"]
  },
  {
    icon: Database,
    title: "Database",
    color: "from-green-500 to-emerald-400",
    technologies: ["PostgreSQL", "MySQL", "Redis", "MongoDB"]
  },
  {
    icon: Cloud,
    title: "Infrastructure",
    color: "from-orange-500 to-yellow-400",
    technologies: ["Linux / Ubuntu", "DigitalOcean", "Docker", "Nginx", "Caddy", "Open edX (Tutor)"]
  },
  {
    icon: Settings,
    title: "DevOps",
    color: "from-red-500 to-rose-400",
    technologies: ["GitHub Actions", "GitLab CI",  "Prometheus", "Grafana"]
  }
];

export function TechStack() {
  return (
    <section className="py-32 bg-[#0A0A0A] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '3rem', fontWeight: 700, color: '#FAFAFA' }}>
            Tech Stack
          </h2>
          <p className="mt-4 text-lg" style={{ fontFamily: 'Inter, sans-serif', color: '#A1A1AA' }}>
            Modern technologies for building scalable applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                <div className="relative bg-[#111111] border border-[#1F1F1F] rounded-2xl p-6 h-full hover:border-[#2A2A2A] transition-colors">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${category.color} mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.25rem', fontWeight: 600, color: '#FAFAFA' }} className="mb-4">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-sm px-3 py-1 rounded-lg bg-[#0A0A0A] border border-[#1F1F1F]"
                        style={{ fontFamily: 'Inter, sans-serif', color: '#A1A1AA' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
