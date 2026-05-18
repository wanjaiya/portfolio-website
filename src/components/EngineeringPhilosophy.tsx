import { motion } from "motion/react";
import { Boxes, Zap, Activity } from "lucide-react";

const principles = [
  {
    icon: Boxes,
    title: "Scalable Systems",
    description: "Architect applications that grow with your business. Focus on horizontal scaling, efficient caching, and database optimization.",
    gradient: "from-blue-500 to-cyan-400"
  },
  {
    icon: Zap,
    title: "API-First Development",
    description: "Build robust, well-documented APIs that power multiple clients. RESTful design, versioning, and comprehensive testing.",
    gradient: "from-purple-500 to-pink-400"
  },
  {
    icon: Activity,
    title: "Monitoring & Reliability",
    description: "Proactive monitoring, alerting, and logging. Track performance metrics, error rates, and user experience in real-time.",
    gradient: "from-green-500 to-emerald-400"
  }
];

export function EngineeringPhilosophy() {
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
            Engineering Philosophy
          </h2>
          <p className="mt-4 text-lg" style={{ fontFamily: 'Inter, sans-serif', color: '#A1A1AA' }}>
            Principles that guide every line of code
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-b ${principle.gradient} rounded-2xl blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                <div className="relative bg-[#111111] border border-[#1F1F1F] rounded-2xl p-8 h-full hover:border-[#2A2A2A] transition-colors">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${principle.gradient} mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.5rem', fontWeight: 700, color: '#FAFAFA' }} className="mb-4">
                    {principle.title}
                  </h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', color: '#A1A1AA', lineHeight: 1.7 }}>
                    {principle.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
