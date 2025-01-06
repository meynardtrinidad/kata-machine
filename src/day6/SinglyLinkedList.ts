type Node<T> = {
    value: T
    next?: Node<T>
}

// FIX:
// - This implementation is for doubly linked list
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
            node.next = this.head
        }

        this.head = node
        this.length++
    }

    insertAt(item: T, idx: number): void {
        let ctr = 0
        let curr = this.head

        while (curr && ctr < idx) {
            curr = curr.next
            ctr++
        }

        if (!curr) {
            return
        }

        const node: Node<T> = { value: item }
        node.next = curr.next

        curr.next = node

        this.length++
    }

    append(item: T): void {
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

    remove(item: T): T | undefined {
        let ctr = 0
        let curr = this.head
        let prev = curr
        while (curr && ctr < this.length) {
            if (curr.value == item) {
                break
            }

            prev = curr
            curr = curr.next
            ctr++
        }

        if (!curr || !prev) {
            return
        }

        if (ctr == 0) {
            this.head = curr.next
        }

        prev.next = curr.next
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

    removeAt(idx: number): T | undefined {
        let ctr = 0
        let curr = this.head
        let prev = curr

        while (curr && ctr < this.length) {
            if (ctr == idx) {
                break
            }

            prev = curr
            curr = curr.next
            ctr++
        }

        if (!curr || !prev) {
            return
        }

        if (ctr == 0) {
            this.head = curr.next
        }

        prev.next = curr.next
        this.length--
        return curr.value
    }
}
