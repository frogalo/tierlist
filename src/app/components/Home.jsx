import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Wrapper, AddButton, Header, TierListContainer, TierListItem, TierListName } from './Home.styles.js'

const Home = () => {
	const [tierLists, setTierLists] = useState([])
	const navigate = useNavigate() // Initialize navigation hook

	useEffect(() => {
		const fetchTierLists = async () => {
			try {
				const response = await axios.get('/api/tierList/getAll')
				setTierLists(response.data.data)
			} catch (error) {
				console.error('Error fetching tier lists:', error)
			}
		}

		// Calling the async function and chaining .then()
		fetchTierLists()
			.then(() => {
				// console.log('Tier lists fetched successfully');
			})
			.catch((error) => {
				console.error('Error in fetching tier lists in .then():', error)
			})
	}, []) // Empty dependency array to run the effect once on mount

	return (
		<Wrapper>
			<Header>Guild Tier Lists</Header>
			<TierListContainer>
				{tierLists.length === 0 ? (
					<p>No tier lists available. Please create one.</p> // Display this message if no tier lists are present
				) : (
					tierLists.map((tierList) => (
						<TierListItem key={tierList._id}>
							<Link to={`/tierlist/${tierList._id}`}>
								<TierListName>{tierList.name}</TierListName>
							</Link>
						</TierListItem>
					))
				)}
			</TierListContainer>
			<AddButton onClick={() => navigate('/add-tierlist')}>Add New Tier List</AddButton>
		</Wrapper>
	)
}

export default Home
