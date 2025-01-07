export default function in_order_search(head: BinaryNode<number>): number[] {
    const visitedNodes: number[] = []
    const stack: BinaryNode<number>[] = []
    let curr: BinaryNode<number> | null = head

    while (curr != null || stack.length > 0) {
        while (curr != null) {
            stack.push(curr)
            curr = curr.left
        }

        curr = stack.pop() as BinaryNode<number> | null
        if (!curr) {
            continue
        }
        visitedNodes.push(curr.value)
        curr = curr.right
    }

    return visitedNodes
}
