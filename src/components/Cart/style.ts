import styled from 'styled-components/macro';

export const Modal = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed; // or 'relative', 'absolute' depending on your requirement
  top: 0;
  left: 0;
  width: 100%; // adjust the width and height as necessary
  height: 100%; // covering the entire viewport for a modal
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  overflow: auto; // to handle the content overflow if any
`;


export const Form = styled.form`
  position: relative;
  width: 300px;
  margin: 100px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  padding: 4px 8px;
  border: none;
  background: black; // change to match your styling
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  border-radius: 4px;
  z-index: 110; // ensure it's above the modal's z-index
  color: #fff;
`;



export const Button = styled.button`
  padding: 10px 20px;
  background-color: #eabf00;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: darkblue;
  }
`;

export const CartButton = styled.button`
  border: 0;
  padding: 0;
  width: 50px;
  height: 50px;
  color: #ececec;
  background-color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  line-height: 50px;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
  z-index: 2;

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.secondary};
  }

  &:hover {
    filter: brightness(85%);
  }
`;

interface IContainer {
  isOpen: boolean;
}
export const Container = styled.div<IContainer>`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  box-sizing: border-box;
  z-index: 99;

  transition: right 0.2s;

  ${CartButton} {
    left: ${({ isOpen }) => (isOpen ? '0' : '-50px')};
    background-color: ${({ theme, isOpen }) =>
      isOpen ? theme.colors.black : theme.colors.primary};
  }

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}) {
    width: 450px;
    right: ${({ isOpen }) => (isOpen ? '0' : '-450px')};

    ${CartButton} {
      left: -50px;
    }
  }
`;

interface ICartIcon {
  large?: boolean;
}
export const CartIcon = styled.div<ICartIcon>`
  width: ${({ large }) => (large ? '60px' : '50px')};
  height: ${({ large }) => (large ? '60px' : '50px')};
  position: relative;
  display: inline-block;
  vertical-align: middle;
  margin-right: 15px;
  background-image: url(${require('static/cart-icon.png')});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  background-size: 50%;
`;

export const CartQuantity = styled.div`
  display: inline-block;
  width: 18px;
  height: 18px;
  color: #0c0b10;
  font-weight: bold;
  font-size: 0.7em;
  text-align: center;
  line-height: 18px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.secondary};
  position: absolute;
  bottom: 0;
  right: 5px;
`;

export const CartContent = styled.div`
  height: 100%;
  overflow-y: scroll;

  /* MAC scrollbar para desktop*/
  @media screen and (min-width: 640px) {
    &::-webkit-scrollbar {
      -webkit-appearance: none;
      width: 10px;
      background-color: rgba(0, 0, 0, 0.2);
      padding: 10px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background-color: #0c0b10;
    }
  }
`;

export const CheckoutCommitOrder = styled.div`
  margin: 0;
`;

export const CartContentHeader = styled.div`
  color: #ececec;
  box-sizing: border-box;
  text-align: center;
  padding: 45px 0;
`;

export const HeaderTitle = styled.span`
  font-weight: bold;
  font-size: 1.2em;
  vertical-align: middle;
`;

export const Sub = styled.p`
  width: 20%;
  color: #5b5a5e;
  vertical-align: middle;
  display: inline-block;
`;

export const SubPrice = styled.div`
  width: 80%;
  text-align: right;
  color: #5b5a5e;
  vertical-align: middle;
  display: inline-block;
`;

export const SubPriceValue = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 22px;
  margin: 0;
`;

export const SubPriceInstallment = styled.p`
  margin: 0;
`;

export const CheckoutButton = styled.button`
  width: 100%;
  border: 0;
  color: #ececec;
  text-transform: uppercase;
  background-color: #0c0b10;
  text-align: center;
  padding: 15px 0;
  margin-top: 40px;
  cursor: pointer;
  outline: none;

  transition: background-color 0.2s;

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.secondary};
  }

  &:hover {
    background-color: #000;
  }
`;

export const CartFooter = styled.div`
  box-sizing: border-box;
  padding: 5%;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 200px;
  z-index: 2;
  background-color: ${({ theme }) => theme.colors.primary};

  &::before {
    content: '';
    width: 100%;
    height: 20px;
    display: block;
    position: absolute;
    top: -20px;
    left: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.2), transparent);
  }
`;



