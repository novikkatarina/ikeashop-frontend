export interface IProduct {
    id: string;
    productNumber: number;
    price: number;
    quantity: number;
    room: number;
    title: string;
    linkFirst: string;
    linkSecond: string;
}

export interface ICartProduct extends IProduct {

}

export interface ICartTotal {
    productQuantity: number;
    installments: number;
    totalPrice: number;
    currencyId: string;
    currencyFormat: string;
}

export interface IGetProductsResponse {
    data: IProduct[];
}

export interface ICustomer {
    phoneNumber: string;
    name: string;
    address: string;
    email: string;
}


export interface ICreateOrderRequestItem {
    productId: string;
    productNumber: number;
    quantity: number;
}

export interface ICreateOrderRequest {
    customer: ICustomer;
    items: ICreateOrderRequestItem[];
}


export interface ICreateOrderResponse {
    orderId: string;
    estimatedDeliveryTime: string;
    price: number;
}

export interface IPaymentRequest{
  orderId: string;
}

