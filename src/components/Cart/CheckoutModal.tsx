// CheckoutModal.tsx
import React, { FC, FormEvent } from 'react';
import * as S from './style';
import {IProduct} from "../../models"; // Adjust the import path

interface CheckoutModalProps {
  closeModal: () => void;
  products: IProduct[]; // Replace with the actual type of products
}

const CheckoutModal: FC<CheckoutModalProps> = ({ closeModal, products }) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <S.Modal isOpen={true}> {/* Adjust isOpen condition as necessary */}
      <S.Form onSubmit={handleSubmit}>
        <S.Input type="email" placeholder="Email" required />
        <S.Input type="text" placeholder="Name" required />
        <S.Input type="text" placeholder="Address" required />
        <S.Input type="tel" placeholder="Phone Number" required />
        <S.Button type="submit">Commit Order</S.Button>
      </S.Form>
      <S.CloseButton onClick={closeModal}>X</S.CloseButton>
    </S.Modal>
  );
};

export default CheckoutModal;
