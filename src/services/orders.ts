import axios from 'axios';
import {ICreateOrderRequest, ICreateOrderResponse} from 'models';

export const createOrder = async (request: ICreateOrderRequest) => {
    let response: ICreateOrderResponse;

    response = await axios.post('http://localhost:5078/Order/CreateOrder', request);
    const orders = response.data || [];

    return orders;
};
