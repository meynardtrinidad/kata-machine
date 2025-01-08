function recursive_in_order(node: BinaryNode<number> | null, path: number[]) {
    if (!node) {
        return
    }

    recursive_in_order(node.left, path)
    path.push(node.value)
    recursive_in_order(node.right, path)
}

function iterative_in_order(node: BinaryNode<number>, path: number[]) {
    const stack: BinaryNode<number>[] = []
    let curr: BinaryNode<number> | null = node

    while (curr != null || stack.length > 0) {
        while (curr != null) {
            stack.push(curr)
            curr = curr.left
        }

        curr = stack.pop() as BinaryNode<number> | null
        if (!curr) {
            continue
        }
        path.push(curr.value)
        curr = curr.right
    }
}

export default function in_order_search(head: BinaryNode<number>): number[] {
    const visitedNodes: number[] = []
    // iterative_in_order(head, visitedNodes)
    recursive_in_order(head, visitedNodes)
    return visitedNodes
}
