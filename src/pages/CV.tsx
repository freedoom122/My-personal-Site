import { motion } from 'framer-motion';
import { FiDownload, FiGithub, FiInstagram, FiPhone, FiMail } from 'react-icons/fi';
import { SiTiktok } from 'react-icons/si';

const fadeUp = (delay: number) => ({
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.7, ease: 'easeOut' as const },
  },
});

function Section({ title, children, delay = 0 }: { title: string; children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className="mb-8"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="w-2 h-6 rounded-sm" style={{ background: 'linear-gradient(180deg, #00e5cc, #00ff88)' }} />
        <h2 className="text-lg font-bold text-white tracking-wide uppercase font-mono">{title}</h2>
      </div>
      {children}
    </motion.div>
  );
}

export default function CV() {
  return (
    <main className="relative min-h-screen z-10 pt-24 pb-20 px-6">
      <div className="fixed inset-0 grid-bg pointer-events-none z-0" />
      <div className="fixed top-40 right-10 w-64 h-64 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Page Header */}
        <motion.div variants={fadeUp(0)} initial="hidden" animate="show" className="mb-10">
          <p className="font-mono text-xs text-cyan-500 tracking-widest uppercase mb-3">// curriculum_vitae.pdf</p>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                My <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #00e5cc, #00ff88)' }}>CV</span>
              </h1>
              <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full" />
            </div>
            <button
              onClick={() => window.print()}
              className="flex min-h-12 items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-[#050d0f] transition-all duration-300 hover:opacity-90 self-start sm:self-auto"
              style={{ background: 'linear-gradient(135deg, #00e5cc, #00ff88)' }}
            >
              <FiDownload size={15} />
              Print / Save PDF
            </button>
          </div>
        </motion.div>

        {/* CV Card */}
        <motion.div
          variants={fadeUp(0.1)}
          initial="hidden"
          animate="show"
          className="tech-card rounded-2xl p-8 md:p-10"
          style={{ border: '1px solid rgba(0,229,204,0.15)' }}
        >
          {/* CV Header */}
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center pb-8 mb-8 border-b border-[#0d2b30]">
            <div
              className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0"
              style={{ border: '2px solid rgba(0,229,204,0.3)', boxShadow: '0 0 20px rgba(0,229,204,0.1)' }}
            >
              <img
                src="/profile.jpg"
                alt="Brasovean Marcu"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  const el = e.target as HTMLImageElement;
                  el.style.display = 'none';
                  const parent = el.parentElement;
                  if (parent) {
                    parent.innerHTML = '<div class="w-full h-full flex items-center justify-center text-2xl bg-[#0a1a1e]">BM</div>';
                  }
                }}
              />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-white mb-1">Brasovean Marcu</h2>
              <p
                className="text-transparent bg-clip-text font-semibold mb-3"
                style={{ backgroundImage: 'linear-gradient(135deg, #00e5cc, #00ff88)' }}
              >
                Developer & Tech Enthusiast
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-[#5a8a85]">
                <span className="flex items-center gap-1.5">
                  <FiPhone size={13} className="text-cyan-500" />
                  +40 755 628 706
                </span>
                <span className="flex items-center gap-1.5">
                  <FiMail size={13} className="text-cyan-500" />
                  <span className="font-mono">contact via form</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <FiGithub size={13} className="text-cyan-500" />
                  github.com/freedoom122
                </span>
              </div>
            </div>
          </div>

          {/* Profile */}
          <Section title="Profile" delay={0.1}>
            <p className="text-[#8ab8b4] text-sm leading-relaxed">
              Motivated and self-taught 16-year-old developer from Beclean, Romania with strong interest in
              systems programming, cybersecurity, server management, and hardware tinkering. Currently studying
              at Colegiul Național Petru Rareș while actively working on multiple real-world tech projects.
              Fluent in Romanian and English. Passionate about continuous learning and building things from scratch.
            </p>
          </Section>

          {/* Education */}
          <Section title="Education" delay={0.15}>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6 p-4 rounded-lg bg-[#0a1a1e] border border-[#0d2b30]">
                <div className="flex-shrink-0">
                  <span className="font-mono text-xs text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded border border-cyan-500/20">
                    2022 – Present
                  </span>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">High School Student</h3>
                  <p className="text-cyan-400 text-xs mb-1">Colegiul Național Petru Rareș — Beclean, Romania</p>
                  <p className="text-[#5a8a85] text-xs">
                    General academic studies. Focused on mathematics, computer science, and sciences.
                  </p>
                </div>
              </div>
            </div>
          </Section>

          {/* Technical Skills */}
          <Section title="Technical Skills" delay={0.2}>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { cat: 'Programming Languages', items: 'C, C++, Python, Java, JavaScript, SQL, AWS Lambda' },
                { cat: 'Web Technologies', items: 'HTML, CSS, JavaScript, React (learning), TypeScript (learning)' },
                { cat: 'Hardware & Electronics', items: 'Arduino, Electronics Repair, PC Building, Sensor Integration' },
                { cat: 'Server & Infrastructure', items: 'Linux Admin, Minecraft Servers, Self-hosting, Network Config' },
                { cat: 'Security & Networking', items: 'Security Systems, Firewalls, Intrusion Detection, Home Lab' },
                { cat: 'Tools & Platforms', items: 'Git, GitHub, VS Code, Arduino IDE, Linux (Ubuntu/Debian)' },
              ].map(({ cat, items }) => (
                <div key={cat} className="p-3 rounded-lg bg-[#0a1a1e] border border-[#0d2b30]">
                  <p className="font-mono text-[10px] text-cyan-500 tracking-widest uppercase mb-1">{cat}</p>
                  <p className="text-[#8ab8b4] text-xs">{items}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* Projects */}
          <Section title="Key Projects" delay={0.25}>
            <div className="space-y-3">
              {[
                {
                  name: 'Home Security System',
                  desc: 'Built a self-hosted security camera and sensor network using Raspberry Pi, Arduino, and Python. Includes motion detection, alerts, and a monitoring dashboard.',
                  tech: 'Python, Arduino, Linux, Networking',
                },
                {
                  name: 'Minecraft Server Management',
                  desc: 'Set up, configured, and maintained dedicated Minecraft servers. Built custom automation scripts for backups, player management, and server health monitoring.',
                  tech: 'Java, Python, Linux, Networking',
                },
                {
                  name: 'Arduino Automation Suite',
                  desc: 'Multiple hardware projects including room automation, custom input devices, and sensor arrays.',
                  tech: 'C, Arduino, Electronics',
                },
                {
                  name: 'Personal Portfolio Website',
                  desc: 'Designed and built this portfolio from scratch using React, TypeScript, Tailwind CSS, and Framer Motion.',
                  tech: 'React, TypeScript, Tailwind CSS',
                },
              ].map(({ name, desc, tech }) => (
                <div key={name} className="p-4 rounded-lg bg-[#0a1a1e] border border-[#0d2b30] hover:border-cyan-500/25 transition-colors duration-200">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-1">
                    <h3 className="text-white font-semibold text-sm">{name}</h3>
                    <span className="font-mono text-[10px] text-cyan-500 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20 self-start">
                      {tech}
                    </span>
                  </div>
                  <p className="text-[#5a8a85] text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* Languages */}
          <Section title="Languages" delay={0.3}>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-[#0a1a1e] border border-[#0d2b30]">
                <span className="text-xl">🇷🇴</span>
                <div>
                  <p className="text-white text-sm font-semibold">Romanian</p>
                  <p className="font-mono text-[10px] text-cyan-400">Native</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-[#0a1a1e] border border-[#0d2b30]">
                <span className="text-xl">🇬🇧</span>
                <div>
                  <p className="text-white text-sm font-semibold">English</p>
                  <p className="font-mono text-[10px] text-cyan-400">Fluent</p>
                </div>
              </div>
            </div>
          </Section>

          {/* Interests */}
          <Section title="Interests & Hobbies" delay={0.35}>
            <div className="flex flex-wrap gap-2">
              {[
                '💻 Programming', '🎮 Gaming', '🎸 Guitar', '🛡️ Cybersecurity',
                '⚡ Arduino', '🌐 Server Management', '🎵 Music', '🔧 Tech Repair',
                '🎲 Game Development',
              ].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded-full text-xs font-mono text-cyan-300 border border-cyan-500/20 bg-cyan-500/5"
                >
                  {item}
                </span>
              ))}
            </div>
          </Section>

          {/* Social Links */}
          <Section title="Online Presence" delay={0.4}>
            <div className="flex flex-wrap gap-3">
              {[
                { href: 'https://github.com/freedoom122', icon: <FiGithub size={14} />, label: 'github.com/freedoom122' },
                { href: 'https://www.instagram.com/br4sove4n', icon: <FiInstagram size={14} />, label: '@br4sove4n' },
                { href: 'https://www.tiktok.com/@fr33d00m.official', icon: <SiTiktok size={13} />, label: '@fr33d00m.official' },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-11 items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono text-cyan-400 border border-cyan-500/25 bg-cyan-500/5 hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all duration-200"
                >
                  {icon}
                  {label}
                </a>
              ))}
            </div>
          </Section>

          {/* Contact */}
          <Section title="Contact" delay={0.45}>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 p-3 rounded-lg bg-[#0a1a1e] border border-[#0d2b30]">
                <FiPhone size={14} className="text-cyan-400" />
                <div>
                  <p className="font-mono text-[10px] text-[#5a8a85] uppercase">Phone</p>
                  <p className="text-white text-xs font-semibold">+40 755 628 706</p>
                </div>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-[#0a1a1e] border border-[#0d2b30]">
                <FiPhone size={14} className="text-green-400" />
                <div>
                  <p className="font-mono text-[10px] text-[#5a8a85] uppercase">WhatsApp</p>
                  <p className="text-white text-xs font-semibold">+40 749 430 903</p>
                </div>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-[#0a1a1e] border border-[#0d2b30]">
                <FiGithub size={14} className="text-cyan-400" />
                <div>
                  <p className="font-mono text-[10px] text-[#5a8a85] uppercase">GitHub</p>
                  <p className="text-white text-xs font-semibold">freedoom122</p>
                </div>
              </div>
            </div>
          </Section>
        </motion.div>
      </div>
    </main>
  );
}
