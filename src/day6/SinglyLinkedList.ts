type Node<T> = {
    value: T
    next?: Node<T>
    prev?: Node<T>
}

export default class SinglyLinkedList<T> {
    public length: number;
    head?: Node<T>
    tail?: Node<T>

    constructor() {
        this.length = 0
    }

    prepend(item: T): void {
        const node: Node<T> = { value: item }
        if (!this.tail) {
            this.tail = node
        }

        if (this.head) {
            this.head.prev = node
            node.next = this.head
        }

        this.head = node
        this.length++
    }

    insertAt(item: T, idx: number): void {
        let ctr = 0
        let curr = this.head
        while (curr && ctr != idx) {
            curr = curr?.next
            ctr++
        }

        if (!curr) {
            return
        }

        const node: Node<T> = { value: item }
        node.next = curr.next
        node.prev = curr

        curr.next = node

        this.length++
    }

    append(item: T): void {
        const node: Node<T> = { value: item }
        if (!this.head) {
            this.head = node
        }

        if (this.tail) {
            node.prev = this.tail
            this.tail.next = node
        }

        this.tail = node
        this.length++
    }

    remove(item: T): T | undefined {
        let ctr = 0
        let curr = this.head
        while (curr && ctr < this.length) {
            if (curr.value == item) {
                break
            }

            curr = curr?.next
            ctr++
        }

        if (!curr) {
            return
        }

        let prev = curr.prev
        let next = curr.next

        if (prev) {
            prev.next = next
        }

        if (next) {
            next.prev = prev
        }

        if (ctr == 0) {
            this.head = next
        }

        if (ctr == this.length - 1) {
            this.tail = prev
        }

        this.length--
        return curr.value
    }

    get(idx: number): T | undefined {
        let ctr = 0
        let curr = this.head
        while (curr && ctr < this.length) {
            if (idx == ctr) {
                return curr.value
            }

            curr = curr.next
            ctr++
        }
        return
    }

    // FIX:
    // - Does not take into account the removal of head / tail
    removeAt(idx: number): T | undefined {
        let ctr = 0
        let curr = this.head

        while (curr && ctr < this.length) {
            if (ctr == idx) {
                break
            }

            curr = curr.next
            ctr++
        }

        if (!curr) {
            return
        }

        let prev = curr.prev
        let next = curr.next

        if (next) {
            next.prev = prev
        }

        if (prev) {
            prev.next = next
        }

        if (idx == 0) {
            this.head = next
        }

        if (idx == this.length - 1) {
            this.tail = prev
        }

        this.length--
        return curr.value
    }
}
