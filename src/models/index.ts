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

export interface ICustomer{
    Id: number;
    PhoneNumber: string;
    Name: string;
    Address: string;
    Email: string;
}

export interface IOrder{
    Id: number;
    OrderDate: number;
    EstimatedDeliveryDate: number;
    Status: string;
    CustomerId: number;
    Customer: ICustomer;
    Items: IProduct;
    TotalPrice: number;

}
export interface ICreateOrderResponse{
    data: IOrder;
}
