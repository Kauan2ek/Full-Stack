export const bootstrap = (): void => {
    const body = document.querySelector('body') as HTMLBodyElement;
    const video = document.querySelector('#promo') as HTMLVideoElement | null;
    // Quando acessamos via ID, o Typescript não consegue saber, em tempo de desenvolvimento, qual será o tipo de elemento. Se não declararmos explicitamente qual o tipo de elemento que estamos acessando, ao utilizar métodos específicos da classe de elementos, o Typescript acusará erro.

    // const video = document.querySelector('#promo')
    // Nesse caso, o typescript declarará o tipo genericamente como Element ou Null, mas não como HTMLVideoElement
    const input = document.querySelector('.inputText') as HTMLInputElement;

    if (input) {
        input.addEventListener('blur', (event: FocusEvent) => {
            alert('teste');
        });
    }

    video?.volume;
    body.style.backgroundColor = 'lightblue';
};
