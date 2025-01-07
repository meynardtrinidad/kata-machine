export default function pre_order_search(head: BinaryNode<number>): number[] {
    const visitedNodes: number[] = []

    let curr: BinaryNode<number> | null = head
    const stack: BinaryNode<number>[] = []

    while (curr != null || stack.length > 0) {
        while (curr != null) {
            stack.push(curr)
            visitedNodes.push(curr.value)
            curr = curr.left
        }

        curr = stack.pop() as BinaryNode<number> | null
        if (!curr) {
            continue
        }
        curr = curr.right
    }

    return visitedNodes
}
