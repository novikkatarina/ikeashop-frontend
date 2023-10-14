import axios from 'axios';
import { IGetProductsResponse } from 'models';

export const getProducts = async () => {
  let response: IGetProductsResponse;

  response = await axios.get('http://195.2.85.240/Product/GetProducts');
  const products = response.data || [];

  return products;
};
