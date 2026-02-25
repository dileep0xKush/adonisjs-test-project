import '@adonisjs/inertia/types'

import type React from 'react'
import type { Prettify } from '@adonisjs/core/types/common'

type ExtractProps<T> =
  T extends React.FC<infer Props>
    ? Prettify<Omit<Props, 'children'>>
    : T extends React.Component<infer Props>
      ? Prettify<Omit<Props, 'children'>>
      : never

declare module '@adonisjs/inertia/types' {
  export interface InertiaPages {
    'auth/login': ExtractProps<(typeof import('../../inertia/pages/auth/login.tsx'))['default']>
    'auth/signup': ExtractProps<(typeof import('../../inertia/pages/auth/signup.tsx'))['default']>
    'errors/not_found': ExtractProps<(typeof import('../../inertia/pages/errors/not_found.tsx'))['default']>
    'errors/server_error': ExtractProps<(typeof import('../../inertia/pages/errors/server_error.tsx'))['default']>
    'home': ExtractProps<(typeof import('../../inertia/pages/home.tsx'))['default']>
    'news/create': ExtractProps<(typeof import('../../inertia/pages/news/create.tsx'))['default']>
    'news/dashboard': ExtractProps<(typeof import('../../inertia/pages/news/dashboard.tsx'))['default']>
    'news/edit': ExtractProps<(typeof import('../../inertia/pages/news/edit.tsx'))['default']>
    'news/index': ExtractProps<(typeof import('../../inertia/pages/news/index.tsx'))['default']>
    'news/show': ExtractProps<(typeof import('../../inertia/pages/news/show.tsx'))['default']>
  }
}
