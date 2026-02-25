import { Link } from '@adonisjs/inertia/react'
import { DateTime } from 'luxon'

interface Article {
  id: number
  title: string
  content: string
  createdAt: string
  // Assumed properties
  excerpt?: string
  user?: { fullName: string; email: string }
}

export default function NewsShow({ article }: { article: Article }) {
  const getCoverImage = (id: number) => {
    const images = [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f',
      'https://images.unsplash.com/photo-1531297122539-d31dbd33b216',
      'https://images.unsplash.com/photo-1623282033815-40b05d96c903',
      'https://images.unsplash.com/photo-1518770660439-4636190af475',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    ]
    return images[id % images.length] + '?q=80&w=1600&auto=format&fit=crop'
  }

  return (
    <article className="min-h-screen bg-[#080B14]">
      {/* Hero Image Section */}
      <div className="relative w-full h-[60vh] md:h-[70vh] min-h-[500px]">
        {/* Navigation override / back button */}
        <div className="absolute top-8 left-6 md:left-12 z-50">
          <Link
            href="/"
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-black/30 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </Link>
        </div>

        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#080B14] via-[#080B14]/60 to-transparent" />
        <img
          src={getCoverImage(article.id)}
          alt={article.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute bottom-0 left-0 w-full z-20 p-6 md:p-12 max-w-5xl mx-auto md:left-1/2 md:-translate-x-1/2">
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-indigo-300 mb-6">
            <time className="px-3 py-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
              {DateTime.fromISO(article.createdAt).toFormat('MMMM dd, yyyy')}
            </time>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight drop-shadow-2xl">
            {article.title}
          </h1>

          <div className="flex items-center gap-4 mt-8">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-xl font-bold shadow-lg shadow-indigo-500/20">
              {article.user?.fullName?.[0] || 'U'}
            </div>
            <div>
              <p className="font-semibold text-white text-lg">
                {article.user?.fullName || 'Anonymous Author'}
              </p>
              <p className="text-slate-400 text-sm">Technology Enthusiast</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        {article.excerpt && (
          <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light mb-12 py-8 border-y border-white/5">
            {article.excerpt}
          </p>
        )}

        <div className="text-[#94A3B8] text-lg leading-relaxed space-y-8 prose-invert w-full max-w-none">
          {article.content.split('\n').map(
            (paragraph, idx) =>
              paragraph.trim() && (
                <p key={idx} className="mb-6 whitespace-pre-wrap">
                  {paragraph}
                </p>
              )
          )}
        </div>
      </div>
    </article>
  )
}
