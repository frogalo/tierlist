// src/components/TierList.styles.js
import styled from 'styled-components';

export const TierListWrapper = styled.div`
    font-family: Arial, sans-serif;
    text-align: center;
    padding: 20px;
`;

export const TierHeader = styled.div`
    margin-bottom: 20px;
`;

export const TierHeaderItem = styled.div`
    padding: 10px 20px;
    border-radius: 10px;
    font-weight: bold;
    color: black;
    text-transform: uppercase;
    min-width: 50px;
    text-align: center;
`;

export const TiersWrapper = styled.div`
    display: flex;
    flex-direction: column; /* Vertical align the tiers */
    justify-content: center;
    gap: 30px;
`;

export const TierContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 80%;
`;

export const TierListItem = styled.li`
    margin: 5px 10px;  /* Adjust spacing between items */
    text-align: center;  /* Center-align the items inside the list */
    list-style-type: none;
    padding: 5px;
`;

export const TierListItems = styled.ul`
    display: flex;  /* Flex container for items */
    gap: 10px;  /* Space between items */
    padding: 0;  /* Remove default padding */
    margin: 0;  /* Remove default margin */
    list-style-type: none;  /* Remove default list bullets */
`;
