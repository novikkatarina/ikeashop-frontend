// CheckoutModal.tsx
import React, {FC, FormEvent, useState, useEffect} from 'react';
import * as S from './style';
import {ICreateOrderRequest, ICreateOrderRequestItem, IPaymentRequest, IProduct} from "../../models";
import {createOrder} from "../../services/orders";
import {ICustomer} from "../../models";
import {Simulate} from "react-dom/test-utils";
import {createPay} from "../../services/Payment";
import {useTranslation} from "react-i18next";


interface CheckoutModalProps {
  closeModal: () => void;
  products: IProduct[]; // Replace with the actual type of products
}

export interface ICreateOrderResponse {
  orderId: string;
  estimatedDeliveryTime: string;
  price: number;
}

const phoneNumberPattern = /^(\+7|8)\d{10}$/;

const CheckoutModal = ({closeModal, products}: CheckoutModalProps) => {
  const { t, i18n } = useTranslation();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [responseMessage, setResponseMessage] = useState<ICreateOrderResponse>(
    {
      orderId: '',
      estimatedDeliveryTime: '',
      price: 0
    });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');

  const handlePhoneNumberChange = (e: any) => {
    e.preventDefault();

    const { value } = e.target;
    setPhoneNumber(value);
    // Здесь вы можете добавить логику для проверки правильного формата номера телефона
    // Например, вы можете использовать регулярное выражение для проверки номера
    const phoneRegex = /^[+]?[0-9]+$/; // Пример регулярного выражения для проверки
    const isPhoneNumberValid = phoneNumberPattern.test(value);

    // Устанавливаем новое значение номера телефона
    setPhoneNumber(value);

    // Проверяем, правильный ли формат номера телефона
    if (!isPhoneNumberValid) {
      // Если формат правильный, сбрасываем ошибку

      setPhoneNumberError('Invalid phone number format. Please use the format: +7XXXXXXXXX or 8XXXXXXXXX');
    } else {
      setPhoneNumberError('');


/*      setPhoneNumberError('Неверный формат номера телефона');
    } else {

      // Если формат неправильный, устанавливаем ошибку
      return;*/
    }
   /* const { value } = e.target;
    setPhoneNumber(value);

    // Validate the phone number using the regular expression
    if (!phoneNumberPattern.test(value))  {
      setPhoneNumberError('Invalid phone number format. Please use the format: +7XXXXXXXXX or 8XXXXXXXXX');
    } else {
      setPhoneNumberError('');
    }*/
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (isSubmitted)
      return;

    const customer: ICustomer = {
        email: email,
        address: address,
        name: name,
        phoneNumber: phoneNumber
      }

    const items = products.map(x => {
      const item: ICreateOrderRequestItem = {
        productId: x.id,
        productNumber: x.productNumber,
        quantity: x.quantity
      };

      return item;
    });

    const request = {
      customer: customer,
      items: items
    }

    /*const handleApiResponse = (response: ICreateOrderResponse) => {
        const message = `Order ID: ${response.OrderId}. Estimated Delivery Time: ${response.EstimatedDeliveryTime}. Total Price: ${response.Price}.`;
        setResponseMessage(message);
    };*/

    createOrder(request)
      .then((response: ICreateOrderResponse) => { if (phoneNumberError === '')
        setResponseMessage(response);
        setIsSubmitted(true)
      })
      .catch(e => {
        setErrorMessage(e.response.data);
        setError(true);
      }
    )
    //checkoutCommitOrder();
  };


  const handlePay = () => {
    const payment: IPaymentRequest = {
      orderId: responseMessage.orderId
    }

    createPay(payment).then(() => {
      closeModal();
    })
  };


  return (
    <S.Modal isOpen={true}> {/* Adjust isOpen condition as necessary */}
      <S.Form onSubmit={handleSubmit}>
        <S.CloseButton onClick={closeModal}>X</S.CloseButton>

        {error &&
          <h1> {errorMessage} </h1>
        }

        {!error && !isSubmitted &&
          <>
            <div style={{height: '20px'}}></div>
            <S.Input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}
                     required/>
            <S.Input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)}
                     required/>
            <S.Input type="text" placeholder="Address" value={address}
                     onChange={e => setAddress(e.target.value)}
                     required/>
            <S.Input type="tel" placeholder="Phone Number" value={phoneNumber}
                     onChange={e => handlePhoneNumberChange(e)} required/>
            {phoneNumberError && <div style={{ color: 'red' }}>{phoneNumberError}</div>}


            <div style={{height: '20px'}}></div>
            <S.Button disabled={phoneNumberError !== ''} type="submit">{t("CommitOrder")}</S.Button>
          </>
        }

        {!error && isSubmitted &&
          <>
            <div style={{height: '20px'}}></div>
            <p className="order-info">{t("YourOrder")}:</p>
            <p className="order-info">{t("OrderNumber")}: {responseMessage.orderId}.</p>
            <p className="order-info">{t("EstimatedDel")}: {responseMessage.estimatedDeliveryTime}.</p>
            <p className="order-info">{t("TotalPrice")}: {responseMessage.price}</p>
            <div style={{height: '20px'}}></div>
            <S.Button onClick={handlePay}>{t("Payment")}</S.Button>
          </>
        }
      </S.Form>
    </S.Modal>
  );
};

export default CheckoutModal;
