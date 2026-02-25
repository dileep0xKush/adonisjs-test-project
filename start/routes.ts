import { middleware } from '#start/kernel'
import { controllers } from '#generated/controllers'
import router from '@adonisjs/core/services/router'

const NewsController = () => import('#controllers/news_controller')

router.get('/', [NewsController, 'index']).as('home')
router.get('/news/post/:slug', [NewsController, 'show']).as('news.show')

/*
|--------------------------------------------------------------------------
| Guest Auth
|--------------------------------------------------------------------------
*/

router
  .group(() => {
    router.get('signup', [controllers.NewAccount, 'create'])
    router.post('signup', [controllers.NewAccount, 'store'])

    router.get('login', [controllers.Session, 'create'])
    router.post('login', [controllers.Session, 'store'])
  })
  .use(middleware.guest())

/*
|--------------------------------------------------------------------------
| Authenticated Dashboard
|--------------------------------------------------------------------------
*/

router
  .group(() => {
    router.post('logout', [controllers.Session, 'destroy'])

    router.get('/dashboard/news', [NewsController, 'dashboard']).as('news.dashboard')

    router.get('/dashboard/news/create', [NewsController, 'create']).as('news.create')
    router.post('/dashboard/news', [NewsController, 'store']).as('news.store')

    router.get('/dashboard/news/:id/edit', [NewsController, 'edit']).as('news.edit')
    router.put('/dashboard/news/:id', [NewsController, 'update']).as('news.update')

    router.delete('/dashboard/news/:id', [NewsController, 'destroy']).as('news.destroy')

    router.patch('/dashboard/news/:id/status', [NewsController, 'toggleStatus']).as('news.status')
  })
  .use(middleware.auth())
