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
type ApplyDiscountFn = (total: number, discount: number) => number;
const applyDiscount: ApplyDiscountFn = (total: number, discount: number) => {
    return total - total * discount;
};

type calculateTotalFn = (sC: ShoppingCart, callback: ApplyDiscountFn) => number;
const calculateTotal: calculateTotalFn = function (shoppingCart: ShoppingCart, applyDiscount: ApplyDiscountFn) {
    const total = shoppingCart.cartItems.reduce((acc, item) => acc + item.price, 0);

    return applyDiscount(total, 0.10);
};

type AdressOrUndefined = (c: Customer) => Address | undefined;
const getPrincipalAdress: AdressOrUndefined = (customer: Customer) => {
    return customer.adresses.find((address) => address.default);
};
// let getPrincipalAdress: AdressOrUndefined
// getPrincipalAdress = (customer: Customer): Address | undefined => {
//     return customer.adresses.find((address) => address.default);
// }

const total = calculateTotal(shoppingCart, applyDiscount);
console.log(`Total do carrinho: R$${total.toFixed(2)}`);

const principalAdress = getPrincipalAdress(customer);
console.log(principalAdress);

export { calculateTotal, getPrincipalAdress };
