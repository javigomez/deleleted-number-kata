export function findDeletedNumber(sequence:number[],modifiedSequence:number[]) {
    if (sequence.length < 1) {
        return 0;
    }
    if (modifiedSequence.includes(sequence[0])) {
        return 0
    }
    return null;
}