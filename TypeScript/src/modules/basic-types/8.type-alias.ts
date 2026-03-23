type Salary = number | string;
type Programmer = {
    // Cria um novo tipo. "type apelido"
    name?: string;
    age: number;
    skills?: string[];
    contact?: { email: string; phone: string };
    salary?: Salary;
};

export function showProgrammer(programmer: Programmer) {
    // ? torna o atributo opcional
    console.log(programmer);
}

showProgrammer({
    name: 'Kauan',
    age: 18,
    skills: ['PHP'],
    contact: { phone: '17 99123-1294', email: 'kauan@gmail.com' },
    salary: '1200'
});
