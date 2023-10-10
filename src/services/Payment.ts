
import axios from 'axios';
import {IPaymentRequest} from 'models';

export const createPay = async (request: IPaymentRequest) => {

  const result = await axios.post('http://localhost:5078/Order/pay', request);
  return result.data;
};
