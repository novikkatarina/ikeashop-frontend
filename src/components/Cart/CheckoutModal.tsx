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

const CheckoutModal = ({closeModal, products}: CheckoutModalProps) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [modalMessage, setModalMessage] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    /*const [customer, setCustomer] = useState<ICustomer>({
        phoneNumber: phoneNumber,
        name: name,
        address: address,
        email: email
    });*/
    // const [orderRequest, setOrderRequest] = useState<ICreateOrderRequest>({
    //     customer: customer,
    //     products: products
    // });
    //createOrder();
    const checkoutCommitOrder = () => {
        if (createOrder == null) {
            alert("true");
        } else {
            alert('Add some product in the cart!');
        }
        // ... other component code ...
    };


    /*const CheckoutModal: FC<CheckoutModalProps> = ({closeModal, products}) => {
        const checkoutCommitOrder = () => {
            if (createOrder == null) {
                alert("true");
            } else {
                alert('Add some product in the cart!');
            }
        };*/

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

        createOrder(request)
            .then(response => console.log(response), error => console.log(error));




        //checkoutCommitOrder();
    };


    return (
        <S.Modal isOpen={true}> {/* Adjust isOpen condition as necessary */}
            <S.Form onSubmit={handleSubmit}>
                <S.CloseButton onClick={closeModal}>X</S.CloseButton>
                <S.Input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}
                         required/>
                <S.Input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required/>
                <S.Input type="text" placeholder="Address" value={address} onChange={e => setAddress(e.target.value)}
                         required/>
                <S.Input type="tel" placeholder="Phone Number" value={phoneNumber}
                         onChange={e => setPhoneNumber(e.target.value)} required/>
                <S.Button type="submit">Commit Order</S.Button>
            </S.Form>
        </S.Modal>
    );
};

export default CheckoutModal;
