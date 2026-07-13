import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiInstagram, FiPhone, FiSend, FiCheck } from 'react-icons/fi';
import { SiTiktok, SiWhatsapp } from 'react-icons/si';

const fadeUp = (delay: number) => ({
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.7, ease: 'easeOut' as const },
  },
});

const socials = [
  {
    icon: <FiGithub size={20} />,
    label: 'GitHub',
    value: '@freedoom122',
    href: 'https://github.com/freedoom122',
    color: '#00e5cc',
  },
  {
    icon: <FiInstagram size={20} />,
    label: 'Instagram',
    value: '@br4sove4n',
    href: 'https://www.instagram.com/br4sove4n',
    color: '#00ff88',
  },
  {
    icon: <SiTiktok size={18} />,
    label: 'TikTok',
    value: '@fr33d00m.official',
    href: 'https://www.tiktok.com/@fr33d00m.official',
    color: '#00e5cc',
  },
  {
    icon: <SiTiktok size={18} />,
    label: 'TikTok 2',
    value: '@ily_tech56',
    href: 'https://www.tiktok.com/@ily_tech56',
    color: '#00ff88',
  },
  {
    icon: <SiWhatsapp size={18} />,
    label: 'WhatsApp',
    value: '+40 749 430 903',
    href: 'https://wa.me/40749430903',
    color: '#00e5cc',
  },
  {
    icon: <FiPhone size={18} />,
    label: 'Phone',
    value: '+40 755 628 706',
    href: 'tel:+40755628706',
    color: '#00ff88',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSending(true);
    // Simulate sending
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setErrors((err) => ({ ...err, [e.target.name]: '' }));
  };

  const inputClass = (field: string) =>
    `w-full bg-[#0a1a1e] border ${
      errors[field] ? 'border-red-500/50' : 'border-[#0d2b30]'
    } rounded-lg px-4 py-3.5 text-sm text-white placeholder-[#3a5a55] focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/20 transition-all duration-200 font-[inherit]`;

  return (
    <main className="relative min-h-screen z-10 pt-24 pb-20 px-6">
      <div className="fixed inset-0 grid-bg pointer-events-none z-0" />
      <div className="fixed top-40 left-10 w-64 h-64 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />
      <div className="fixed bottom-20 right-10 w-72 h-72 rounded-full bg-green-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div variants={fadeUp(0)} initial="hidden" animate="show" className="mb-16">
          <p className="font-mono text-xs text-cyan-500 tracking-widest uppercase mb-3">// contact.sh</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #00e5cc, #00ff88)' }}
            >
              Touch
            </span>
          </h1>
          <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full mb-4" />
          <p className="text-[#5a8a85] text-sm max-w-xl">
            Have a project idea, collaboration proposal, or just want to say hi? I'm always open to a good conversation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Form */}
          <motion.div variants={fadeUp(0.1)} initial="hidden" animate="show" className="md:col-span-3">
            <div className="tech-card rounded-xl p-6 md:p-8">
              <p className="font-mono text-xs text-cyan-500 tracking-widest uppercase mb-6">// send_message()</p>

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center gap-4"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(0,229,204,0.1)', border: '2px solid rgba(0,229,204,0.4)' }}
                  >
                    <FiCheck size={28} className="text-cyan-400" />
                  </div>
                  <h3 className="text-white font-bold text-xl">Message Sent!</h3>
                  <p className="text-[#5a8a85] text-sm">
                    Thanks for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-4 font-mono text-xs text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                  >
                    → Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-xs text-[#5a8a85] mb-2 tracking-widest uppercase">
                        Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={inputClass('name')}
                      />
                      {errors.name && <p className="mt-1 text-xs text-red-400 font-mono">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block font-mono text-xs text-[#5a8a85] mb-2 tracking-widest uppercase">
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className={inputClass('email')}
                      />
                      {errors.email && <p className="mt-1 text-xs text-red-400 font-mono">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-[#5a8a85] mb-2 tracking-widest uppercase">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      className={inputClass('subject')}
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-[#5a8a85] mb-2 tracking-widest uppercase">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me what you have in mind..."
                      rows={6}
                      className={`${inputClass('message')} resize-none`}
                    />
                    {errors.message && <p className="mt-1 text-xs text-red-400 font-mono">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full flex min-h-12 items-center justify-center gap-2 py-3.5 rounded-lg font-semibold text-sm text-[#050d0f] transition-all duration-300 hover:opacity-90 disabled:opacity-60"
                    style={{ background: 'linear-gradient(135deg, #00e5cc, #00ff88)' }}
                  >
                    {sending ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend size={15} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeUp(0.2)} initial="hidden" animate="show" className="md:col-span-2 space-y-4">
            <p className="font-mono text-xs text-cyan-500 tracking-widest uppercase mb-5">// find_me_here</p>

            {socials.map(({ icon, label, value, href, color }, i) => (
              <motion.a
                key={label + value}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 p-4 rounded-xl tech-card hover:border-opacity-50 transition-all duration-200 group"
                style={{ borderColor: `${color}15` }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-110"
                  style={{ background: `${color}15`, color }}
                >
                  {icon}
                </div>
                <div>
                  <p className="font-mono text-[10px] text-[#5a8a85] uppercase tracking-wider">{label}</p>
                  <p className="text-sm font-medium text-white group-hover:text-cyan-300 transition-colors duration-200">
                    {value}
                  </p>
                </div>
              </motion.a>
            ))}

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-6 p-4 rounded-xl tech-card"
            >
              <p className="font-mono text-[10px] text-[#5a8a85] uppercase tracking-wider mb-2">// location</p>
              <div className="flex items-center gap-3">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="text-white text-sm font-medium">Beclean, Romania 🇷🇴</p>
                  <p className="text-[#5a8a85] text-xs">UTC+3 (EET/EEST)</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
