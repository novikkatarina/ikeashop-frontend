import { ICartProduct } from 'models';
import CartProduct from './CartProduct';

import * as S from './style';
import {useTranslation} from "react-i18next";

interface IProps {
  products: ICartProduct[];
}

const CartProducts = ({ products }: IProps) => {
  const { t, i18n } = useTranslation();
  return (
    <S.Container>
      {products?.length ? (
        products.map((p) => <CartProduct product={p} key={p.id} />)
      ) : (
        <S.CartProductsEmpty>
          {t('AddSome')} <br />
        </S.CartProductsEmpty>
      )}
    </S.Container>
  );
};

export default CartProducts;
