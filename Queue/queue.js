function Node(data) {
    this.data = data
    this.next = null
}

function Queue() {
    this.head = null
    this.size = 0

    this.enqueue = (val) => {
        const node = new Node(val)    
        let currentNode = this.head

        if (!this.head) {
            this.head = node
            this.size += 1
            return node
        }

        while (currentNode.next) {
            currentNode = currentNode.next
        }

        currentNode.next = node
        this.size += 1
        return node
    }

    this.dequeue = () => {
        const head = this.head
        const next = head.next
        this.head = next
        this.size -= 1
        return head
    }

    // peek - return 1st element (next to be processed) without changing/removing it from the queue
    this.peek = () => {
        return this.head
    }
}

const q = new Queue()
console.log(q)
q.enqueue(1)
q.enqueue(2)
console.log(q.peek())
q.enqueue(3)
console.log(q)
q.dequeue()
console.log(q)
console.log(q.peek())
