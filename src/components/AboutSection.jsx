import vocabulary from '../data/vocabulary.json'
import lessonsMeta from '../data/lessonsMeta.json'

export default function AboutSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20" data-aos="fade-up">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <p className="font-display text-sm uppercase tracking-[0.3em] text-shu">Our Mission</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-ai md:text-4xl">
            Vocabulary is the doorway. We built the key.
          </h2>
          <p className="mt-5 leading-relaxed text-sumi/70">
            Most learners quit not because grammar is hard, but because words don't stick. Kotoba
            breaks Japanese down into {lessonsMeta.length} focused lessons — from first greetings and
            numbers all the way to nature, jobs, and polite expressions — so every session has a
            clear, reachable goal.
          </p>
          <p className="mt-4 leading-relaxed text-sumi/70">
            Log in, pick a lesson, and work through cards that show you the word, how to say it, and
            exactly when native speakers use it. Tap to hear it spoken aloud, then move to the next
            card. No overwhelm, just steady progress.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-ai/10 bg-white/60 p-4">
              <p className="font-display text-2xl font-bold text-shu">{lessonsMeta.length}</p>
              <p className="text-sm text-sumi/60">structured lessons</p>
            </div>
            <div className="rounded-2xl border border-ai/10 bg-white/60 p-4">
              <p className="font-display text-2xl font-bold text-shu">{vocabulary.length}+</p>
              <p className="text-sm text-sumi/60">everyday words</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] border-2 border-dashed border-gold/40" />
          <img
            src="https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?q=80&w=1200&auto=format&fit=crop"
            alt="Person studying Japanese vocabulary at a desk with notebooks"
            className="h-full w-full rounded-[2rem] object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  )
}
