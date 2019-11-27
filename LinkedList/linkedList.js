function Node(data) {
    this.data = data
    this.next = null
}

function singlyLinkedList() {
    this.length = 0
    this.head = null

    this.add = (val) => {
        const node = new Node(val)
        let currentNode = this.head

        // is head/first node
        if (!currentNode) {
            this.head = node
            this.length += 1
            return node
        }

        // is not head/not first node
        while (currentNode.next) {
            currentNode = currentNode.next
        }

        currentNode.next = node
        this.length += 1
        return node
    }

    this.searchNodeAt = (position) => {
        let currentNode = this.head
        let length = this.length
        let count = 1

        // outside of range
        if (length === 0 || position < 1 || position > length) {
            throw new Error('Node is not in this list')
        }

        while (count < position) {
            currentNode = currentNode.next
            count += 1
        }

        return currentNode
    }

    this.removeNodeAt = (position) => {
        let currentNode = this.head
        let length = this.length
        let count = 1

        let nodeBeforeDeleted = null
        let nodeToDelete = null
        let deletedNode = null

        // outside of range
        if (position < 1 || position > length) {
            throw new Error('Node is not in this list')
        }

        if (position === 1) {
            deletedNode = this.head
            this.head = this.head.next
            this.length -= 1
            return deletedNode
        }

        while (count < position) {
            nodeBeforeDeleted = currentNode
            nodeToDelete = currentNode.next
            currentNode = currentNode.next
            count += 1
        }

        nodeBeforeDeleted.next = nodeToDelete.next
        deletedNode = nodeToDelete
        nodeToDelete = null
        this.length -= 1

        return deletedNode
    }

}

let ll = new singlyLinkedList()

ll.add(1)
ll.add(2)
ll.add(3)
ll.add(4)
ll.add(5)

console.log(ll.searchNodeAt(1))
console.log(ll.searchNodeAt(2))
console.log(ll.searchNodeAt(5))

console.log(ll.removeNodeAt(4))

console.log(ll.searchNodeAt(3))
console.log(ll.searchNodeAt(4))
