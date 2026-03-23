export const bootstrap = (): void => {
    let valueUnknow: unknown; // tipo é desconhecido
    valueUnknow = [1, 2, 3];
    valueUnknow = { a: 1, b: 2 };
    valueUnknow = 'Curso de Typescript'
    valueUnknow = 2
    let valueAny: any; // pode assumir qualquer tipo

    // valueAny.toFixed();
    if (typeof valueUnknow === 'number') {
        valueUnknow.toFixed(); // Typescript acusa erro, exige um type-guard
    }

    function processDataWithUnknow(value: unknown) {
        if (Array.isArray(value)) {
            value.map((item) => console.log(item));
        }

        if (value instanceof Object) {
            if ('b' in value) {
                console.log(value.b)
            }
        }

        if (typeof value === 'string') {
            console.log(value.toUpperCase());
        }

        if (typeof value === 'number') {
            let raisedPower: number = 1
            for (let i = 0; i < 5; i++) {
                raisedPower = raisedPower * value; 
            }
            console.log(raisedPower)
        }
    }

    processDataWithUnknow(valueUnknow);
};
