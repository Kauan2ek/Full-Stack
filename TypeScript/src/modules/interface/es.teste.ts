interface Product {
    name: string;
    price(): number;
}

class ConcreteProduct implements Product {
    constructor(
        public name: string,
    ) {}

    price() {
        return Math.floor(Math.random() * 10) + 1
    }
}

abstract class Creator {
    abstract factoryMethod(): Product;

    createAndShow(): void {
        const product = this.factoryMethod;
        console.log(product)
    }
}

class ConcreteCreator extends Creator {
    factoryMethod(): Product {
        return new ConcreteProduct('Carrinho Hotweels');
    }
}


export const bootstrap = ():void => {
    const creator = new ConcreteCreator();
    const product = creator.factoryMethod();
    product.price();
    creator.createAndShow(); 
}