// src/pages/Home.jsx
import { Link } from 'react-router-dom' // Link to navigate to individual tier lists
import axios from 'axios'
import { useEffect, useState } from 'react'
// import Modal from './Modal.jsx'
import { AddButton, Container, Header, TierListItem, TierListName } from './Home.styles.js' // Import Axios for API calls

const Home = () => {
	// const [isModalOpen, setIsModalOpen] = useState(false) // State to manage modal visibility
	const [tierLists, setTierLists] = useState([]) // Store fetched tier lists
	useEffect(() => {
		const fetchTierLists = async () => {
			try {
				const response = await axios.get('/api/tierlist') // Adjust the endpoint if necessary
				setTierLists(response.data.data) // Assuming the API returns an array in `data.data`

			} catch (error) {
				console.error('Error fetching tier lists:', error)
			}
		}
		fetchTierLists()
	}, [])

	return (
		<Container>
			<Header>Tier Lists</Header>
			<AddButton onClick={() => setIsModalOpen(true)}>Add New Tier List</AddButton>
			<TierListItem>
				{tierLists.map((tierList) => (
					<TierListName key={tierList._id}>
						<Link to={`/tierlist/${tierList._id}`}>
							<h3>{tierList.name}</h3>
						</Link>
					</TierListName>
				))}
			</TierListItem>
		</Container>
	)
}

export default Home
