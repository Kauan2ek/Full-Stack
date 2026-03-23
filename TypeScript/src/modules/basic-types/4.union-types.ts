let total: string | number = 200; // Aceita tanto valores string quanto valores numéricos
total = '450';
let shoppingCart = [200.75, 150.1, '32,30', '44', 'not define'];

// export function totalize(values: Array<string | number | null>) {
export function totalize(values: (number | string)[]) {
    return values
        .map((value) => (typeof value === 'number' ? value : parseFloat(value))) // Converter os valores possíveis para number
        .filter((value) => !isNaN(value)) // Filtrar os valores válidos
        .reduce((acc, curr) => acc + curr, 0); // Totalizar
}

console.log(totalize(shoppingCart));
