import { motion } from "motion/react";
import { Code2, BookOpen, TrendingUp, Target } from "lucide-react";

const widgets = [
  {
    icon: Code2,
    title: "Current Project",
    description: "Multi-tenant eLearning platform",
    status: "In Progress",
    progress: 65,
    color: "from-blue-500 to-cyan-400"
  },
  {
    icon: BookOpen,
    title: "Learning",
    description: "Advanced Monitoring and logging ",
    status: "Active",
    progress: 40,
    color: "from-purple-500 to-pink-400"
  },
  {
    icon: Code2,
    title: "Next Project",
    description: "Server Monitoring & DevOps Dashboard",
    status: "Not Started",
    progress: 0,
    color: "from-green-500 to-green-40"
  },
  {
    icon: Target,
    title: "Next Milestone",
    description: "Ship v2.0 of eLearning platform with AI features",
    status: "Q3 2026",
    progress: 0,
    color: "from-orange-500 to-yellow-400"
  }
];

export function BuildInPublic() {
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
            Building in Public
          </h2>
          <p className="mt-4 text-lg" style={{ fontFamily: 'Inter, sans-serif', color: '#A1A1AA' }}>
            Current projects and learning journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {widgets.map((widget, index) => {
            const Icon = widget.icon;
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
                <div className={`absolute inset-0 bg-gradient-to-b ${widget.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                <div className="relative bg-[#111111] border border-[#1F1F1F] rounded-2xl p-6 h-full hover:border-[#2A2A2A] transition-colors">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${widget.color} mb-4`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>

                  <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1rem', fontWeight: 600, color: '#FAFAFA' }} className="mb-2">
                    {widget.title}
                  </h3>

                  <p style={{ fontFamily: 'Inter, sans-serif', color: '#A1A1AA', fontSize: '0.875rem' }} className="mb-4">
                    {widget.description}
                  </p>

                  {widget.progress !== undefined ? (
                    <>
                      <div className="flex items-center justify-between mb-2">
                        <span style={{ fontFamily: 'Inter, sans-serif', color: '#A1A1AA', fontSize: '0.75rem' }}>
                          {widget.status}
                        </span>
                        <span style={{ fontFamily: 'JetBrains Mono, monospace', color: '#FAFAFA', fontSize: '0.75rem' }}>
                          {widget.progress}%
                        </span>
                      </div>
                      <div className="h-2 bg-[#0A0A0A] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${widget.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className={`h-full bg-gradient-to-r ${widget.color}`}
                        />
                      </div>
                    </>
                  ) : (
                    <div>
                      <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '2rem', fontWeight: 700 }} className={`bg-gradient-to-r ${widget.color} bg-clip-text text-transparent`}>
                        {widget.metric}
                      </div>
                      <p style={{ fontFamily: 'Inter, sans-serif', color: '#A1A1AA', fontSize: '0.75rem' }}>
                        {widget.label}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
