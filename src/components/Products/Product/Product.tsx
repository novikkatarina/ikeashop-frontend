import { KeyboardEvent } from 'react';

import formatPrice from 'utils/formatPrice';
import { IProduct } from 'models';

import { useCart } from 'contexts/cart-context';

import * as S from './style';

interface IProps {
  product: IProduct;
}

const Product = ({ product }: IProps) => {
  const { openCart, addProduct } = useCart();
  const {
    title,
    price,
    linkFirst,
    linkSecond,
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
  console.log(priceWithCurrency);

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
          {/*<small>{currencyFormat}</small>*/}
          <b>{priceWithCurrency.substring(0, formattedPrice.length - 3)}</b>
          <span>{priceWithCurrency.substring(formattedPrice.length - 3)}</span>
        </S.Val>
        {productInstallment}
      </S.Price>
      <S.BuyButton onClick={handleAddProduct} tabIndex={-1}>
        Add to cart
      </S.BuyButton>
    </S.Container>
  );
};

export default Product;
