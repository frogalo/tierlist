// src/components/AddButton.jsx
import React from 'react';
import { ButtonWrapper } from './AddButton.styles';

export const AddButton = ({ onClick }) => {
	return (
		<ButtonWrapper onClick={onClick}>
			Add New Tier List
		</ButtonWrapper>
	);
};
