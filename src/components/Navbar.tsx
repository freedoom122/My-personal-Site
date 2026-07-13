import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiCode } from 'react-icons/fi';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/cv', label: 'CV' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#050d0f]/90 backdrop-blur-xl border-b border-[#0d2b30]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between h-[72px]">
          {/* Logo */}
          <NavLink to="/" className="flex min-h-11 items-center gap-2 rounded-lg py-1 group">
            <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-green-400 flex items-center justify-center">
              <FiCode className="text-[#050d0f] text-sm font-bold" />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-400 to-green-400 opacity-0 group-hover:opacity-40 blur-md transition-opacity duration-300" />
            </div>
            <span className="font-mono text-sm text-cyan-400 group-hover:text-green-400 transition-colors duration-300">
              brasovean<span className="text-green-400 group-hover:text-cyan-400 transition-colors duration-300">.dev</span>
            </span>
          </NavLink>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-3 lg:gap-6">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `nav-link inline-flex min-h-11 items-center rounded-md px-2 font-mono text-xs tracking-widest uppercase transition-colors duration-200 ${
                    isActive
                      ? 'text-cyan-400 active'
                      : 'text-[#5a8a85] hover:text-cyan-300'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden min-h-11 min-w-11 rounded-lg text-cyan-400 hover:bg-cyan-500/10 hover:text-green-400 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[72px] left-0 right-0 z-40 bg-[#050d0f]/98 backdrop-blur-xl border-b border-[#0d2b30] md:hidden"
          >
            <div className="flex flex-col px-5 py-4 gap-1">
              {links.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `flex min-h-12 items-center rounded-lg px-4 font-mono text-sm tracking-widest uppercase transition-colors duration-200 ${
                      isActive ? 'text-cyan-400' : 'text-[#5a8a85]'
                    }`
                  }
                >
                  <span className="text-green-500 mr-2">{'>'}</span>
                  {label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
