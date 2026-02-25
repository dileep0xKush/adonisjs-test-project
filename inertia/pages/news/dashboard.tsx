import { Link, Form } from '@adonisjs/inertia/react'
import { DateTime } from 'luxon'

type NewsItem = {
  id: number
  title: string
  status: 'draft' | 'published'
  createdAt: string
  slug: string
}

export default function Dashboard({ news = [] }: { news: NewsItem[] }) {
  // Compute stats
  const totalPosts = news.length
  const publishedPosts = news.filter((n) => n.status === 'published').length

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      {/* Header & Stats Layer */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
        <div>
          <h1 className="text-4xl font-extrabold text-white tracking-tight mb-2">
            Creator Dashboard
          </h1>
          <p className="text-slate-400">Manage your published articles and drafts.</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex gap-4 bg-slate-900/50 backdrop-blur-md rounded-2xl p-2 border border-white/5">
            <div className="px-4 py-2 flex flex-col items-center">
              <span className="text-2xl font-bold text-white leading-none">{totalPosts}</span>
              <span className="text-xs text-slate-400 font-medium uppercase tracking-wide mt-1">
                Total
              </span>
            </div>
            <div className="w-px bg-white/10" />
            <div className="px-4 py-2 flex flex-col items-center">
              <span className="text-2xl font-bold text-emerald-400 leading-none">
                {publishedPosts}
              </span>
              <span className="text-xs text-slate-400 font-medium uppercase tracking-wide mt-1">
                Live
              </span>
            </div>
          </div>

          <Link
            route="news.create"
            className="flex items-center gap-2 px-6 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-semibold shadow-xl shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-1"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Write Story
          </Link>
        </div>
      </div>

      {/* Content Layer */}
      <div className="bg-slate-900/50 backdrop-blur-xl border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
        {news.length === 0 ? (
          <div className="p-16 text-center">
            <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-slate-500"
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
            <h3 className="text-xl font-medium text-white mb-2">No stories yet</h3>
            <p className="text-slate-400 mb-8 max-w-sm mx-auto">
              You haven't written any stories yet. Start writing to share your knowledge with the
              world.
            </p>
            <Link route="news.create" className="text-indigo-400 font-medium hover:text-indigo-300">
              Start your first story →
            </Link>
          </div>
        ) : (
          <div className="divide-y divide-white/5">
            {news.map((item) => (
              <div
                key={item.id}
                className="p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-white/[0.02] transition-colors group"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                        item.status === 'published'
                          ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                          : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                      }`}
                    >
                      {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                    </span>
                    <span className="text-sm text-slate-500">
                      {DateTime.fromISO(item.createdAt).toRelative()}
                    </span>
                  </div>
                  <Link
                    route={item.status === 'published' ? 'news.show' : 'news.edit'}
                    routeParams={
                      item.status === 'published' ? { slug: item.slug } : { id: item.id }
                    }
                    className="block"
                  >
                    <h2 className="text-xl font-bold text-white truncate group-hover:text-indigo-400 transition-colors">
                      {item.title}
                    </h2>
                  </Link>
                </div>

                <div className="flex items-center gap-2 md:gap-4 md:opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link
                    route="news.edit"
                    routeParams={{ id: item.id }}
                    className="p-2 sm:px-4 sm:py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      />
                    </svg>
                    <span className="hidden sm:inline">Edit</span>
                  </Link>

                  <Link
                    href={`/dashboard/news/${item.id}/status`}
                    method="patch"
                    as="button"
                    className="p-2 sm:px-4 sm:py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium whitespace-nowrap"
                  >
                    {item.status === 'draft' ? (
                      <>
                        <svg
                          className="w-4 h-4 text-emerald-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="hidden sm:inline">Publish</span>
                      </>
                    ) : (
                      <>
                        <svg
                          className="w-4 h-4 text-amber-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                          />
                        </svg>
                        <span className="hidden sm:inline">Unpublish</span>
                      </>
                    )}
                  </Link>

                  <div className="w-px h-6 bg-white/10 mx-1 hidden sm:block"></div>

                  <Link
                    href={`/dashboard/news/${item.id}`}
                    method="delete"
                    as="button"
                    onStart={(e: any) => {
                      if (
                        !confirm(
                          'Are you sure you want to delete this story? This action cannot be undone.'
                        )
                      ) {
                        e.preventDefault()
                      }
                    }}
                    className="p-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 transition-colors"
                    title="Delete Story"
                  >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </Form>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
