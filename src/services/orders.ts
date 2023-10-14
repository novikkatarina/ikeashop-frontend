import axios from 'axios';
import {ICreateOrderRequest, ICreateOrderResponse} from 'models';

export const createOrder = async (request: ICreateOrderRequest) => {

    const result = await axios.post('http://195.2.85.240/Order/CreateOrder', request);
    return result.data;
};
