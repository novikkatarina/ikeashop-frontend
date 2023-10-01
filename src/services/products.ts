import axios from 'axios';
import { IGetProductsResponse } from 'models';

export const getProducts = async () => {
  let response: IGetProductsResponse;
  // нужно сделать запрос на бэкенд
  // отобразить его в консоли
  // var
  // let
  // const
  // const testResponse = await axios.get('http://localhost:5246/Product/GetItemsByRoom/0');
  // console.log(testResponse);

  response = await axios.get('http://localhost:5246/Product/GetItemsByRoom/0');
  const products = response.data || [];

  return products;
};
