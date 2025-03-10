interface HisRouter {
  routes: Object;
}

class HisRouter {
  constructor() {
    this.routes = {}
    this.listenPopstate()
  }

  init(path) {
    history.replaceState({ path: path }, '', path)
    this.routes[path] && this.routes[path]()
  }

  route(path, callback) {
    this.routes[path] = callback
  }

  push(path) {
    history.pushState({ path: path }, '', path)
    this.routes[path] = this.routes[path]()
  }

  listenPopstate() {
    window.addEventListener('popstate', e => {
      //
    })
  }
}

window.hisRouter = new HisRouter()

window.hisRouter.route('/', () => console.log('load root page!'))
window.hisRouter.route('/home', () => console.log('load home page!'))

window.hisRouter.init('/')
window.hisRouter.push('/home')
