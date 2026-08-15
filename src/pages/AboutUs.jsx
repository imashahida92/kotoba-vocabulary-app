import { useEffect } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function AboutUs() {
  useEffect(() => {
    document.title = 'Kotoba | About Us'
  }, [])

  return (
    <div className="mx-auto max-w-4xl px-5 py-16">
      <div className="text-center">
        <p className="font-display text-sm uppercase tracking-[0.3em] text-shu">About the Developer</p>
        <h1 className="mt-2 font-display text-4xl font-bold text-ai">About Us</h1>
      </div>

      <div className="mt-12 rounded-[2rem] border border-ai/10 bg-white/70 p-10 shadow-sm">
        <p className="leading-relaxed text-sumi/70">
          Kotoba was built as a Vocabulary Learning Application assignment, designed to make picking up
          everyday Japanese words feel approachable instead of overwhelming. It combines a Firebase
          authentication system, ten themed vocabulary lessons, and speech-synthesis pronunciation into
          a single, fully responsive single-page application.
        </p>
        <p className="mt-4 leading-relaxed text-sumi/70">
          The project focuses on clean routing with protected private pages, form validation, and a
          distinctive visual identity inspired by traditional Japanese design elements — the torii gate,
          the hanko stamp, and washi paper texture — brought into a modern React interface.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl bg-washi p-5 text-center">
            <p className="font-display text-lg font-bold text-ai">Frontend</p>
            <p className="mt-1 text-sm text-sumi/60">React, React Router, Tailwind CSS</p>
          </div>
          <div className="rounded-2xl bg-washi p-5 text-center">
            <p className="font-display text-lg font-bold text-ai">Auth &amp; Data</p>
            <p className="mt-1 text-sm text-sumi/60">Firebase Authentication, JSON dataset</p>
          </div>
          <div className="rounded-2xl bg-washi p-5 text-center">
            <p className="font-display text-lg font-bold text-ai">Extras</p>
            <p className="mt-1 text-sm text-sumi/60">AOS animations, CountUp, Web Speech API</p>
          </div>
        </div>

        <div className="mt-10 flex justify-center gap-4">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-full border border-ai/20 text-ai transition hover:bg-ai hover:text-washi">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-full border border-ai/20 text-ai transition hover:bg-ai hover:text-washi">
            <FaLinkedin />
          </a>
          <a href="mailto:hello@kotoba-learn.app" className="grid h-11 w-11 place-items-center rounded-full border border-ai/20 text-ai transition hover:bg-ai hover:text-washi">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </div>
  )
}
