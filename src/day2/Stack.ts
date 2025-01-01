type Node<T> = {
    value: T
    next?: Node<T>
}

export default class Stack<T> {
    public length: number;
    node?: Node<T>

    constructor() {
        this.length = 0
    }

    push(item: T): void {
        const node: Node<T> = { value: item }

        if (this.node) {
            node.next = this.node
        }

        this.node = node
        this.length++
    }

    pop(): T | undefined {
        const node = this.node

        if (!node) {
            return
        }

        this.node = node.next
        this.length--
        return node.value
    }

    peek(): T | undefined {
        return this.node ? this.node.value : undefined
    }
}
