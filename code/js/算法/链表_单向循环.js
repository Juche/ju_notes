class LinkNode {
  constructor(data, isHead = false) {
    this.data = data
    this.next = null
    this.isHead = isHead
  }
}

class LinkList {
  constructor(head = null) {
    this.head = head
  }

  push() {}
  pop() {}
  shift() {}
  unshift() {}
  splice() {}
  find() {}
  getList() {}

  getSize() {
    let node = this.head
    let size = node ? 1 : 0

    while (node?.next) {
      node = node.next
      if (node?.isHead) break
      size++
    }

    return size
  }

  getNth(n) {
    let node = this.head

    while (--n && node?.next) {
      node = node.next
      if (node?.isHead) break
    }

    n && console.warn('取值节点超出链表长度!')

    return n ? null : node
  }

  getFirst() {
    return this.head
  }

  getLast() {
    let lastNode = this.head
    while (lastNode?.next) {
      if (lastNode.next?.isHead) break
      lastNode = lastNode.next
    }

    return lastNode
  }

  clear() {
    this.head = null
  }
}

const node1 = new LinkNode(1, true)
const node2 = new LinkNode(2)
const node3 = new LinkNode(3)

node1.next = node2
node2.next = node3
node3.next = node1

const list = new LinkList(node1)
console.log(`🚀 ~ list:`, list)

const size = list.getSize()
console.log(`🚀 ~ size:`, size)

const nth1 = list.getNth(1)
console.log(`🚀 ~ nth1:`, nth1)
const nth2 = list.getNth(2)
console.log(`🚀 ~ nth2:`, nth2)
const nth3 = list.getNth(3)
console.log(`🚀 ~ nth3:`, nth3)
const nth4 = list.getNth(4)
console.log(`🚀 ~ nth4:`, nth4)

const firstNode = list.getFirst()
console.log(`🚀 ~ firstNode:`, firstNode)

const lastNode = list.getLast()
console.log(`🚀 ~ lastNode:`, lastNode)
