export const bootstrap = (): void => {
    // in -> verifica se propriedade existe em objeto e ou se índice existe em array
    type Item = {
        id: string; // uuid
        [key: string]: string | null; // index signature
    };

    const response: Item[] = [
        { id: '12k41kksa', movie: 'Interestellar' },
        { id: '123915gda', song: 'Cinderela Man' },
        { id: 'ladg31g12', song: 'Cinderela Man' },
    ];

    function showItems(items: Item[]): void {
        const body = document.querySelector('body');

        if (body instanceof HTMLBodyElement) {
            items.map((item) => {
                const itemElement = document.createElement('div');

                if ('song' in item) {
                    itemElement.textContent = item.song;
                    itemElement.style.background = 'seagreen';
                } else if ('movie' in item) {
                    itemElement.textContent = item.movie;
                    itemElement.style.background = 'cadeteblue';
                }

                body.appendChild(itemElement);
            });
        }
    }

    showItems(response);
};
