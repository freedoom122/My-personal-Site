import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiGithub, FiInstagram, FiDownload } from 'react-icons/fi';
import { SiTiktok } from 'react-icons/si';
import ParticleField from '../components/ParticleField';

const fadeUp = (delay: number) => ({
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.7, ease: 'easeOut' as const },
  },
});

const stats = [
  { value: '8+', label: 'Languages' },
  { value: '3+', label: 'Years Coding' },
  { value: '∞', label: 'Projects' },
  { value: '2', label: 'Languages Spoken' },
];

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col overflow-hidden">
      <ParticleField />

      {/* Grid background */}
      <div className="fixed inset-0 grid-bg pointer-events-none z-0" />

      {/* Gradient orbs */}
      <div className="fixed top-20 left-10 w-80 h-80 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none z-0" />
      <div className="fixed bottom-20 right-10 w-96 h-96 rounded-full bg-green-500/5 blur-3xl pointer-events-none z-0" />

      {/* Hero Section */}
      <section className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 pt-28 pb-16 min-h-screen">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase">
              Available for collaboration
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeUp(0.15)}
            initial="hidden"
            animate="show"
            className="text-5xl md:text-7xl font-bold mb-4 leading-tight"
          >
            <span className="text-white">Brasovean </span>
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #00e5cc, #00ff88)' }}
            >
              Marcu
            </span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            variants={fadeUp(0.3)}
            initial="hidden"
            animate="show"
            className="mb-6 h-10 flex items-center justify-center"
          >
            <span className="font-mono text-lg md:text-xl text-[#5a8a85]">
              <span className="text-green-400">$ </span>
              <TypeAnimation
                sequence={[
                  'Developer & Tech Enthusiast', 2000,
                  'C / C++ / Python Coder', 2000,
                  'Minecraft Server Manager', 2000,
                  'Cybersecurity Hobbyist', 2000,
                  'Guitar Player 🎸', 2000,
                  'Game Developer (in progress)', 2000,
                  'Arduino Tinkerer', 2000,
                ]}
                wrapper="span"
                speed={55}
                repeat={Infinity}
                className="text-cyan-300"
              />
              <span className="cursor-blink text-cyan-400 ml-0.5">▋</span>
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeUp(0.45)}
            initial="hidden"
            animate="show"
            className="text-[#5a8a85] text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10"
          >
            16-year-old student from{' '}
            <span className="text-cyan-400">Beclean, Romania 🇷🇴</span> who lives and breathes
            technology. I build things, break things, fix things — and then build better things.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp(0.6)}
            initial="hidden"
            animate="show"
            className="flex flex-wrap items-center justify-center gap-4 mb-16"
          >
            <Link
              to="/projects"
              className="group flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm text-[#050d0f] transition-all duration-300 hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #00e5cc, #00ff88)' }}
            >
              View Projects
              <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              to="/cv"
              className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm text-cyan-400 border border-cyan-500/40 hover:border-cyan-400 hover:bg-cyan-400/5 transition-all duration-300"
            >
              <FiDownload size={14} />
              View CV
            </Link>
          </motion.div>

          {/* Socials */}
          <motion.div
            variants={fadeUp(0.75)}
            initial="hidden"
            animate="show"
            className="flex items-center justify-center gap-6"
          >
            {[
              { href: 'https://github.com/freedoom122', icon: <FiGithub size={20} />, label: 'GitHub' },
              { href: 'https://www.instagram.com/br4sove4n', icon: <FiInstagram size={20} />, label: 'Instagram' },
              { href: 'https://www.tiktok.com/@fr33d00m.official', icon: <SiTiktok size={18} />, label: 'TikTok' },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-[#5a8a85] hover:text-cyan-400 transition-colors duration-200"
              >
                {icon}
                <span className="font-mono text-xs hidden sm:inline">{label}</span>
              </a>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] text-[#3a5a55] tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-cyan-500/50 to-transparent" />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 border-t border-[#0d2b30] bg-[#030a0c]/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <p
                className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text mb-1"
                style={{ backgroundImage: 'linear-gradient(135deg, #00e5cc, #00ff88)' }}
              >
                {value}
              </p>
              <p className="font-mono text-xs text-[#5a8a85] tracking-widest uppercase">{label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quick Info strip */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            {
              icon: '💻',
              title: 'Developer',
              desc: 'Coding in C, C++, Python, Java, JavaScript and more. Building real projects that solve real problems.',
            },
            {
              icon: '🛡️',
              title: 'Tech Enthusiast',
              desc: 'Self-hosting security systems, managing Minecraft servers, and tinkering with Arduino hardware.',
            },
            {
              icon: '🎸',
              title: 'Creative Soul',
              desc: "When not coding, you'll find me playing guitar, gaming, or designing my next big idea.",
            },
          ].map(({ icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className="tech-card rounded-xl p-6 group cursor-default"
            >
              <div className="text-3xl mb-4">{icon}</div>
              <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-cyan-400 transition-colors duration-200">
                {title}
              </h3>
              <p className="text-[#5a8a85] text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
