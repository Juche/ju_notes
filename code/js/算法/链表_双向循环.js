class LinkNode {
  constructor(data, isHead = false) {
    this.data = data
    this.pre = null
    this.next = null
    this.isHead = isHead
  }
}

class LinkList {
  constructor(head = null) {
    this.head = head
  }

  push(data) {
    const head = this.head
    const node = this.getLast()
    const lastNode = new LinkNode(data)

    lastNode.pre = node
    lastNode.next = head
    head.pre = lastNode
    node.next = lastNode

    this.head = head
  }
  pop() {
    const head = this.head
    const node = this.getLast()
    const lastNode = node.pre

    lastNode.next = head
    head.pre = lastNode

    this.head = head
  }
  shift(data) {
    const head = new LinkNode(data, true)
    const node = this.head
    const lastNode = this.getLast()

    node.isHead = false

    node.pre = head
    head.next = node
    head.pre = lastNode
    lastNode.next = head

    this.head = head
  }
  unshift() {
    const head = this.head?.next
    const lastNode = this.getLast()

    head.isHead = true
    head.pre = lastNode
    lastNode.next = head

    this.head = head
  }
  splice() {}
  find(data) {
    let node = this.head
    while (node?.data !== data) {
      node = node?.next
      if (node?.isHead) {
        console.warn('链表中无该数据!')
        node = null
        break
      }
    }

    return node
  }
  list2Link(list) {
    const nodes = []
    for (const key in Object.keys(list)) {
      console.log(`🚀 ~ LinkList ~ list2Link ~ key:`, key)
      const node = new LinkNode(list[key], key === '0')
      nodes.push(node)
    }
    console.log(`🚀 ~ LinkList ~ list2Link ~ nodes:`, nodes)

    const len = list.length
    const head = nodes[0]
    const tail = nodes[len - 1]
    for (let i = 1; i < len - 1; i++) {
      const pre = nodes[i - 1]
      const node = nodes[i]
      const next = nodes[i + 1]

      pre.next = node
      node.pre = pre
      node.next = next
      next.pre = node
    }

    head.pre = tail
    tail.next = head

    this.head = head
  }
  link2List() {
    let node = this.head
    const list = [node?.data]

    while (node?.next) {
      node = node.next
      if (node?.isHead) break
      list.push(node.data)
    }

    return list
  }

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

      if (node.isHead) break
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

// const node1 = new LinkNode(1, true)
// const node2 = new LinkNode(2)
// const node3 = new LinkNode(3)

// node1.pre = node3
// node1.next = node2
// node2.pre = node1
// node2.next = node3
// node3.pre = node2
// node3.next = node1

// const link = new LinkList(node1)
const link = new LinkList()
console.log(`🚀 ~ link:`, link)

link.list2Link([11, 22, 33])
console.log(`🚀 ~ link:`, link)

const dataList1 = link.link2List()
console.log(`🚀 ~ dataList1:`, dataList1)

link.shift(0)
link.push(44)

const dataList2 = link.link2List()
console.log(`🚀 ~ dataList2:`, dataList2)

link.unshift()
link.pop()

const dataList3 = link.link2List()
console.log(`🚀 ~ dataList3:`, dataList3)

const size = link.getSize()
console.log(`🚀 ~ size:`, size)

const fNode = link.find(2)
console.log(`🚀 ~ fNode:`, fNode)

const nth1 = link.getNth(1)
console.log(`🚀 ~ nth1:`, nth1)
const nth2 = link.getNth(2)
console.log(`🚀 ~ nth2:`, nth2)
const nth3 = link.getNth(3)
console.log(`🚀 ~ nth3:`, nth3)
const nth4 = link.getNth(4)
console.log(`🚀 ~ nth4:`, nth4)

const firstNode = link.getFirst()
console.log(`🚀 ~ firstNode:`, firstNode)

const lastNode = link.getLast()
console.log(`🚀 ~ lastNode:`, lastNode)
