export default function two_crystal_balls(breaks: boolean[]): number {
    const step = Math.sqrt(breaks.length)
    for (let i = 0; i < breaks.length; i += step) {
        if (breaks[i]) {
            for (let j = i - step; j < i; j++) {
                if (breaks[j]) {
                    return j
                }
            }
        }
    }

    return -1
}
