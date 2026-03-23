let filmArray: (string | number | boolean)[] = [1, 'Guerra Civil', true];
let filmTuple: [number, string, boolean] = [
    // A ordem da declaração tem que ser a mesma dos valores
    2,
    'Um Lugar Silencioso: Dia Um',
    false,
];
let filmTupleOpcionalPosition: [number, string, boolean?, number?] = [
    // ?: valor opcional
    2,
    'Um Lugar Silencioso: Dia Um',
]; // A ordem da declaração tem que ser a mesma dos valores

filmTuple = [3, 'Um filme', true];

const [idArr, titleArr, availableArr] = filmArray;
const [id, title, available] = filmTuple; // Sabe definir o tipo de cada valor

console.log(id);
