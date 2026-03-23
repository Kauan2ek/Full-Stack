type File = {
    readonly name: string;
    size: number;
};

const file: File = {
    // Quando utiliza-se o const em um objeto, não é possível alterar o endereço de memória do objeto, ou seja, o modelo é inalterável, no entanto, é possível alterar os valores de seus atributos, desde que, sejam do mesmo tipo declarado
    name: 'lista_de_funcionario.txt', // Este é inalterado, mas por conta do readonly!
    size: 83249,
};

export function handleFileUpload(file: File) {
    console.log(`Nome: ${file.name}`);
    console.log(`Tamanho ${file.size}`);
}

handleFileUpload(file);
