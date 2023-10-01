export interface IProduct {
    id: number;
    productNumber: number;
    price: number;
    quantity: number;
    room: number;
    title: string;
    linkFirst: string;
    linkSecond: string;
}

export interface ICartProduct extends IProduct {
  quantity: number;
}

export interface ICartTotal {
  productQuantity: number;
  installments: number;
  totalPrice: number;
  currencyId: string;
  currencyFormat: string;
}

export interface IGetProductsResponse {
  data:  IProduct[];
}
