function recursive_post_order(node: BinaryNode<number> | null, path: number[]) {
    if (!node) {
        return
    }

    recursive_post_order(node.left, path)
    recursive_post_order(node.right, path)
    path.push(node.value)
}

function iterative_post_order(node: BinaryNode<number>, path: number[]) {
    const stack: BinaryNode<number>[] = []
    let curr: BinaryNode<number> | null = node
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
            path.push(curr.value)
            prev = curr
        } else {
            stack.push(curr)
            curr = curr.right
        }
    }

}
export default function post_order_search(head: BinaryNode<number>): number[] {
    const visitedNodes: number[] = []
    // iterative_post_order(head, visitedNodes)
    recursive_post_order(head, visitedNodes)
    return visitedNodes
}
