import { FaHeadphones, FaLayerGroup, FaRegLightbulb, FaMobileAlt } from 'react-icons/fa'

const points = [
  { icon: FaLayerGroup, title: 'Structured lessons', text: 'Ten themed lessons that build from greetings to gratitude, so nothing feels random.' },
  { icon: FaHeadphones, title: 'Hear it, don\u2019t just read it', text: 'Every vocabulary card speaks the word aloud so pronunciation sticks from day one.' },
  { icon: FaRegLightbulb, title: 'Know when to use it', text: 'Each word comes with a real-life context, not just a dictionary definition.' },
  { icon: FaMobileAlt, title: 'Learn anywhere', text: 'A fully responsive layout means lessons work as well on your phone as your laptop.' },
]

export default function WhyKotoba() {
  return (
    <section className="bg-washiDark py-20" data-aos="fade-up">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-center font-display text-sm uppercase tracking-[0.3em] text-shu">Why Kotoba</p>
        <h2 className="mt-2 text-center font-display text-3xl font-bold text-ai">Built the way real learners study</h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {points.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-ai/10 bg-white/60 p-6 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="hanko h-12 w-12 text-lg"><Icon /></div>
              <h3 className="mt-4 font-display text-lg font-bold text-ai">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-sumi/60">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
