export function findDeletedNumber(sequence:number[],modifiedSequence:number[]) {
    if (sequence.length < 1) {
        return 0;
    }
    let deletedNumber = 0;

    sequence.forEach((number) => {
        if (!modifiedSequence.includes(number)) {
            deletedNumber = number;
        }
    });
    return deletedNumber;

}