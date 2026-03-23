// TODO CartItem
type CartItem = {
    id: number,
    price: number
}

// TODO ShoppingCart
type ShoppingCart = {
    cartItems: CartItem[]
}

// TODO criar variável do tipo ShoppingCart contendo CartItem
const shoppingCart: ShoppingCart = {
    cartItems: [
        {id: 1001, price: 200},
        {id: 1002, price: 300},
        {id: 1003, price: 500},
    ]
}

// TODO função do tipo void para somar os valores dos itens
export function calculateTotal(shoppingCart: ShoppingCart): void {
    const total = shoppingCart.cartItems.reduce((acc, item) => acc + item.price, 0);
    console.log(`Total do carrinho: ${total.toFixed(2)}`)    
}

calculateTotal(shoppingCart);