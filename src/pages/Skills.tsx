import { motion } from 'framer-motion';

const fadeUp = (delay: number) => ({
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.7, ease: 'easeOut' as const },
  },
});

const programmingSkills = [
  { name: 'C / C++', level: 82, tag: 'Systems' },
  { name: 'Python', level: 78, tag: 'Scripting' },
  { name: 'JavaScript', level: 70, tag: 'Web' },
  { name: 'Java', level: 65, tag: 'OOP' },
  { name: 'SQL', level: 60, tag: 'Database' },
  { name: 'AWS Lambda', level: 50, tag: 'Cloud' },
  { name: 'HTML & CSS', level: 80, tag: 'Web' },
  { name: 'Arduino (C)', level: 75, tag: 'Hardware' },
];

const tools = [
  { name: 'VS Code', icon: '🧰' },
  { name: 'Git & GitHub', icon: '📦' },
  { name: 'Arduino IDE', icon: '⚡' },
  { name: 'Linux', icon: '🐧' },
  { name: 'Minecraft Server', icon: '🌐' },
  { name: 'Network Tools', icon: '🔌' },
  { name: 'Security Systems', icon: '🛡️' },
  { name: 'Game Engines', icon: '🎮' },
];

const categories = [
  {
    title: 'Languages',
    icon: '💬',
    items: ['C', 'C++', 'Python', 'Java', 'JavaScript', 'SQL', 'AWS Lambda'],
    color: '#00e5cc',
  },
  {
    title: 'Hardware',
    icon: '🔧',
    items: ['Arduino', 'Tech Repair', 'Electronics', 'PC Building', 'Networking'],
    color: '#00ff88',
  },
  {
    title: 'Server & Security',
    icon: '🛡️',
    items: ['Minecraft Servers', 'Security Cameras', 'Self-hosting', 'Network Security', 'Linux Admin'],
    color: '#00e5cc',
  },
  {
    title: 'Creative',
    icon: '🎨',
    items: ['Game Development', 'UI Design', 'Problem Solving', 'Guitar', 'Music Theory'],
    color: '#00ff88',
  },
];

function SkillBar({ name, level, tag, delay }: { name: string; level: number; tag: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className="group"
    >
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-white group-hover:text-cyan-300 transition-colors duration-200">
            {name}
          </span>
          <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-500">
            {tag}
          </span>
        </div>
        <span className="font-mono text-xs text-[#5a8a85]">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-[#0d2b30] overflow-hidden">
        <motion.div
          className="h-full rounded-full relative"
          style={{ background: 'linear-gradient(90deg, #00e5cc, #00ff88)' }}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.2, duration: 1.4, ease: 'easeOut' }}
        >
          <span
            className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-white"
            style={{ boxShadow: '0 0 6px #00e5cc' }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <main className="relative min-h-screen z-10 pt-24 pb-20 px-6">
      <div className="fixed inset-0 grid-bg pointer-events-none z-0" />
      <div className="fixed top-40 left-10 w-72 h-72 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />
      <div className="fixed bottom-40 right-10 w-80 h-80 rounded-full bg-green-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div variants={fadeUp(0)} initial="hidden" animate="show" className="mb-16">
          <p className="font-mono text-xs text-cyan-500 tracking-widest uppercase mb-3">// skills.config</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #00e5cc, #00ff88)' }}>Arsenal</span>
          </h1>
          <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full mb-4" />
          <p className="text-[#5a8a85] text-sm max-w-xl">
            A collection of languages, tools, and skills I've picked up by actually building things.
            No online course certificates — just real experience.
          </p>
        </motion.div>

        {/* Skill Bars */}
        <motion.div variants={fadeUp(0.1)} initial="hidden" animate="show">
          <div className="tech-card rounded-xl p-6 mb-10">
            <p className="font-mono text-xs text-cyan-500 tracking-widest uppercase mb-6">// proficiency_levels</p>
            <div className="grid md:grid-cols-2 gap-x-10 gap-y-5">
              {programmingSkills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  tag={skill.tag}
                  delay={i * 0.07}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Category Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {categories.map(({ title, icon, items, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="tech-card rounded-xl p-6 group hover:border-opacity-60 transition-all duration-300"
              style={{ borderColor: `${color}20` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{icon}</span>
                <h3 className="font-semibold text-white text-lg group-hover:text-cyan-300 transition-colors duration-200">
                  {title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((item, j) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + j * 0.05, duration: 0.4 }}
                    className="px-2.5 py-1 rounded text-xs font-mono transition-all duration-200 hover:scale-105 cursor-default"
                    style={{
                      color,
                      background: `${color}10`,
                      border: `1px solid ${color}25`,
                    }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="tech-card rounded-xl p-6"
        >
          <p className="font-mono text-xs text-cyan-500 tracking-widest uppercase mb-6">// tools_i_use</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {tools.map(({ name, icon }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="flex flex-col items-center gap-2 p-4 rounded-lg bg-[#0d2b30]/50 border border-cyan-500/10 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300 cursor-default"
              >
                <span className="text-2xl">{icon}</span>
                <span className="font-mono text-xs text-[#5a8a85] text-center">{name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning now */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 tech-card rounded-xl p-6"
        >
          <p className="font-mono text-xs text-cyan-500 tracking-widest uppercase mb-4">// currently_learning</p>
          <div className="flex flex-wrap gap-3">
            {['React', 'TypeScript', 'Rust (eventually)', 'Cybersecurity Practices', 'Cloud Infrastructure', 'Game Engine Internals'].map((item, i) => (
              <span
                key={item}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono text-green-400 border border-green-400/30 bg-green-400/5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
