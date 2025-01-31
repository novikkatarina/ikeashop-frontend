import { useEffect } from 'react';

import Loader from 'components/Loader';
import Filter from 'components/Filter';
import Products from 'components/Products';
import Cart from 'components/Cart';
import { Title } from './style'
import LanguageSelector from "../LanguageSelector/LanguageSelector";

import { useProducts } from 'contexts/products-context';

import * as S from './style';
import {useTranslation} from "react-i18next";

function App() {
  const { isFetching, products, fetchProducts } = useProducts();
    const { t, i18n } = useTranslation();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);


  return (
    <S.Container>
      {isFetching && <Loader />}
      <div>
        <LanguageSelector />
      </div>
      <S.TwoColumnGrid>
        <S.Side>
          <Filter />
        </S.Side>
        <S.Main>
          <S.Title>Ikea Shop</S.Title>
          <S.MainHeader>
            <p>{products?.length} {t("Product(s)")}</p>
          </S.MainHeader>
          <Products products={products} />
        </S.Main>
      </S.TwoColumnGrid>
      <Cart />
    </S.Container>
  );
}

export default App;
