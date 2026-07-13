import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const fadeUp = (delay: number) => ({
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.7, ease: 'easeOut' as const },
  },
});

const projects = [
  {
    id: 1,
    title: 'Home Security System',
    description:
      'A fully self-hosted security camera and alert system. Built with Raspberry Pi + Arduino sensors, running on my own server with motion detection, notifications, and a live monitoring dashboard.',
    tags: ['Python', 'Arduino', 'Linux', 'Networking', 'Self-hosted'],
    icon: '🛡️',
    status: 'Active',
    statusColor: '#00e5cc',
    featured: true,
  },
  {
    id: 2,
    title: 'Minecraft Server Manager',
    description:
      'Complete Minecraft server setup and management — including custom plugins, automated backups, player management scripts, and a basic web panel for server control.',
    tags: ['Java', 'Python', 'Linux', 'Networking', 'Automation'],
    icon: '⛏️',
    status: 'Active',
    statusColor: '#00ff88',
    featured: true,
  },
  {
    id: 3,
    title: 'Arduino Automation Projects',
    description:
      'Multiple Arduino-based projects: smart room automation, sensor arrays, LED control systems, and custom input devices. Hardware meets software.',
    tags: ['C', 'Arduino', 'Electronics', 'Hardware'],
    icon: '⚡',
    status: 'Ongoing',
    statusColor: '#00e5cc',
    featured: false,
  },
  {
    id: 4,
    title: 'Game Development Experiments',
    description:
      'Game prototypes and mechanics experiments. Working on a small game project in my spare time — exploring game logic, physics, and rendering.',
    tags: ['C++', 'Python', 'Game Dev', 'Design'],
    icon: '🎮',
    status: 'In Progress',
    statusColor: '#00ff88',
    featured: false,
  },
  {
    id: 5,
    title: 'Cybersecurity Lab',
    description:
      'A personal homelab for cybersecurity practice. Testing network security, firewalls, intrusion detection, and learning ethical hacking techniques in a controlled environment.',
    tags: ['Linux', 'Networking', 'Security', 'Python'],
    icon: '🔐',
    status: 'Active',
    statusColor: '#00e5cc',
    featured: false,
  },
  {
    id: 6,
    title: 'Personal Portfolio Website',
    description:
      'This website! Built with React, TypeScript, Tailwind CSS and Framer Motion. Designed from scratch — no templates, no AI garbage. Pure code.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
    icon: '🌐',
    status: 'Live',
    statusColor: '#00ff88',
    featured: false,
    isThis: true,
  },
];

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <main className="relative min-h-screen z-10 pt-28 pb-24 px-6">
      <div className="fixed inset-0 grid-bg pointer-events-none z-0" />
      <div className="fixed top-40 right-20 w-64 h-64 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div variants={fadeUp(0)} initial="hidden" animate="show" className="mb-20">
          <p className="font-mono text-xs text-cyan-500 tracking-widest uppercase mb-4">// projects[]</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Things I've{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #00e5cc, #00ff88)' }}
            >
              Built
            </span>
          </h1>
          <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full mb-6" />
          <p className="text-[#5a8a85] text-sm max-w-xl leading-relaxed">
            Real projects. Some finished, some always evolving. Each one taught me something new.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div variants={fadeUp(0.1)} initial="hidden" animate="show" className="mb-16">
          <p className="font-mono text-xs text-[#5a8a85] tracking-widest uppercase mb-8">
            // featured
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {featured.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7 }}
                whileHover={{ y: -6 }}
                className="tech-card rounded-xl p-8 relative overflow-hidden group cursor-default"
                style={{ borderColor: `${project.statusColor}20` }}
              >
                {/* Gradient accent */}
                <div
                  className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-5 transition-opacity duration-300 group-hover:opacity-10"
                  style={{ background: project.statusColor }}
                />

                <div className="flex items-start justify-between mb-5">
                  <span className="text-4xl">{project.icon}</span>
                  <span
                    className="flex items-center gap-1.5 font-mono text-[10px] px-2 py-1 rounded-full"
                    style={{
                      color: project.statusColor,
                      background: `${project.statusColor}15`,
                      border: `1px solid ${project.statusColor}30`,
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full animate-pulse"
                      style={{ background: project.statusColor }}
                    />
                    {project.status}
                  </span>
                </div>

                <h3 className="text-white font-bold text-xl mb-3 group-hover:text-cyan-300 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-[#5a8a85] text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#0d2b30] border border-cyan-500/20 text-cyan-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-6 border-t border-[#0d2b30]">
                  <a
                    href="https://github.com/freedoom122"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-11 items-center gap-1.5 rounded-md px-2 text-xs text-[#5a8a85] hover:bg-cyan-500/5 hover:text-cyan-400 transition-colors duration-200 font-mono"
                  >
                    <FiGithub size={14} />
                    GitHub
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Other Projects */}
        <p className="font-mono text-xs text-[#5a8a85] tracking-widest uppercase mb-8">
          // other_projects
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {rest.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="tech-card rounded-xl p-6 group cursor-default"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{project.icon}</span>
                <span
                  className="flex items-center gap-1 font-mono text-[10px] px-2 py-0.5 rounded-full"
                  style={{
                    color: project.statusColor,
                    background: `${project.statusColor}15`,
                    border: `1px solid ${project.statusColor}30`,
                  }}
                >
                  <span
                    className="w-1 h-1 rounded-full animate-pulse"
                    style={{ background: project.statusColor }}
                  />
                  {project.status}
                </span>
              </div>
              <h3 className="text-white font-semibold text-base mb-3 group-hover:text-cyan-300 transition-colors duration-200">
                {project.title}
                {project.isThis && (
                  <span className="ml-2 text-[10px] font-mono text-green-400 border border-green-400/30 px-1.5 py-0.5 rounded">
                    you're here
                  </span>
                )}
              </h3>
              <p className="text-[#5a8a85] text-xs leading-relaxed mb-5">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-[#0d2b30] border border-cyan-500/15 text-[#5a8a85]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-[#5a8a85] text-sm mb-5">Want to see more? Check out my GitHub.</p>
          <a
            href="https://github.com/freedoom122"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm text-cyan-400 border border-cyan-500/40 hover:border-cyan-400 hover:bg-cyan-400/5 transition-all duration-300"
          >
            <FiGithub size={16} />
            @freedoom122
            <FiExternalLink size={12} />
          </a>
        </motion.div>
      </div>
    </main>
  );
}
