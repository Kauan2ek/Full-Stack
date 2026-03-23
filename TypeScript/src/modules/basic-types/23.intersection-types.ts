export const bootstrap = (): void => {
    type Person = {
        name: string;
        age: number;
    };

    type Employee = {
        departament: string;
    };

    type Customer = {
        wishlist: string[];
    };

    type EmployeeDetails = Person & Employee; // Junção dos atributos de Person e Employee (name, age, departament)

    const employee: EmployeeDetails = {
        name: 'Carlos',
        age: 23,
        departament: 'IT',
    };

    type CustomerDetails = Person & Customer;

    const customer: CustomerDetails = {
        name: 'Maria',
        age: 28,
        wishlist: ['Smartphone', 'Laptop', 'Headphones'],
    };
    // console.log(EmployeeDetails);
};
