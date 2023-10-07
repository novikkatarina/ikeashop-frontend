import axios from 'axios';
import {ICreateOrderRequest, ICreateOrderResponse} from 'models';

export const createOrder = async (request: ICreateOrderRequest) => {

    const result = await axios.post('http://localhost:5078/Order/CreateOrder', request);
    return result.data;
};
