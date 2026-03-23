export const bootstrap = (): void => {
    function throwError(message: string): never {
        throw new Error(message);
    }

    // throwError('Aplicação interrompida. Erro interno!');
    console.log('Continuação...');
    console.log('Continuação...');
    console.log('Continuação...');
    console.log('Continuação...');
    console.log('Continuação...');
    // Fim do fluxo
    
    function infinityLoop(): never {
        let total: number = 0;
        while (true) {
            const inputText = prompt('Digite um valor numérico.')
            if (inputText) {
                const inputNumber = parseFloat(inputText);
                if (!isNaN(inputNumber)) {
                    total += inputNumber;
                    console.log(total)
                }
            }
        }
    }
    
    // infinityLoop();
    console.log('Continuação...');
    console.log('Continuação...');
    console.log('Continuação...');
    console.log('Continuação...');
    console.log('Continuação...');
};
