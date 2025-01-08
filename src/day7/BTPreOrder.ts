function recursive_pre_order(node: BinaryNode<number> | null, path: number[]) {
    if (!node) {
        return
    }

    path.push(node.value)
    recursive_pre_order(node.left, path)
    recursive_pre_order(node.right, path)
}

function iterative_pre_order(node: BinaryNode<number>, path: number[]) {
    let curr: BinaryNode<number> | null = node
    const stack: BinaryNode<number>[] = []

    while (curr != null || stack.length > 0) {
        while (curr != null) {
            stack.push(curr)
            path.push(curr.value)
            curr = curr.left
        }

        curr = stack.pop() as BinaryNode<number> | null
        if (!curr) {
            continue
        }
        curr = curr.right
    }

    return
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
    const visitedNodes: number[] = []

    // iterative_pre_order(head, visitedNodes)
    recursive_pre_order(head, visitedNodes)

    return visitedNodes
}
