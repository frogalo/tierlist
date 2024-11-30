// src/components/Modal.styles.js
import styled from 'styled-components';

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalContent = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    width: 300px;
    text-align: center;
`;

export const Input = styled.input`
    width: 100%;
    padding: 8px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

export const Button = styled.button`
    padding: 8px 16px;
    margin: 5px;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    font-weight: bold;

    &:first-child {
        background-color: #4caf50;
        color: white;
    }

    &:last-child {
        background-color: #f44336;
        color: white;
    }
`;
