import { BaseSeeder } from '@adonisjs/lucid/seeders'
import News from '#models/news'
import { DateTime } from 'luxon'
import string from '@adonisjs/core/helpers/string'

export default class extends BaseSeeder {
  async run() {
    const now = DateTime.now()

    const records = Array.from({ length: 100 }).map((_, index) => {
      const id = index + 1
      const title = `Sample News Article ${id}`

      return {
        userId: 1, // ensure this user exists
        title,
        slug: string.slug(title),
        excerpt: `This is a short excerpt for article ${id}.`,
        content: `This is the full content of sample news article ${id}.

Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

Article number: ${id}.`,
        status: Math.random() > 0.5 ? ('published' as const) : ('draft' as const),
        createdAt: now.minus({ days: index }),
        updatedAt: now.minus({ days: index }),
      }
    })

    await News.createMany(records)
  }
}
