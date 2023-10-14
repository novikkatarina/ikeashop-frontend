import axios from 'axios';
import { IGetProductsResponse } from 'models';

export const getProducts = async () => {
  let response: IGetProductsResponse;

  response = await axios.get('http://195.2.85.240l/Product/GetProducts');
  const products = response.data || [];

  return products;
};
