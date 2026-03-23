export const bootstrap = (): void => {
    // ? -> optional chaining
    // let title: HTMLElement | undefined;
    const title = document.getElementById('title');
    const subtitle = document.getElementById('subtitle');

    // Atribuição de valor
    if (subtitle) {
        subtitle.style.color = 'blue';
    } 
    
    // leitura segura
    console.log('title: ', title?.innerHTML)
    console.log('subtitle: ', subtitle?.innerHTML)
    console.log('subtitle color: ', subtitle?.style.color);


};

