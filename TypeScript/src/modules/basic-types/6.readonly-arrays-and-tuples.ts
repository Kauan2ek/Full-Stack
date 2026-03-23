let numbers: number[] = [10, 20, 30, 40, 50];
// let numberReadOnly: readonly number[] = [60, 70, 80, 90, 100]
let numberReadOnly: ReadonlyArray<number> = [60, 70, 80, 90, 100];
let tupleReadOnly: readonly [number, number, number, number, number] = [10, 20, 30, 40, 50]
numbers[0] = 30;

export default () => {};
