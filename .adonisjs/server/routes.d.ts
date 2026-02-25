import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'home': { paramsTuple?: []; params?: {} }
    'news.show': { paramsTuple: [ParamValue]; params: {'slug': ParamValue} }
    'new_account.create': { paramsTuple?: []; params?: {} }
    'new_account.store': { paramsTuple?: []; params?: {} }
    'session.create': { paramsTuple?: []; params?: {} }
    'session.store': { paramsTuple?: []; params?: {} }
    'session.destroy': { paramsTuple?: []; params?: {} }
    'news.dashboard': { paramsTuple?: []; params?: {} }
    'news.create': { paramsTuple?: []; params?: {} }
    'news.store': { paramsTuple?: []; params?: {} }
    'news.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'news.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'news.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'news.status': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  GET: {
    'home': { paramsTuple?: []; params?: {} }
    'news.show': { paramsTuple: [ParamValue]; params: {'slug': ParamValue} }
    'new_account.create': { paramsTuple?: []; params?: {} }
    'session.create': { paramsTuple?: []; params?: {} }
    'news.dashboard': { paramsTuple?: []; params?: {} }
    'news.create': { paramsTuple?: []; params?: {} }
    'news.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  HEAD: {
    'home': { paramsTuple?: []; params?: {} }
    'news.show': { paramsTuple: [ParamValue]; params: {'slug': ParamValue} }
    'new_account.create': { paramsTuple?: []; params?: {} }
    'session.create': { paramsTuple?: []; params?: {} }
    'news.dashboard': { paramsTuple?: []; params?: {} }
    'news.create': { paramsTuple?: []; params?: {} }
    'news.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  POST: {
    'new_account.store': { paramsTuple?: []; params?: {} }
    'session.store': { paramsTuple?: []; params?: {} }
    'session.destroy': { paramsTuple?: []; params?: {} }
    'news.store': { paramsTuple?: []; params?: {} }
  }
  PUT: {
    'news.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  DELETE: {
    'news.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  PATCH: {
    'news.status': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}