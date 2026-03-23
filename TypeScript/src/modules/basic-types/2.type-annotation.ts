// É quando dizemos explícitamente o tipo da variável
// Sempre que possível, é melhor optar pelo type-inference
let product: string = 'Micro-ondes';
let price = 647.52;

// Exemplo de type-annotation
export function display(product: string, price: number) {
  console.log(product.toUpperCase(), price.toFixed());
}

display(product, price);
