export const bootstrap = (): void => {
    // Tamanho bigint é volátil, pode variar de acordo com a necessidade do uso de memória e do tamanho do número utilizado
    // number - até 64 bits
    console.log('Int - Max Safe: ', Number.MAX_SAFE_INTEGER);
    console.log('Int - Min Safe: ', Number.MIN_SAFE_INTEGER);
    console.log('BigInt - Max Safe: ');

    let bigIntNumber: bigint = 91392459913929191392459913929139245451913991392452913929139245454539291392454591392459139139245924591392453924545191399139245291392913924545453929139245459139245913913924592459139245n;
    console.log('Atribuição com o sufixo n: ', bigIntNumber.toString());

    let bigIntNumber2: bigint = BigInt(1354678);
    bigIntNumber2 = BigInt('1354678');
    console.log('Atribuição com o construtor BigInt: ', bigIntNumber);
};
