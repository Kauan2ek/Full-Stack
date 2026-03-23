export const bootstrap = (): void => {
    // ! -> Non-null, considera que o elemento não poder ser nulo

    const title = document.getElementById('title')!; // estoura erro em runtime
    const subtitle = document.getElementById('subtitle')!;

    subtitle.style.color = 'red';

    const getProducts = (): string[] | null => {
        return ['Smartphone', 'Headset']
        // return null; // Estoura erro em runtime
    }

    // define que a atribuição não será de um valor null ou undefined
    const products = getProducts()!;
    products.map((item) => console.log(item))
};
