/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'home': {
    methods: ["GET","HEAD"],
    pattern: '/',
    tokens: [{"old":"/","type":0,"val":"/","end":""}],
    types: placeholder as Registry['home']['types'],
  },
  'news.index': {
    methods: ["GET","HEAD"],
    pattern: '/news',
    tokens: [{"old":"/news","type":0,"val":"news","end":""}],
    types: placeholder as Registry['news.index']['types'],
  },
  'news.show': {
    methods: ["GET","HEAD"],
    pattern: '/news/post/:slug',
    tokens: [{"old":"/news/post/:slug","type":0,"val":"news","end":""},{"old":"/news/post/:slug","type":0,"val":"post","end":""},{"old":"/news/post/:slug","type":1,"val":"slug","end":""}],
    types: placeholder as Registry['news.show']['types'],
  },
  'new_account.create': {
    methods: ["GET","HEAD"],
    pattern: '/signup',
    tokens: [{"old":"/signup","type":0,"val":"signup","end":""}],
    types: placeholder as Registry['new_account.create']['types'],
  },
  'new_account.store': {
    methods: ["POST"],
    pattern: '/signup',
    tokens: [{"old":"/signup","type":0,"val":"signup","end":""}],
    types: placeholder as Registry['new_account.store']['types'],
  },
  'session.create': {
    methods: ["GET","HEAD"],
    pattern: '/login',
    tokens: [{"old":"/login","type":0,"val":"login","end":""}],
    types: placeholder as Registry['session.create']['types'],
  },
  'session.store': {
    methods: ["POST"],
    pattern: '/login',
    tokens: [{"old":"/login","type":0,"val":"login","end":""}],
    types: placeholder as Registry['session.store']['types'],
  },
  'session.destroy': {
    methods: ["POST"],
    pattern: '/logout',
    tokens: [{"old":"/logout","type":0,"val":"logout","end":""}],
    types: placeholder as Registry['session.destroy']['types'],
  },
  'news.dashboard': {
    methods: ["GET","HEAD"],
    pattern: '/dashboard/news',
    tokens: [{"old":"/dashboard/news","type":0,"val":"dashboard","end":""},{"old":"/dashboard/news","type":0,"val":"news","end":""}],
    types: placeholder as Registry['news.dashboard']['types'],
  },
  'news.create': {
    methods: ["GET","HEAD"],
    pattern: '/dashboard/news/create',
    tokens: [{"old":"/dashboard/news/create","type":0,"val":"dashboard","end":""},{"old":"/dashboard/news/create","type":0,"val":"news","end":""},{"old":"/dashboard/news/create","type":0,"val":"create","end":""}],
    types: placeholder as Registry['news.create']['types'],
  },
  'news.store': {
    methods: ["POST"],
    pattern: '/dashboard/news',
    tokens: [{"old":"/dashboard/news","type":0,"val":"dashboard","end":""},{"old":"/dashboard/news","type":0,"val":"news","end":""}],
    types: placeholder as Registry['news.store']['types'],
  },
  'news.edit': {
    methods: ["GET","HEAD"],
    pattern: '/dashboard/news/:id/edit',
    tokens: [{"old":"/dashboard/news/:id/edit","type":0,"val":"dashboard","end":""},{"old":"/dashboard/news/:id/edit","type":0,"val":"news","end":""},{"old":"/dashboard/news/:id/edit","type":1,"val":"id","end":""},{"old":"/dashboard/news/:id/edit","type":0,"val":"edit","end":""}],
    types: placeholder as Registry['news.edit']['types'],
  },
  'news.update': {
    methods: ["PUT"],
    pattern: '/dashboard/news/:id',
    tokens: [{"old":"/dashboard/news/:id","type":0,"val":"dashboard","end":""},{"old":"/dashboard/news/:id","type":0,"val":"news","end":""},{"old":"/dashboard/news/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['news.update']['types'],
  },
  'news.destroy': {
    methods: ["DELETE"],
    pattern: '/dashboard/news/:id',
    tokens: [{"old":"/dashboard/news/:id","type":0,"val":"dashboard","end":""},{"old":"/dashboard/news/:id","type":0,"val":"news","end":""},{"old":"/dashboard/news/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['news.destroy']['types'],
  },
  'news.status': {
    methods: ["PATCH"],
    pattern: '/dashboard/news/:id/status',
    tokens: [{"old":"/dashboard/news/:id/status","type":0,"val":"dashboard","end":""},{"old":"/dashboard/news/:id/status","type":0,"val":"news","end":""},{"old":"/dashboard/news/:id/status","type":1,"val":"id","end":""},{"old":"/dashboard/news/:id/status","type":0,"val":"status","end":""}],
    types: placeholder as Registry['news.status']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}
