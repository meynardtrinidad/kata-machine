export default function post_order_search(head: BinaryNode<number>): number[] {
    const visitedNodes: number[] = []
    const stack: BinaryNode<number>[] = []
    let curr: BinaryNode<number> | null = head
    let prev: BinaryNode<number> | null = null

    while (curr != null || stack.length > 0) {
        while (curr != null && curr != prev) {
            stack.push(curr)
            curr = curr.left
        }

        curr = stack.pop() as BinaryNode<number> | null
        if (!curr) {
            continue
        }

        if (!curr.right || curr.right == prev) {
            visitedNodes.push(curr.value)
            prev = curr
        } else {
            stack.push(curr)
            curr = curr.right
        }
    }

    return visitedNodes
}
