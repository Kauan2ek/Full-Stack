export const bootstrap = (): void => {
    const zipCodeMark = (value: string | number): string => {
        // type guard
        if (typeof value === 'number') {
            value = value.toString();
        }

        value = value.replace(/\D/g, '');
        value = value.replace(/(\d{5})(\d)/, '$1-$2');

        return value;
    };

    const zipCode = zipCodeMark('10000000');
    console.log(zipCode);

    const zipCode2 = zipCodeMark(10000000)
    console.log(zipCode2)
};
