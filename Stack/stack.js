function Node(data) {
    this.data = data
    this.next = null
}

function Stack() {
    this.top = null

    this.push = (data) => {
        const node = new Node(data)

        if (this.top === null) {
            this.top = node
            return node
        }

        node.next = this.top
        this.top = node
        return this.top
    }

    this.pop = () => {
        const tempNode = this.top
        this.top = this.top.next
        return tempNode
    }

    this.peek = () => {
        return this.top
    }
}

const stackImplementation = new Stack()
console.log(stackImplementation.peek())

stackImplementation.push(1)
console.log(stackImplementation.peek())
stackImplementation.push(2)
console.log(stackImplementation.peek())
stackImplementation.push(3)
console.log(stackImplementation.peek())
stackImplementation.push(4)
console.log(stackImplementation.peek())

stackImplementation.pop()
console.log(stackImplementation.peek())
stackImplementation.pop()
console.log(stackImplementation.peek())
stackImplementation.pop()
console.log(stackImplementation.peek())
stackImplementation.pop()
console.log(stackImplementation.peek())
