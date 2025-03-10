interface HashRouter {
  routes: Object;
  currentUrl: String;
}

class HashRouter {
  // routes: {};
  // currentUrl: string;
  constructor() {
    this.routes = {}
    this.currentUrl = ''

    window.addEventListener('load', this.refresh, false)
    window.addEventListener('hashchange', this.refresh, false)
  }

  refresh() {
    //
  }

  route(path, callback) {
    this.route[path] = callback
  }

  push(path) {
    this.route[path] && this.route[path]()
  }
}

window.hashRouter = new HashRouter()

window.hashRouter.route('/', () => console.log('load root page!'))
window.hashRouter.route('/home', () => console.log('load home page!'))

window.hashRouter.push('/')
window.hashRouter.push('/home')
