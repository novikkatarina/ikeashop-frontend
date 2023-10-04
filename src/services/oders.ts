import axios from 'axios';
import { ICreateOrderResponse } from 'models';

export const createOrder = async () => {
    let response: ICreateOrderResponse;

    response = await axios.post('http://localhost:5078/Order/CreateOrder');
    const orders = response.data || [];

    return orders;
};
