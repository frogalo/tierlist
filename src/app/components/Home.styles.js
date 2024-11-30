// src/pages/Home.styles.js
import styled from 'styled-components';

export const Container = styled.div`
    padding: 20px;
`;

export const Header = styled.h1`
    font-size: 2rem;
    color: #333;
`;

export const TierListItem = styled.div`
  margin: 10px 0;
`;

export const TierListName = styled.h3`
  font-size: 1.2rem;
  color: #007bff;
  cursor: pointer;
  text-decoration: underline;
`;

export const AddButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  margin-bottom: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;
