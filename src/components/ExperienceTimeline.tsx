import { motion } from "motion/react";

const experiences = [
  {
    year: "2018 - Present",
    title: "Senior Software Engineer",
    company: "Farwell Innovations",
    description:
      "Architect and build web, mobile and e-learning systems for financial-sector, development and research organisations, and keep them running in production.",
    achievements: [
      "Architected and built REST APIs connecting Microsoft Dynamics 365 HR with mobile applications",
      "Architected and built Acuvera, a mobile delivery app using Bluetooth and NFC locking for contactless access control",
      "Build and run Open edX learning platforms: Erevuka, Transform Africa, Inuka SME and KfW DEG Sustainability",
      "Built and maintain the Diamond Trust Bank corporate website and the Kenya Bankers Association Cost of Credit Calculator",
      "Support and extend the ICIPE website; train legal professionals across Africa on a-mla.org with the African Legal Support Facility",
      "Run code reviews, mentor junior developers and write API and architecture documentation"
    ]
  },
  {
    year: "2013 - 2018",
    title: "Lead Software Developer",
    company: "iCard Africa",
    description:
      "Led design and delivery of business systems from requirements through deployment, training and support.",
    achievements: [
      "Architected and built a nationwide subsidy distribution system for the Ministry of Agriculture, including client training and support",
      "Gathered requirements with stakeholders and translated them into system designs across the full SDLC",
      "Integrated databases and third-party systems; wrote unit tests, test scripts and QA procedures",
      "Wrote technical proposals for ICT tenders"
    ]
  },
  {
    year: "2012",
    title: "Technology Officer",
    company: "AREA254",
    description:
      "Delivered and supported business systems for clients, from e-commerce to logistics.",
    achievements: [
      "Built a cargo freight management system for Andy Forwarders, including training and onboarding",
      "Built a Magento shopping cart system and deployed Vtiger CRM for clients"
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
            Roles and the systems I have delivered
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
