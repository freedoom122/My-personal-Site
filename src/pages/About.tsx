import { motion } from 'framer-motion';

const fadeUp = (delay: number) => ({
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.7, ease: 'easeOut' as const },
  },
});

const hobbies = [
  { icon: '🎮', label: 'Gaming' },
  { icon: '🎸', label: 'Guitar' },
  { icon: '🛡️', label: 'Cybersecurity' },
  { icon: '🖥️', label: 'Tech Repair' },
  { icon: '🎲', label: 'Game Dev' },
  { icon: '⚡', label: 'Arduino' },
  { icon: '🌐', label: 'Server Admin' },
  { icon: '🎵', label: 'Music' },
];

const languages = [
  { lang: 'Romanian', level: 'Native', flag: '🇷🇴', percent: 100 },
  { lang: 'English', level: 'Fluent', flag: '🇬🇧', percent: 90 },
];

export default function About() {
  return (
    <main className="relative min-h-screen z-10 pt-24 pb-20 px-6">
      <div className="fixed inset-0 grid-bg pointer-events-none z-0" />
      <div className="fixed top-40 right-10 w-64 h-64 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />
      <div className="fixed bottom-20 left-10 w-72 h-72 rounded-full bg-green-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate="show"
          className="mb-16"
        >
          <p className="font-mono text-xs text-cyan-500 tracking-widest uppercase mb-3">
            // about_me.txt
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Who am <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #00e5cc, #00ff88)' }}>I?</span>
          </h1>
          <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full" />
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Photo + quick facts */}
          <motion.div
            variants={fadeUp(0.1)}
            initial="hidden"
            animate="show"
            className="space-y-6"
          >
            {/* Profile photo */}
            <div className="relative inline-block">
              <div
                className="w-64 h-64 rounded-2xl overflow-hidden mx-auto"
                style={{ border: '1px solid rgba(0,229,204,0.3)', boxShadow: '0 0 40px rgba(0,229,204,0.15)' }}
              >
                <img
                  src="/profile.jpg"
                  alt="Brasovean Marcu"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050d0f]/60 to-transparent rounded-2xl pointer-events-none" />
              </div>
              {/* Pulse ring */}
              <div
                className="absolute -inset-3 rounded-2xl border border-cyan-500/20 animate-pulse"
                style={{ animationDuration: '3s' }}
              />
              {/* Status badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0a1a1e] border border-cyan-500/30 text-xs font-mono text-cyan-400 whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Online & Coding
              </div>
            </div>

            {/* Quick stats card */}
            <div className="tech-card rounded-xl p-5 space-y-3 mt-8">
              <p className="font-mono text-xs text-cyan-500 tracking-widest uppercase mb-4">// quick_facts</p>
              {[
                { label: 'Age', value: '16 years old' },
                { label: 'Location', value: 'Beclean, Romania 🇷🇴' },
                { label: 'School', value: 'C.N. Petru Rareș' },
                { label: 'Status', value: 'Student & Developer' },
                { label: 'GitHub', value: '@freedoom122' },
                { label: 'Focus', value: 'Tech & Programming' },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between items-center py-1 border-b border-[#0d2b30] last:border-0">
                  <span className="font-mono text-xs text-[#5a8a85]">{label}</span>
                  <span className="text-sm text-cyan-300 font-medium">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            variants={fadeUp(0.2)}
            initial="hidden"
            animate="show"
            className="space-y-8"
          >
            {/* Bio */}
            <div className="tech-card rounded-xl p-6">
              <p className="font-mono text-xs text-cyan-500 tracking-widest uppercase mb-4">// bio</p>
              <div className="space-y-4 text-[#8ab8b4] text-sm leading-relaxed">
                <p>
                  Hey! I'm <span className="text-cyan-300 font-semibold">Brasovean Marcu</span>, a 16-year-old
                  from Beclean, Romania. I'm a student at{' '}
                  <span className="text-green-400">Colegiul Național Petru Rareș</span>, but honestly — most
                  of my real education happens at my desk, at 2AM, debugging code.
                </p>
                <p>
                  I got into programming because I wanted to understand how things work — and once you start
                  pulling at that thread, you never stop. From writing my first{' '}
                  <span className="text-cyan-400">C program</span> to managing Minecraft servers and building
                  self-hosted security systems, every project has taught me something new.
                </p>
                <p>
                  Outside of tech, I play <span className="text-green-400">guitar</span>, enjoy gaming, and love
                  the creative process of making something from nothing — whether that's code, music, or a game idea.
                </p>
                <p>
                  I speak fluent <span className="text-cyan-400">Romanian & English</span>, which makes me
                  comfortable collaborating with people from anywhere in the world.
                </p>
              </div>
            </div>

            {/* Languages */}
            <div className="tech-card rounded-xl p-6">
              <p className="font-mono text-xs text-cyan-500 tracking-widest uppercase mb-5">// spoken_languages</p>
              <div className="space-y-4">
                {languages.map(({ lang, level, flag, percent }) => (
                  <div key={lang}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-white flex items-center gap-2">
                        <span>{flag}</span> {lang}
                      </span>
                      <span className="font-mono text-xs text-cyan-400">{level}</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-[#0d2b30] overflow-hidden">
                      <motion.div
                        className="skill-bar-fill h-full rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${percent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hobbies */}
            <div className="tech-card rounded-xl p-6">
              <p className="font-mono text-xs text-cyan-500 tracking-widest uppercase mb-5">// interests</p>
              <div className="flex flex-wrap gap-2">
                {hobbies.map(({ icon, label }, i) => (
                  <motion.span
                    key={label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0d2b30] border border-cyan-500/20 text-sm text-cyan-300 hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all duration-200 cursor-default"
                  >
                    <span>{icon}</span>
                    <span className="font-mono text-xs">{label}</span>
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Story Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <p className="font-mono text-xs text-cyan-500 tracking-widest uppercase mb-3">// my_journey</p>
          <h2 className="text-2xl font-bold text-white mb-10">How it all started</h2>

          <div className="relative pl-8 space-y-10">
            <div className="timeline-line" />
            {[
              {
                year: '2021',
                title: 'First lines of code',
                desc: 'Started with Python and basic web stuff. Got hooked instantly when I made my first script actually do something useful.',
                color: '#00e5cc',
              },
              {
                year: '2022',
                title: 'Going deeper',
                desc: 'Picked up C and C++. Started understanding how computers really work, not just the surface level stuff. Bought my first Arduino.',
                color: '#00ff88',
              },
              {
                year: '2023',
                title: 'Servers & Security',
                desc: 'Started managing Minecraft servers, learning about networking, and building my first self-hosted home security system.',
                color: '#00e5cc',
              },
              {
                year: '2024',
                title: 'Expanding horizons',
                desc: 'Java, SQL, Lambda, JavaScript. Game development experiments. Cybersecurity deep dives. Still going strong.',
                color: '#00ff88',
              },
              {
                year: '2025 →',
                title: 'Right now',
                desc: 'Building this portfolio, working on multiple projects, studying at C.N. Petru Rareș, and never stopping.',
                color: '#00e5cc',
              },
            ].map(({ year, title, desc, color }, i) => (
              <motion.div
                key={year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="relative"
              >
                <div
                  className="timeline-dot"
                  style={{ background: color, boxShadow: `0 0 10px ${color}` }}
                />
                <div className="tech-card rounded-xl p-5 hover:border-cyan-500/40 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="font-mono text-xs px-2 py-0.5 rounded"
                      style={{ color, background: `${color}15`, border: `1px solid ${color}30` }}
                    >
                      {year}
                    </span>
                    <h3 className="text-white font-semibold text-sm">{title}</h3>
                  </div>
                  <p className="text-[#5a8a85] text-sm leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
