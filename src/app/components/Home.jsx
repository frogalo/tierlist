// src/pages/Home.jsx
import { Link } from 'react-router-dom'; // Link to navigate to individual tier lists

const Home = () => {
	const tierLists = [
		{ id: 1, name: 'Tier List 1' },
		{ id: 2, name: 'Tier List 2' },
		{ id: 3, name: 'Tier List 3' },
	];

	return (
		<div>
			<h1>Tier Lists</h1>
			<div>
				{tierLists.map((tierList) => (
					<div key={tierList.id}>
						<Link to={`/tierlist/${tierList.id}`}>
							<h3>{tierList.name}</h3>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default Home;

// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom'; // Link to navigate to individual tier lists
// import Modal from '../components/Modal'; // Import the Modal component
// import axios from 'axios'; // Import Axios for API calls
// import {
// 	Container,
// 	Header,
// 	TierListItem,
// 	TierListName,
// 	AddButton,
// } from './Home.styles'; // Import styles from Home.styles.js
//
// const Home = () => {
// 	const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
// 	const [tierLists, setTierLists] = useState([]); // Store fetched tier lists
//
// 	// Fetch tier lists from the API
// 	useEffect(() => {
// 		const fetchTierLists = async () => {
// 			try {
// 				const response = await axios.get('/api/tierList'); // Adjust the endpoint if necessary
// 				setTierLists(response.data.data); // Assuming the API returns an array in `data.data`
// 			} catch (error) {
// 				console.error('Error fetching tier lists:', error);
// 			}
// 		};
//
// 		fetchTierLists();
// 	}, []);
//
// 	// Handle the new tier list submission
// 	const handleCreateTierList = async (name) => {
// 		try {
// 			const response = await axios.post('/api/tierList', { name });
// 			setTierLists([...tierLists, response.data.tierList]); // Add the new tier list to the state
// 		} catch (error) {
// 			console.error('Error creating tier list:', error);
// 		}
// 	};
//
// 	return (
// 		<Container>
// 			<Header>Tier Lists</Header>
// 			<AddButton onClick={() => setIsModalOpen(true)}>Add New Tier List</AddButton>
//
// 			{/* Render the list of tier lists */}
// 			<div>
// 				{tierLists.map((tierList) => (
// 					<TierListItem key={tierList._id}>
// 						<Link to={`/tierlist/${tierList._id}`}>
// 							<TierListName>{tierList.name}</TierListName>
// 						</Link>
// 					</TierListItem>
// 				))}
// 			</div>
//
// 			{/* Modal to create a new tier list */}
// 			<Modal
// 				isOpen={isModalOpen}
// 				onClose={() => setIsModalOpen(false)} // Close the modal
// 				onSubmit={handleCreateTierList} // Handle the form submission
// 			/>
// 		</Container>
// 	);
// };
//
// export default Home;
