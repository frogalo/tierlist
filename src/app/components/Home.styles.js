import styled from 'styled-components';

export const Container = styled.div`
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
`;

export const Header = styled.h1`
    text-align: center;
    margin-bottom: 20px;
    font-size: 2rem;
`;

export const TierListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
`;

export const TierListItem = styled.div`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    transition: transform 0.2s ease;
    &:hover {
        transform: scale(1.02);
    }
`;

export const TierListName = styled.h3`
    margin: 0;
    color: #333;
`;

export const AddButton = styled.button`
  display: block;
  margin: 0 auto;
  padding: 10px 20px;
  font-size: 1rem;
  background-color: var(--primary-color, #007bff);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: var(--secondary-color, #0056b3);
  }
`;
