import { Form, Link } from '@adonisjs/inertia/react'

interface NewsItem {
  id: number
  title: string
  excerpt: string | null
  content: string
  status: 'draft' | 'published'
}

interface Props {
  news: NewsItem
}

export default function EditNews({ news }: Props) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <Link
            route="news.dashboard"
            className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-white transition-colors mb-6"
          >
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Dashboard
          </Link>
          <h1 className="text-4xl font-extrabold text-white tracking-tight flex items-center gap-4">
            Edit Story
            <span
              className={`text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider border ${
                news.status === 'published'
                  ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                  : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
              }`}
            >
              {news.status}
            </span>
          </h1>
          <p className="mt-2 text-slate-400">
            Refine your technical insights before sharing with the world.
          </p>
        </div>

        {/* Toggle Status Quick Action */}
        <Form route="news.status" method="patch" routeParams={{ id: news.id }}>
          <button
            type="submit"
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors flex items-center gap-2 border ${
              news.status === 'draft'
                ? 'bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border-emerald-500/20'
                : 'bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border-amber-500/20'
            }`}
          >
            {news.status === 'draft' ? (
              <>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Publish Now
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h10a8 8 0 018 8v0M3 10l6 6m-6-6l6-6"
                  />
                </svg>
                Revert to Draft
              </>
            )}
          </button>
        </Form>
      </div>

      <div className="bg-slate-900/50 backdrop-blur-xl border border-white/5 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 p-32 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

        <Form route="news.update" method="put" routeParams={{ id: news.id }}>
          {({ errors, processing }: any) => (
            <div className="space-y-8 relative z-10">
              {/* Title Section */}
              <div className="space-y-4">
                <input
                  type="text"
                  name="title"
                  defaultValue={news.title}
                  placeholder="The title of your amazing story..."
                  className="w-full bg-transparent border-none text-3xl sm:text-4xl font-bold text-white placeholder-slate-600 focus:outline-none focus:ring-0 px-0 py-2"
                  required
                />
                <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent" />
                {errors.title && <p className="text-rose-400 text-sm mt-1">{errors.title}</p>}
              </div>

              {/* Excerpt Section */}
              <div className="space-y-2 relative">
                <label className="block text-sm font-medium text-slate-400 ml-1">
                  Brief Description (Excerpt)
                </label>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-blue-500/10 rounded-2xl opacity-0 group-focus-within:opacity-100 transition-opacity blur" />
                  <textarea
                    name="excerpt"
                    defaultValue={news.excerpt || ''}
                    placeholder="Provide a compelling summary that will appear on story cards..."
                    className="relative w-full p-5 bg-slate-950/50 border border-white/5 rounded-2xl text-slate-300 placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all resize-none z-10"
                    rows={3}
                  />
                </div>
                {errors.excerpt && <p className="text-rose-400 text-sm mt-1">{errors.excerpt}</p>}
              </div>

              {/* Content Section */}
              <div className="space-y-2 relative pt-4">
                <div className="flex items-center justify-between ml-1 mb-2">
                  <label className="block text-sm font-medium text-slate-400">Main Content</label>
                  <span className="text-xs bg-white/5 px-2 py-1 rounded text-slate-500 font-mono">
                    Markdown Supported
                  </span>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-blue-500/10 rounded-2xl opacity-0 group-focus-within:opacity-100 transition-opacity blur" />
                  <textarea
                    name="content"
                    defaultValue={news.content}
                    placeholder="Write the full technical content here...&#10;&#10;Use standard Markdown for formatting:&#10;## Headers&#10;**Bold text**&#10;`code snippets`"
                    rows={15}
                    className="relative w-full p-6 bg-slate-950/80 border border-white/5 rounded-2xl text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all font-mono text-sm leading-relaxed z-10"
                    required
                  />
                </div>
                {errors.content && <p className="text-rose-400 text-sm mt-1">{errors.content}</p>}
              </div>

              {/* Footer Actions */}
              <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/5">
                <div className="flex items-center text-sm text-slate-500 gap-2 w-full sm:w-auto">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Changes are not saved automatically
                </div>

                <div className="flex items-center justify-end gap-4 w-full sm:w-auto">
                  <Link
                    route="news.dashboard"
                    className="px-6 py-3 text-sm font-medium text-slate-400 hover:text-white transition-colors"
                  >
                    Cancel
                  </Link>
                  <button
                    type="submit"
                    disabled={processing}
                    className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-400 hover:to-blue-500 text-white rounded-xl font-medium shadow-lg shadow-indigo-500/25 transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {processing ? (
                      <>
                        <svg
                          className="animate-spin h-4 w-4 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Saving...
                      </>
                    ) : (
                      <>
                        Save Changes
                        <svg
                          className="w-4 h-4 ml-1"
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
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}
        </Form>
      </div>
    </div>
  )
}
