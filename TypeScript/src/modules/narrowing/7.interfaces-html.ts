export const bootstrap = (): void => {
    const input = document.querySelector('.inputText') as HTMLInputElement;
    const video = document.querySelector('#promo') as HTMLVideoElement;

    // EventTarget <- Node <- Element <- HTMLElement <- HTMLInputElement, HTMLVideoElement, HTMLDivElement, HTMLListElement ...

    input.addEventListener('click', (event: Event) => {
        console.log('input clicado');
    }); // EventTarget

    console.log('Filho de ', input.parentNode); // Node
    console.log('Element: ', input.id, input.className, input.tagName); // Element
    console.log('Arrrastável: ', input.draggable); // HTMLElement
    console.log('Input: ', input.value); // HTMLInputElement
    video.volume = 0.3
    console.log('Video: ', video.volume); // HTMLVideoElement

    const listElements: Element[] = [
        input,
        video
    ]
    console.log(listElements)
};
