// src/pages/AddTierList.styles.js
import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: var(--background-color); /* Use your theme variables */
    color: var(--text-color);
    padding: 20px;
`;

export const Header = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 20px;
    text-align: center;
    color: var(--primary-color);
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    max-width: 400px;
    background-color: var(--secondary-color);
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Input = styled.input`
    font-size: 1rem;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid var(--primary-color);
    border-radius: 4px;
    outline: none;
    transition: border-color 0.3s;

    &:focus {
        border-color: var(--text-color);
    }
`;

export const Button = styled.button`
  font-size: 1rem;
  padding: 10px;
  margin-top: 10px;
  color: #fff;
  background-color: var(--primary-color);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--text-color);
  }

  &:nth-of-type(2) {
    background-color: #ccc;
    color: #333;

    &:hover {
      background-color: #bbb;
    }
  }
`;
