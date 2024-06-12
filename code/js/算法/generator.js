import { LinkList } from './链表_双向循环.js'

const link = new LinkList()
console.log(`🚀 ~ link:`, link)

link.list2Link([11, 22, 33])
console.log(`🚀 ~ link:`, link)

const size = link.getSize()
console.log(`🚀 ~ size:`, size)

function* gen() {
  let node = link.head

  while (node?.next) {
    yield node
    node = node.next
    if (node?.isHead) break
  }

  return 'done'
}

const g = gen()

let timer = setInterval(() => {
  const _g = g.next()
  console.log(`🚀 #################### _g: ####################`)
  console.log(_g)

  _g.done && clearInterval(timer)
}, 2000)
