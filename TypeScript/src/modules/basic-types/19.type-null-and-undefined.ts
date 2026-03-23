export const bootstrap = (): void => {
    // null
    let title = null; // por padrão tipo any
    console.log('Title: ', title);
    console.log('Title (IF)', title ? 'verdadeiro' : 'falso')
    console.log('Tipo null: ', typeof title); // Retorna object - bug histórico, mantido apenas por compatibilidade
    
    console.log('\n-----------------\n\n')
    
    // undefined
    let subtitle = undefined; // por padrão tipo any
    console.log('Title: ', subtitle);
    console.log('Subtitle (IF)', subtitle ? 'verdadeiro' : 'falso')
    console.log('Subtitle undefined: ', typeof title); // Retorna object - bug histórico, mantido apenas por compatibilidade

    type Page = {
        title: string,
        subtitle?: string,
        handlerPage?: () => void
    }

    const page: Page = {
        title: 'Curso de Typescript',
        handlerPage: () => { // Assim o Ts não entende que handlerpage não pode ser nulo
        console.log('Executou a função');
        }
    }

    page.handlerPage = () => { // Assim o Ts entende que handlerpage não pode ser nulo
        console.log('Executou a função');
    }

    console.log('Page subtitle: ', page.subtitle)
    console.log('Page handlerPage: ', page.handlerPage)
    console.log('Page handlerPage: ', page.handlerPage()) // Retorna erro, pois
};
