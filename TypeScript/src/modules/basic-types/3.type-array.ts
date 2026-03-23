// let films = ['Duna: Parte 2', 'Divertidamente 2'];
// Arrays homogêneos (string)
// let films: string[] = ['Duna: Parte 2', 'Divertidamente 2'];
// let numbers: number[] = [1, 2, 3, 4, 5];

let films: Array<string> = ['Duna: Parte 2', 'Divertidamente 2'];
let numbers: Array<number> = [1, 2, 3, 4, 5];
let obj: object[] = [{}, {}, {}]

export function toUpperCaseStrings(arr: string[]) {
  return arr.map((value) => value.toUpperCase());
}


console.log(toUpperCaseStrings(films));
