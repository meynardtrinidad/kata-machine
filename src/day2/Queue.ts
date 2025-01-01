type Node<T> = {
    value: T
    next?: Node<T>
}

export default class Queue<T> {
    public length: number;
    head?: Node<T>
    tail?: Node<T>

    constructor() {
        this.length = 0
    }

    enqueue(item: T): void {
        const node: Node<T> = { value: item }

        if (!this.head) {
            this.head = node
        }

        if (this.tail) {
            this.tail.next = node
        }

        this.tail = node
        this.length++
    }

    deque(): T | undefined {
        let head = this.head
        if (!head) {
            return
        }

        this.head = head.next
        this.length--
        return head.value
    }

    peek(): T | undefined {
        if (!this.head) {
            return
        }

        return this.head.value
    }
}
