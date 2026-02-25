import { Data } from '@generated/data'
import { toast, Toaster } from 'sonner'
import { usePage } from '@inertiajs/react'
import { ReactElement, useEffect } from 'react'
import { Form, Link } from '@adonisjs/inertia/react'

export default function Layout({ children }: { children: ReactElement<Data.SharedProps> }) {
  const { url } = usePage()

  useEffect(() => {
    toast.dismiss()
  }, [url])

  if (children.props.flash.error) {
    toast.error(children.props.flash.error)
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <header className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link route="home" className="flex items-center gap-2 text-white">
            <span className="text-xl font-semibold tracking-tight">AdonisApp</span>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-6 text-sm">
            {children.props.user ? (
              <>
                {/* User initials avatar */}
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center text-sm font-semibold">
                    {children.props.user.initials}
                  </div>

                  <Form route="session.destroy">
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition"
                    >
                      Logout
                    </button>
                  </Form>
                </div>
              </>
            ) : (
              <>
                <Link
                  route="new_account.create"
                  className="text-slate-300 hover:text-white transition"
                >
                  Signup
                </Link>
                <Link
                  route="session.create"
                  className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition font-medium"
                >
                  Login
                </Link>
              </>
            )}
          </nav>
        </div>
      </header>

      {/* Page Content */}
      <main className="max-w-7xl mx-auto px-6 py-10">{children}</main>

      <Toaster position="top-center" richColors />
    </div>
  )
}
