import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

type Project = {
  title: string;
  client: string;
  context: string;
  description: string;
  role: string;
  stack: string[];
  link?: { label: string; href: string };
};

// Every entry here is real professional work. Keep it that way:
// no invented metrics, features or links.
const projects: Project[] = [
  {
    title: "Open edX Learning Platforms",
    client: "Erevuka, Transform Africa, Inuka SME, KfW DEG Sustainability",
    context: "Farwell Innovations",
    description:
      "Learning platforms for youth empowerment, leadership, SME development and sustainability training, built on Open edX and run in production for institutional clients.",
    role: "Architect and implementer",
    stack: ["Open edX", "Tutor", "Docker", "Python", "React", "Linux"],
  },
  {
    title: "National Subsidy Distribution System",
    client: "Ministry of Agriculture, Kenya",
    context: "iCard Africa",
    description:
      "A nationwide system for distributing agricultural subsidies, delivered end to end: requirements, design, build, deployment, client training and ongoing support.",
    role: "Architect and implementer",
    stack: ["Requirements to deployment", "System integration"],
  },
  {
    title: "HR Platform to Mobile Integration",
    client: "Enterprise HR",
    context: "Farwell Innovations",
    description:
      "Secure REST APIs connecting a Microsoft Dynamics 365 HR platform with mobile applications.",
    role: "Architect and implementer",
    stack: ["REST APIs", "Microsoft Dynamics 365", "Mobile"],
  },
  {
    title: "Acuvera",
    client: "Secure delivery",
    context: "Farwell Innovations",
    description:
      "A mobile delivery app that uses Bluetooth and NFC locking for contactless access control.",
    role: "Architect and implementer",
    stack: ["Ionic", "Bluetooth", "NFC", "REST APIs"],
  },
  {
    title: "Cost of Credit Calculator",
    client: "Kenya Bankers Association",
    context: "Farwell Innovations",
    description:
      "A public tool that helps borrowers compare the full cost of credit across banks, supporting financial literacy and transparency.",
    role: "Built and maintain",
    stack: ["Laravel", "Financial calculations"],
    link: { label: "costofcredit.co.ke", href: "https://costofcredit.co.ke" },
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
            Selected Work
          </h2>
          <p className="mt-4 text-lg" style={{ fontFamily: 'Inter, sans-serif', color: '#A1A1AA' }}>
            Professional systems I have designed, built and supported. Detailed case studies are on the way.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-[#111111] border border-[#1F1F1F] rounded-2xl p-8 flex flex-col"
            >
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span
                  className="px-3 py-1 rounded-full border border-blue-500/30 text-xs text-blue-400"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Professional work
                </span>
                <span className="text-xs" style={{ fontFamily: 'Inter, sans-serif', color: '#A1A1AA' }}>
                  {project.context}
                </span>
              </div>

              <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.5rem', fontWeight: 700, color: '#FAFAFA' }}>
                {project.title}
              </h3>
              <p className="mt-1 mb-4" style={{ fontFamily: 'Inter, sans-serif', color: '#D4D4D8' }}>
                {project.client}
              </p>
              <p className="mb-4" style={{ fontFamily: 'Inter, sans-serif', color: '#A1A1AA', lineHeight: 1.7 }}>
                {project.description}
              </p>
              <p className="mb-6 text-sm" style={{ fontFamily: 'Inter, sans-serif', color: '#A1A1AA' }}>
                <span style={{ color: '#FAFAFA' }}>Role:</span> {project.role}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-[#0A0A0A] border border-[#1F1F1F] text-sm"
                    style={{ fontFamily: 'JetBrains Mono, monospace', color: '#FAFAFA' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <ExternalLink className="w-4 h-4" aria-hidden="true" /> {project.link.label}
                </a>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
