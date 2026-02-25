export default function Home() {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">Insights, Stories & Ideas</h1>
        <p className="mt-6 text-slate-400 max-w-2xl mx-auto text-lg">
          Practical guides, deep technical insights, and modern development strategies.
        </p>
        <div className="mt-10">
          <button className="bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-xl font-medium transition">
            Explore Articles
          </button>
        </div>
      </section>

      {/* Featured Post */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div className="rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt="Featured post"
            className="w-full h-72 md:h-96 object-cover hover:scale-105 transition duration-500"
          />
        </div>

        <div>
          <span className="text-indigo-500 text-sm font-medium">Featured</span>
          <h2 className="text-3xl font-bold mt-4">
            Building Scalable Full-Stack Apps with AdonisJS & React
          </h2>
          <p className="mt-4 text-slate-400">
            Learn how to design maintainable backend architecture, optimize PostgreSQL, and build
            modern frontend experiences with Inertia.
          </p>
          <button className="mt-6 px-5 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition">
            Read More →
          </button>
        </div>
      </section>

      {/* Blog Grid */}
      <section>
        <h3 className="text-2xl font-semibold mb-10">Latest Articles</h3>

        <div className="grid md:grid-cols-3 gap-8">
          <BlogCard
            image="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
            title="Understanding Inertia.js Internals"
            description="A deep dive into server-driven SPA architecture."
          />
          <BlogCard
            image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
            title="Database Optimization with PostgreSQL"
            description="Indexing strategies, query planning, and performance tuning."
          />
          <BlogCard
            image="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
            title="Clean Backend Architecture"
            description="Apply separation of concerns for scalable systems."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16 border-t border-slate-800">
        <h3 className="text-2xl font-bold">Start sharing your technical knowledge today</h3>
        <p className="text-slate-400 mt-4">
          Join developers writing about modern web technologies.
        </p>
        <button className="mt-6 bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-xl font-medium transition">
          Create New Post
        </button>
      </section>
    </div>
  )
}

function BlogCard({
  image,
  title,
  description,
}: {
  image: string
  title: string
  description: string
}) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-indigo-500 transition">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover hover:scale-105 transition duration-500"
        />
      </div>

      <div className="p-6">
        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="text-slate-400 mt-3">{description}</p>
        <button className="mt-5 text-indigo-500 hover:text-indigo-400 font-medium">
          Read Article →
        </button>
      </div>
    </div>
  )
}
