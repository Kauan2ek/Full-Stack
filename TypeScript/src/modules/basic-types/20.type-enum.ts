// Lista não ordenada, contendo um conjunto de valores
export const bootstrap = (): void => {
    enum OrderStatus {
        PENDING, // default = 0
        DELIVERED = 5352,
        CANCELED, // 5353
        OTHER = 'something here', // Aqui o atributo não cruza com o valor
        /*
        1: PEDING
        5352: DELIVERED
        5353: CANCELED
        */
    }
    enum OrderStatus { // type
        WAITINGFORPAYMENT = 500,
        SENT = 'Enviado',
    }

    type Produto = {
        id: number;
        name: string;
        price: number;
    };

    type Pedido = {
        id: number;
        produtos: Produto[];
        status: OrderStatus;
    };

    const pedido: Pedido = {
        id: 0,
        produtos: [
            { id: 1, name: 'Teclado', price: 80 },
            { id: 2, name: 'Mouse', price: 32 },
            { id: 3, name: 'Monitor', price: 800 },
        ],
        status: OrderStatus.DELIVERED,
    };

    let message: string;
    function changeOrderStatus(newStatus: OrderStatus): void {
        switch (newStatus) {
            case OrderStatus.SENT:
                // ... PARA ENVIAR UM E-MAIL PARA O CLIENTE
                message = 'pedido enviado';
                break;
            case OrderStatus.DELIVERED:
                message = 'pedido entregue';
                break;
            case OrderStatus.CANCELED:
                message = 'pedido cancelado';
                break;
        }
        pedido.status = newStatus;
        console.log(message, newStatus);
    }

    changeOrderStatus(OrderStatus.CANCELED);
    changeOrderStatus(OrderStatus.DELIVERED);
    console.log(pedido);
    

    // console.log(OrderStatus);
    // console.log(OrderStatus.CANCELED);
    // console.log(OrderStatus[1]);
    // console.log(OrderStatus[0]);
};
