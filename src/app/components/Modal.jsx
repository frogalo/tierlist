// src/components/Modal.jsx
import React, { useState } from 'react';
import {
	ModalOverlay,
	ModalContent,
	Input,
	Button,
} from './Modal.styles'; // Import styles from Modal.styles.js

const Modal = ({ isOpen, onClose, onSubmit }) => {
	const [tierListName, setTierListName] = useState('');

	const handleChange = (event) => {
		setTierListName(event.target.value);
	};

	const handleSubmit = () => {
		onSubmit(tierListName);
		setTierListName('');
		onClose();
	};

	return (
		isOpen && (
			<ModalOverlay>
				<ModalContent>
					<h2>Create New Tier List</h2>
					<Input
						type="text"
						value={tierListName}
						onChange={handleChange}
						placeholder="Enter Tier List Name"
					/>
					<div>
						<Button onClick={handleSubmit}>Create</Button>
						<Button onClick={onClose}>Cancel</Button>
					</div>
				</ModalContent>
			</ModalOverlay>
		)
	);
};

export default Modal;
