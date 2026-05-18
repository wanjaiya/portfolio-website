import { motion } from "motion/react";

const experiences = [
  {
    year: "2023 - Present",
    title: "Senior Full Stack Engineer",
    company: "Farwell Innovations",
    description: "Leading development of multi-tenant SaaS platform. Architected microservices infrastructure handling 1M+ requests daily.",
    achievements: [
      "Reduced API response time by 60%",
      "Implemented comprehensive monitoring system",
      "Mentored team of 5+ junior developers"
    ]
  },
  
  {
    year: "2018 - 2022",
    title: "Web Developer",
    company: "Farwell Innovations",
    description: "Developed REST APIs and database architectures for high-traffic e-commerce platform serving 100K+ daily users.",
    achievements: [
      "Optimized database queries (3x performance)",
      "Implemented caching layer with Redis",
      "Built APIs to communicate with several platforms"
    ]
  },
  {
    year: "2019 - 2020",
    title: "Junior Web Developer",
    company: "Icard Africa",
    description: "Started career building web applications. Learned software engineering fundamentals and best practices.",
    achievements: [
      "Contributed to 5+ Laravel projects",
      "Mastered MVC architecture",
      "Developed strong problem-solving skills"
    ]
  }
];

export function ExperienceTimeline() {
  return (
    <section className="py-32 bg-[#0A0A0A] relative">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '3rem', fontWeight: 700, color: '#FAFAFA' }}>
            Experience
          </h2>
          <p className="mt-4 text-lg" style={{ fontFamily: 'Inter, sans-serif', color: '#A1A1AA' }}>
            Journey from Laravel developer to SaaS architect
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-cyan-400 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-20"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-2 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 ring-4 ring-[#0A0A0A]" />

                <div className="bg-[#111111] border border-[#1F1F1F] rounded-2xl p-8 hover:border-[#2A2A2A] transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.5rem', fontWeight: 700, color: '#FAFAFA' }}>
                        {exp.title}
                      </h3>
                      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.125rem', color: '#A1A1AA' }} className="mt-1">
                        {exp.company}
                      </p>
                    </div>
                    <span
                      className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500/10 to-cyan-400/10 border border-blue-500/20"
                      style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.875rem', color: '#3B82F6' }}
                    >
                      {exp.year}
                    </span>
                  </div>

                  <p style={{ fontFamily: 'Inter, sans-serif', color: '#A1A1AA', lineHeight: 1.7 }} className="mb-6">
                    {exp.description}
                  </p>

                  <div className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 mt-2" />
                        <span style={{ fontFamily: 'Inter, sans-serif', color: '#A1A1AA', fontSize: '0.9375rem' }}>
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
