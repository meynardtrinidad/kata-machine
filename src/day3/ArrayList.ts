export default class ArrayList<T> {
    public length: number;
    public capacity: number;
    private array: Array<T>;

    constructor(capacity: number) {
        this.length = 0
        this.capacity = capacity
        this.array = new Array(capacity)
    }

    prepend(item: T): void {
        if (this.length + 1 > this.capacity) {
            this.capacity += this.capacity
            this.array.length = this.capacity
        }

        for (let i = this.length; i >= 0; i--) {
            this.array[i] = this.array[i - 1]
        }

        this.array[0] = item
        this.length++
    }

    insertAt(item: T, idx: number): void {
        if (this.length + 1 > this.capacity) {
            this.capacity += this.capacity
            this.array.length = this.capacity
        }

        for (let i = this.length; i > idx; i--) {
            this.array[i + 1] = this.array[i]
        }

        this.array[idx] = item
        this.length++
    }

    append(item: T): void {
        if (this.length + 1 > this.capacity) {
            this.capacity += this.capacity
            this.array.length = this.capacity
        }

        this.array[this.length] = item
        this.length++
    }

    remove(item: T): T | undefined {
        for (let i = 0; i < this.length; i++) {
            if (this.array[i] == item) {
                const value = this.array[i]

                for (let j = i; j < this.length; j++) {
                    this.array[j] = this.array[j + 1]
                }

                this.length--
                return value
            }
        }

        return undefined
    }

    get(idx: number): T | undefined {
        return this.array[idx]
    }

    removeAt(idx: number): T | undefined {
        if (idx > this.length) {
            return undefined
        }

        const value = this.array[idx]

        for (let i = idx; i < this.length; i++) {
            this.array[i] = this.array[i + 1]
        }

        this.length--
        return value
    }
}
