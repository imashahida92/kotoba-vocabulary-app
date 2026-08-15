import CountUp from 'react-countup'
import vocabulary from '../data/vocabulary.json'
import lessonsMeta from '../data/lessonsMeta.json'

const stats = [
  { label: 'Learners', value: 8400, suffix: '+' },
  { label: 'Lessons', value: lessonsMeta.length, suffix: '' },
  { label: 'Vocabulary Words', value: vocabulary.length, suffix: '+' },
  { label: 'Tutorial Videos', value: 8, suffix: '' },
]

export default function SuccessCounter() {
  return (
    <section className="bg-ai py-16 text-washi" data-aos="fade-up">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-display text-4xl font-bold text-gold md:text-5xl">
              <CountUp end={s.value} duration={2.4} enableScrollSpy scrollSpyOnce />
              {s.suffix}
            </p>
            <p className="mt-2 text-sm uppercase tracking-widest text-washi/60">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
