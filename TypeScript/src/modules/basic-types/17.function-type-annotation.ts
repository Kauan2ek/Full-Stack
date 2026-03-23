// TODO CartItem
type CartItem = {
    id: number;
    price: number;
};

type Address = {
    cep: string;
    default: boolean;
};

type Customer = {
    adresses: Address[];
};

// TODO ShoppingCart
type ShoppingCart = {
    cartItems: CartItem[];
};

// TODO criar variável do tipo ShoppingCart contendo CartItem
const shoppingCart: ShoppingCart = {
    cartItems: [
        { id: 1001, price: 200 },
        { id: 1002, price: 300 },
        { id: 1003, price: 500 },
    ],
};

const adresses: Address[] = [
    { cep: '00000-000', default: false },
    { cep: '00000-001', default: true },
    { cep: '00000-002', default: false },
];

const customer: Customer = {
    adresses: adresses,
};

// --
let calculateTotal: (sC: ShoppingCart) => number;

calculateTotal = function () {
    const total = shoppingCart.cartItems.reduce((acc, item) => acc + item.price, 0);

    return parseFloat(total.toFixed(2));
};

type AdressOrUndefined = (c: Customer) => Address | undefined;
const getPrincipalAdress: AdressOrUndefined = () => {
    return customer.adresses.find((address) => address.default);
};
// let getPrincipalAdress: AdressOrUndefined
// getPrincipalAdress = (customer: Customer): Address | undefined => {
//     return customer.adresses.find((address) => address.default);
// }

const total = calculateTotal(shoppingCart);
console.log(`Total do carrinho: ${total.toFixed(2)}`);

const principalAdress = getPrincipalAdress(customer);
console.log(principalAdress);

export { calculateTotal, getPrincipalAdress };
