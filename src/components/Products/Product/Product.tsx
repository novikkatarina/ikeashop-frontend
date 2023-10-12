import {KeyboardEvent, useState} from 'react';

import formatPrice from 'utils/formatPrice';
import { IProduct } from 'models';

import { useCart } from 'contexts/cart-context';

import * as S from './style';
import React from 'react';
import ReactDOM from 'react-dom';
import '../../../i18n'

import {useTranslation} from "react-i18next";
import {theme} from "../../../commons/style/theme";

interface IProps {
  product: IProduct;
}

const Product = ({ product }: IProps) => {
  const { t, i18n } = useTranslation();
  const [details, setDetails] = useState(false)
  const [isBuyButtonClicked, setIsBuyButtonClicked] = useState(false);
  const [isDetailsButtonClicked, setIsDetailsButtonClicked] = useState(false);
  const btnBgClassName = details ? theme : 'bg-blue-400'
  const btnClasses = ['py-2 px-4 border', btnBgClassName]

  const { openCart, addProduct } = useCart();
  const {
    title,
    price,
    linkFirst,
    linkSecond,
      description,
  } = product;
const currencyId = "RUB";
  const formattedPrice = formatPrice(price, currencyId);
  let productInstallment;

  const handleAddProduct = () => {
    addProduct({ ...product, quantity: 1 });
    openCart();
  };

  const handleAddProductWhenEnter = (event: KeyboardEvent) => {
    if (event.key === 'Enter' || event.code === 'Space') {
      addProduct({ ...product, quantity: 1 });
      openCart();
    }
  };
  const priceWithCurrency = `${formattedPrice} RUB`; // Добавляем "RUB" в конец строки

  return (
    <S.Container onKeyUp={handleAddProductWhenEnter} tabIndex={1}>
      {/*{isFreeShipping && <S.Stopper>Free shipping</S.Stopper>}*/}
      <S.Image
        imageUrl={linkFirst}
        hoverImgUrl={linkSecond}
        alt={title} />
      <S.Title>{title}</S.Title>
      <S.Price>
        <S.Val>
          <b>{priceWithCurrency.substring(0, formattedPrice.length - 3)}</b>
          <span>{priceWithCurrency.substring(formattedPrice.length - 3)}</span>
        </S.Val>
      </S.Price>
      {/*<S.button
          className={btnClasses.join(' ')}
          onClick={() => setDetails(prev => !prev)}
      >
        { details ? 'Hide Details' : 'Show Details' }
      </S.button>
      {details && <div>
        <p>{ product.description }</p>
      </div>}
      <S.BuyButton onClick={handleAddProduct} tabIndex={-1}>
        {t('AddToCart')}
      </S.BuyButton>*/}


      <S.button
          className={btnClasses.join(' ')}
          onClick={() => {
            setDetails(prev => !prev);
            setIsDetailsButtonClicked(!isDetailsButtonClicked);
          }}
          clicked={isDetailsButtonClicked}
      >
        {details ? 'Hide Details' : 'Show Details'}
      </S.button>
        {details && <div>
            <p>{ product.description }</p>
        </div>}
      <S.BuyButton
          onClick={() => {
            handleAddProduct();
            setIsBuyButtonClicked(!isBuyButtonClicked);
          }}
          tabIndex={-1}
          clicked={isBuyButtonClicked}
      >
        {t('AddToCart')}
      </S.BuyButton>


    </S.Container>
  );
};

export default Product;
