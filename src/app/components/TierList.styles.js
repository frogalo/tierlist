
// src/components/TierList.styles.js
import styled from 'styled-components';

export const TierListWrapper = styled.div`
    font-family: Arial, sans-serif;
    text-align: center;
    padding: 20px;
`;

export const TierHeaderItem = styled.div`
    padding: 10px 20px;
    border-radius: 10px;
    font-weight: bold;
    color: black;
    text-transform: uppercase;
    min-width: 50px;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    margin-right: 8px;
`;

export const TiersWrapper = styled.div`
    display: flex;
    flex-direction: column; /* Horizontally align the tiers */
    justify-content: center;
    gap: 30px;
  
 
`;

export const TierContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
		
`;

export const TierListItems = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 10px;
    padding: 0;
    margin: 0;
    list-style-type: none;
    width: 100%;
    min-width: 800px;  /* Ensures a minimum width of 800px */
    background-color: #1a1a17;
		border-radius: 15px;
		height: 60px;
`;

export const TierListItem = styled.li`
    margin: 5px 10px;
    text-align: left;
    list-style-type: none;
    padding: 10px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.2s ease, background 0.2s ease;

    &:active {
        transform: scale(0.98);
    }
`;
