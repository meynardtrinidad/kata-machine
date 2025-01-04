const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
]

function walk(maze: string[], wall: string, pos: Point, end: Point, seen: boolean[][], path: Point[]): boolean {
    // Off the map
    if (pos.x < 0 || pos.x > maze[0].length ||
        pos.y < 0 || pos.y > maze.length) {
        return false
    }

    // Inside the wall
    if (maze[pos.y][pos.x] == wall) {
        return false
    }

    // At the end
    if (pos.x == end.x && pos.y == end.y) {
        path.push(end)
        return true
    }

    // Seen already
    if (seen[pos.y][pos.x]) {
        return false
    }

    // 3 Recurse step
    // Pre
    seen[pos.y][pos.x] = true
    path.push(pos)

    // Recurse
    for (let i = 0; i < dir.length; i++) {
        const [x, y] = dir[i]
        if (walk(maze, wall, { x: pos.x + x, y: pos.y + y }, end, seen, path)) {
            return true
        }
    }

    // Post
    path.pop()
    return false
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    const seen: boolean[][] = []
    const path: Point[] = []

    for (let i = 0; i < maze.length; i++) {
        seen.push(new Array(maze[0].length).fill(false))
    }

    walk(maze, wall, start, end, seen, path)

    return path
}
