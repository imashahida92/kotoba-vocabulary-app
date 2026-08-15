import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaYoutube, FaGithub } from 'react-icons/fa'
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-ai/10 bg-sumi text-washi">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="hanko h-10 w-10 border-gold text-gold text-base">語</span>
            <span className="font-display text-xl font-bold">Kotoba</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-washi/60">
            A pocket-sized dojo for Japanese vocabulary — bingo your way to fluency, one lesson at a time.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-widest text-gold">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-washi/70">
            <li><Link to="/" className="hover:text-washi">Home</Link></li>
            <li><Link to="/lets-learn" className="hover:text-washi">Start Learning</Link></li>
            <li><Link to="/tutorials" className="hover:text-washi">Tutorials</Link></li>
            <li><Link to="/about-us" className="hover:text-washi">About Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-widest text-gold">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-washi/70">
            <li className="flex items-center gap-2"><FiMail /> hello@kotoba-learn.app</li>
            <li className="flex items-center gap-2"><FiPhone /> +880 1XXX-XXXXXX</li>
            <li className="flex items-center gap-2"><FiMapPin /> Dhaka, Bangladesh</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-widest text-gold">Follow</h4>
          <div className="mt-4 flex gap-3">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-full border border-washi/20 transition hover:border-gold hover:text-gold">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full border border-washi/20 transition hover:border-gold hover:text-gold">
              <FaInstagram />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="grid h-10 w-10 place-items-center rounded-full border border-washi/20 transition hover:border-gold hover:text-gold">
              <FaYoutube />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="grid h-10 w-10 place-items-center rounded-full border border-washi/20 transition hover:border-gold hover:text-gold">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
      <div className="divider-torii opacity-20" />
      <p className="px-5 py-5 text-center text-xs text-washi/50">
        © {new Date().getFullYear()} Kotoba — Lingo Bingo. Built for language learners everywhere.
      </p>
    </footer>
  )
}
