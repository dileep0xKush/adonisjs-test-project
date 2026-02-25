/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  home: typeof routes['home']
  news: {
    index: typeof routes['news.index']
    show: typeof routes['news.show']
    dashboard: typeof routes['news.dashboard']
    create: typeof routes['news.create']
    store: typeof routes['news.store']
    edit: typeof routes['news.edit']
    update: typeof routes['news.update']
    destroy: typeof routes['news.destroy']
    status: typeof routes['news.status']
  }
  newAccount: {
    create: typeof routes['new_account.create']
    store: typeof routes['new_account.store']
  }
  session: {
    create: typeof routes['session.create']
    store: typeof routes['session.store']
    destroy: typeof routes['session.destroy']
  }
}
