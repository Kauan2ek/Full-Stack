let programmer: { name: string, age: number, skills: string[] } = {
// let programmer = {
    name: 'Jorge',
    age: 35,
    skills: ['Javascript', 'Typescript']
};

programmer.name = 'João';

export function showProgrammer(programmer: { name?: string; age: number, skills?: string[] }) { // ? torna o atributo opcional
    console.log(programmer);
}

showProgrammer(programmer);
showProgrammer({name: 'Kauan', age: 18});