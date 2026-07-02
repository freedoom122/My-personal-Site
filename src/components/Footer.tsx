import { FiGithub, FiInstagram } from 'react-icons/fi';
import { SiTiktok } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="border-t border-[#0d2b30] bg-[#030a0c] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-mono text-xs text-[#5a8a85]">
            <span className="text-cyan-400">brasovean</span>
            <span className="text-green-400">.dev</span>
          </p>
          <p className="text-xs text-[#3a5a55] mt-1">
            © {new Date().getFullYear()} Brasovean Marcu — All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/freedoom122"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5a8a85] hover:text-cyan-400 transition-colors duration-200"
            aria-label="GitHub"
          >
            <FiGithub size={18} />
          </a>
          <a
            href="https://www.instagram.com/br4sove4n"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5a8a85] hover:text-cyan-400 transition-colors duration-200"
            aria-label="Instagram"
          >
            <FiInstagram size={18} />
          </a>
          <a
            href="https://www.tiktok.com/@fr33d00m.official"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5a8a85] hover:text-cyan-400 transition-colors duration-200"
            aria-label="TikTok"
          >
            <SiTiktok size={16} />
          </a>
        </div>

        <p className="font-mono text-[10px] text-[#3a5a55] text-center md:text-right">
          Built with React + Vite
          <br />
          <span className="text-cyan-900">Beclean, Romania 🇷🇴</span>
        </p>
      </div>
    </footer>
  );
}
