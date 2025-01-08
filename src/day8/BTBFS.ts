function iterative_bfs(head: BinaryNode<number>, needle: number): boolean {
    const q: BinaryNode<number>[] = []
    let curr: BinaryNode<number> | null = head
    q.push(curr)

    while (curr != null || q.length > 0) {
        if (curr.value == needle) return true

        if (curr.left) {
            q.push(curr.left)
        }

        if (curr.right) {
            q.push(curr.right)
        }

        curr = q.shift() as BinaryNode<number>
    }

    return false
}

export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    let found = false
    found = iterative_bfs(head, needle)
    return found
}
