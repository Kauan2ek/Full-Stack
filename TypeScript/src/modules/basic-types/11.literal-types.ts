// let logTypes: string = 'info';

// let logType: 'info'; // Tipagem literal, define valores literais possíveis para uma variável
// logType = 'infor';

type logType = 'info' | 'warn' | 'error';
export function logger(type: logType, message: string) {
    switch (type) {
        case 'info':
            console.log(`Info: ${message}`);
            break;
        case 'warn':
            console.warn(`Warn: ${message}`);
            break;
        case 'error':
            console.error(`Error: ${message}`);
            break;
    }
}

logger("error", 'Log com alguma informação sobre o que houve!');
