// CheckoutModal.tsx
import React, {FC, FormEvent, useState, useEffect} from 'react';
import * as S from './style';
import {ICreateOrderRequest, ICreateOrderRequestItem, IProduct} from "../../models";
import {createOrder} from "../../services/orders";
import {ICustomer} from "../../models";
import {Simulate} from "react-dom/test-utils";


interface CheckoutModalProps {
    closeModal: () => void;
    products: IProduct[]; // Replace with the actual type of products
}

export interface ICreateOrderResponse {
    orderId: string;
    estimatedDeliveryTime: string;
    price: number;
}

const CheckoutModal = ({closeModal, products}: CheckoutModalProps) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [modalMessage, setModalMessage] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [responseMessage, setResponseMessage] = useState<ICreateOrderResponse>(
        {
            orderId: '',
            estimatedDeliveryTime: '',
            price: 0
        });
    const [isSubmitted, setIsSubmitted] = useState(false);


    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const
            customer: ICustomer = {
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
            .then(response => {

                setResponseMessage(response );
                setIsSubmitted(true)
            })


        //checkoutCommitOrder();
    };


    return (
        <S.Modal isOpen={true}> {/* Adjust isOpen condition as necessary */}
            <S.Form onSubmit={handleSubmit}>
                <S.CloseButton onClick={closeModal}>X</S.CloseButton>

                {!isSubmitted ? (
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
                                 onChange={e => setPhoneNumber(e.target.value)} required/>
                        <div style={{height: '20px'}}></div>
                        <S.Button type="submit">Commit Order</S.Button>
                    </>
                ) : (
                    <>
                        <div style={{height: '20px'}}></div>
                      <p className="order-info">Your order:</p>
                      <p className="order-info">Order Number: {responseMessage.orderId}.</p>
                      <p className="order-info">Estimated Delivery Time: {responseMessage.estimatedDeliveryTime}.</p>
                      <p className="order-info">Total Price: {responseMessage.price}</p>
                        <div style={{height: '20px'}}></div>
                        <S.Button onClick={closeModal}>Оплата</S.Button>
                    </>)
                }
            </S.Form>
        </S.Modal>
    );
};

export default CheckoutModal;
