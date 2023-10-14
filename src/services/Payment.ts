
import axios from 'axios';
import {IPaymentRequest} from 'models';

export const createPay = async (request: IPaymentRequest) => {

  const result = await axios.post('http://195.2.85.240:8080/Order/pay', request);
  return result.data;
};
