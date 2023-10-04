// style.ts
import styled from 'styled-components';

export const NotificationContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  padding: 20px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  max-width: 300px;
  width: 100%;
  text-align: center;
`;

export const Message = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const ActionButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 4px;

  &:hover {
    background-color: #0056b3;
  }
`;
