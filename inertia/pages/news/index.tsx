import { Link } from '@adonisjs/inertia/react'
import { DateTime } from 'luxon'

interface NewsItem {
  id: number
  title: string
  slug: string
  excerpt: string | null
  createdAt: string
}

export default function NewsIndex({ news }: { news: NewsItem[] }) {
  // Mock image generation for stunning UI
  const getCoverImage = (id: number) => {
    const images = [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f',
      'https://images.unsplash.com/photo-1531297122539-d31dbd33b216',
      'https://images.unsplash.com/photo-1623282033815-40b05d96c903',
      'https://images.unsplash.com/photo-1518770660439-4636190af475',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    ]
    return images[id % images.length] + '?q=80&w=800&auto=format&fit=crop'
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 sm:py-24">
      {/* Page Header */}
      <div className="relative text-center max-w-3xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-medium mb-6 border border-indigo-500/20">
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
          Latest Updates
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-100 to-slate-400">
          The Future of News
        </h1>
        <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
          Immerse yourself in our curated collection of deep insights, breaking changes, and modern
          tech stories.
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {news.length > 0 ? (
          news.map((item, index) => (
            <Link
              key={item.id}
              route="news.show"
              routeParams={{ slug: item.slug }}
              className={`group block relative rounded-3xl overflow-hidden bg-slate-900 border border-white/5 hover:border-indigo-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/20 transform hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-12`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Section */}
              <div className="relative h-60 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 z-10" />
                <img
                  src={getCoverImage(item.id)}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Content Section */}
              <div className="p-8 relative z-20 -mt-10">
                <time className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-3 block">
                  {DateTime.fromISO(item.createdAt).toFormat('MMMM dd, yyyy')}
                </time>
                <h2 className="text-2xl font-bold text-white mb-4 line-clamp-2 group-hover:text-indigo-300 transition-colors">
                  {item.title}
                </h2>

                <p className="text-slate-400 mb-6 line-clamp-3 leading-relaxed">
                  {item.excerpt ||
                    'Click to read more about this fascinating article and uncover the detailed insights within.'}
                </p>

                <div className="flex items-center text-sm font-medium text-white/70 group-hover:text-white transition-colors">
                  Read full story
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-full py-20 text-center border-2 border-dashed border-white/10 rounded-3xl">
            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-slate-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-white mb-2">No news published yet</h3>
            <p className="text-slate-400 max-w-md mx-auto">
              Check back later for the latest updates, or create an account to start publishing your
              own stories.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
