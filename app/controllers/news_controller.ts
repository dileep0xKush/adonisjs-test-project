import News from '#models/news'
import type { HttpContext } from '@adonisjs/core/http'
import string from '@adonisjs/core/helpers/string'

export default class NewsController {
  // Public listing
  async index({ inertia }: HttpContext) {
    const news = await News.query().where('status', 'published').orderBy('createdAt', 'desc')

    return inertia.render('news/index', {
      news: news.map((n) => n.serialize()) as any,
    })
  }

  // Public article page
  async show({ params, inertia }: HttpContext) {
    const article = await News.query()
      .where('slug', params.slug)
      .where('status', 'published')
      .firstOrFail()

    return inertia.render('news/show', {
      article: article.serialize() as any,
    })
  }

  // Logged user dashboard
  async dashboard({ auth, inertia }: HttpContext) {
    const news = await News.query().where('user_id', auth.user!.id).orderBy('createdAt', 'desc')

    return inertia.render('news/dashboard', {
      news: news.map((n) => n.serialize()) as any,
    })
  }
  async create({ inertia }: HttpContext) {
    return inertia.render('news/create', {})
  }

  async store({ request, auth, response }: HttpContext) {
    const data = request.only(['title', 'excerpt', 'content'])

    await News.create({
      ...data,
      slug: string.slug(data.title),
      userId: auth.user!.id,
      status: 'draft',
    })

    return response.redirect().toRoute('news.dashboard')
  }

  async edit({ params, auth, inertia }: HttpContext) {
    const news = await News.query()
      .where('id', params.id)
      .where('user_id', auth.user!.id)
      .firstOrFail()

    return inertia.render('news/edit', {
      news: news.serialize() as any,
    })
  }

  async update({ params, request, auth, response }: HttpContext) {
    const news = await News.query()
      .where('id', params.id)
      .where('user_id', auth.user!.id)
      .firstOrFail()

    const data = request.only(['title', 'excerpt', 'content'])

    news.merge({
      ...data,
      slug: string.slug(data.title),
    })

    await news.save()

    return response.redirect().toRoute('news.dashboard')
  }

  async destroy({ params, auth, response }: HttpContext) {
    const news = await News.query()
      .where('id', params.id)
      .where('user_id', auth.user!.id)
      .firstOrFail()

    await news.delete()

    return response.redirect().back()
  }

  async toggleStatus({ params, auth, response }: HttpContext) {
    const news = await News.query()
      .where('id', params.id)
      .where('user_id', auth.user!.id)
      .firstOrFail()

    news.status = news.status === 'draft' ? 'published' : 'draft'

    await news.save()

    return response.redirect().back()
  }
}
