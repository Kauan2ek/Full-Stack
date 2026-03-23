export const bootstrap = (): void => {
    class BankAccount {
        protected holder: string;
        protected balance: number;

        constructor(holder: string, balance: number) {
            this.holder = holder;
            this.balance = balance;
        }

        public getHolder(): string {
            return this.holder;
        }
    }

    class CheckingAccount extends BankAccount {
        private overdraftLimit: number; // limite de cheque especial

        constructor(holder: string, balance: number, overdraftLimit: number) {
            super(holder, balance);
            this.overdraftLimit = overdraftLimit;
        }

        public getOverdraftLimit(): number {
            return this.overdraftLimit;
        }
    }

    class SavingsAccounts extends BankAccount {
        private interestRate: number; // taxa de juros

        constructor(holder: string, balance: number, interestRate: number) {
            super(holder, balance);
            this.interestRate = interestRate;
        }

        public getInterestRate(): number {
            return this.interestRate;
        }
    }

    const a = new BankAccount('Kauan', 15200);
    // const b = new CheckingAccount(25000);

    console.log(a instanceof BankAccount); // Verifica se o objeto "a" é uma instância da classe BankAccount
    console.log(a instanceof CheckingAccount);


    // Lista de contas bancárias
    const accountList: BankAccount[] = [
        new CheckingAccount('Kauan', 1400, 334),
        new SavingsAccounts('Alice', 200, 0.05),
        new CheckingAccount('Lucas', 12000, 3004),
    ]

    function processAccounts(accounts: BankAccount[]): void {
        accounts.forEach(account => {
            console.log(account);
            if (account instanceof CheckingAccount) {
                console.log('Processando a conta corrente: ', account.getHolder());
            } else if (account instanceof SavingsAccounts) {
                console.log('Processando da conta poupança: ', account.getInterestRate());
            }

            console.log('------------------------------')
        });
    }

    processAccounts(accountList);
};
