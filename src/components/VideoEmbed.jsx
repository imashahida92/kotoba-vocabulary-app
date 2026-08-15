import { useState } from 'react'
import { FiPlay, FiExternalLink } from 'react-icons/fi'

export default function VideoEmbed({ id, title }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div>
      <div className="relative aspect-video w-full overflow-hidden bg-sumi">
        {loaded ? (
          <iframe
            className="h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        ) : (
          <button
            type="button"
            onClick={() => setLoaded(true)}
            className="group relative block h-full w-full"
            aria-label={`Play ${title}`}
          >
            <img
              src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
              alt={title}
              className="h-full w-full object-cover opacity-80 transition group-hover:opacity-60"
              loading="lazy"
            />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="grid h-16 w-16 place-items-center rounded-full bg-shu text-washi shadow-lg transition group-hover:scale-110">
                <FiPlay size={26} className="ml-1" />
              </span>
            </span>
          </button>
        )}
      </div>
      <a
        href={`https://www.youtube.com/watch?v=${id}`}
        target="_blank"
        rel="noreferrer"
        className="mt-2 flex items-center justify-center gap-1.5 text-xs font-medium text-ai/60 transition hover:text-shu"
      >
        <FiExternalLink size={13} /> Trouble playing? Watch on YouTube
      </a>
    </div>
  )
}
