export function handleFileUpload(file: any) {
    console.log(`Nome: ${file.name}`);
    console.log(`Tamanho ${file.zise}`)
}

const file: {name: string, size: number} = {
    name: 'lista_de_funcionario.txt',
    size: 83249
}
handleFileUpload({ name: 'lista_de_funcionario.txt' });
handleFileUpload('Lucas');
