import { Form, Link } from '@adonisjs/inertia/react'

export default function Login() {
  return (
    <div className="min-h-[85vh] flex items-center justify-center relative px-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex items-center justify-center">
        <div className="w-[800px] h-[800px] rounded-full bg-indigo-900/10 blur-[120px]" />
      </div>

      <div className="w-full max-w-md bg-white/[0.02] border border-white/5 backdrop-blur-3xl rounded-3xl p-8 sm:p-10 shadow-2xl relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="w-16 h-16 mx-auto bg-gradient-to-br from-indigo-500/20 to-blue-500/20 border border-indigo-500/30 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/10">
            <svg
              className="w-8 h-8 text-indigo-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight mb-3">Welcome Back</h1>
          <p className="text-slate-400 text-sm">Enter your credentials to access your workspace</p>
        </div>

        {/* Form */}
        <Form route="session.store">
          {({ errors, processing }) => (
            <div className="space-y-6">
              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-slate-300">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-slate-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="you@example.com"
                    autoComplete="username"
                    className={`w-full pl-11 pr-4 py-3 sm:py-3.5 rounded-xl bg-slate-900/50 border ${
                      errors.email
                        ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20'
                        : 'border-white/10 focus:border-indigo-500 focus:ring-indigo-500/20'
                    } text-white placeholder-slate-500 focus:outline-none focus:ring-4 transition-all duration-300`}
                  />
                </div>
                {errors.email && (
                  <p className="text-rose-400 text-xs mt-1 absolute">{errors.email}</p>
                )}
              </div>

              {/* Password */}
              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium text-slate-300">
                    Password
                  </label>
                  <Link
                    href="#"
                    className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-slate-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    autoComplete="current-password"
                    className={`w-full pl-11 pr-4 py-3 sm:py-3.5 rounded-xl bg-slate-900/50 border ${
                      errors.password
                        ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20'
                        : 'border-white/10 focus:border-indigo-500 focus:ring-indigo-500/20'
                    } text-white placeholder-slate-500 focus:outline-none focus:ring-4 transition-all duration-300`}
                  />
                </div>
                {errors.password && (
                  <p className="text-rose-400 text-xs mt-1 absolute">{errors.password}</p>
                )}
              </div>

              {/* Submit */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={processing}
                  className="w-full py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-400 hover:to-blue-500 text-white font-medium shadow-lg shadow-indigo-500/25 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  {processing ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5 text-white"
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
                      Authenticating...
                    </span>
                  ) : (
                    'Sign In'
                  )}
                </button>
              </div>

              <div className="text-center pt-4">
                <p className="text-slate-400 text-sm">
                  Don't have an account?{' '}
                  <Link
                    href="/signup"
                    className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
                  >
                    Create one here
                  </Link>
                </p>
              </div>
            </div>
          )}
        </Form>
      </div>
    </div>
  )
}
