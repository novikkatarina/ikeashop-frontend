import formatPrice from 'utils/formatPrice';
import CartProducts from './CartProducts';
import { useCart } from 'contexts/cart-context';

import * as S from './style';
import {useState} from "react";
import CheckoutModal from "./CheckoutModal";
import {useTranslation} from "react-i18next";

const Cart = () => {
  const { t, i18n } = useTranslation();
  const { products, total, isOpen, openCart, closeCart } = useCart();

  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

  const handleCheckout = () => {
    if (total.productQuantity) {
      setIsCheckoutModalOpen(true);
    } else {
      alert(t('AddSome'));
    }
  };

  const closeModal = () => setIsCheckoutModalOpen(false);

  const handleToggleCart = (isOpen: boolean) => () =>
    isOpen ? closeCart() : openCart();

  return (
    <S.Container isOpen={isOpen}>
      <S.CartButton onClick={handleToggleCart(isOpen)}>
        {isOpen ? (
          <span>X</span>
        ) : (
          <S.CartIcon>
            <S.CartQuantity title={t("ProductsIn")}>
              {total.productQuantity}
            </S.CartQuantity>
          </S.CartIcon>
        )}
      </S.CartButton>

      {isOpen && (
        <S.CartContent>
          <S.CartContentHeader>
            <S.CartIcon large>
              <S.CartQuantity>{total.productQuantity}</S.CartQuantity>
            </S.CartIcon>
            <S.HeaderTitle>{t('Cart')}</S.HeaderTitle>
          </S.CartContentHeader>

          <CartProducts products={products} />

          <S.CartFooter>
            <S.Sub>{t("Subtotal")}</S.Sub>
            <S.SubPrice>
              <S.SubPriceValue>{`${total.currencyFormat} ${formatPrice(
                total.totalPrice,
                total.currencyId
              )}`}</S.SubPriceValue>
              <S.SubPriceInstallment>
                {total.installments ? (
                  <span>
                    {`OR UP TO ${total.installments} x ${
                      total.currencyFormat
                    } ${formatPrice(
                      total.totalPrice / total.installments,
                      total.currencyId
                    )}`}
                  </span>
                ) : null}
              </S.SubPriceInstallment>
            </S.SubPrice>
            <S.CheckoutButton onClick={handleCheckout} autoFocus>
              {t("Checkout")}
            </S.CheckoutButton>
          </S.CartFooter>
        </S.CartContent>
      )}
      {isCheckoutModalOpen && <CheckoutModal closeModal={closeModal} products={products} />}
    </S.Container>
  );
};

export default Cart;
