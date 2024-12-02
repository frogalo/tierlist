import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Wrapper, AddButton, Header, TierListContainer, TierListItem, TierListName } from './Home.styles.js'

const Home = () => {
	const [tierLists, setTierLists] = useState([])
	const [error, setError] = useState(null) // State to store error message
	const [response, setResponse] = useState(null) // State to store the response data
	const navigate = useNavigate() // Initialize navigation hook

	useEffect(() => {
		const fetchTierLists = async () => {
			try {
				const response = await axios.get('/api/tierList/getAll')
				setTierLists(response.data.data)
				setResponse(response.data) // Store the successful response
			} catch (error) {
				setError('Error fetching tier lists: ' + error.message) // Set error message
			}
		}

		// Calling the async function
		fetchTierLists()
			.then(() => {
				// No additional action needed here
			})
			.catch((error) => {
				setError('Error in fetching tier lists in .then(): ' + error.message) // Set error message for .then()
			})
	}, []) // Empty dependency array to run the effect once on mount

	return (
		<Wrapper>
			<Header>Guild Tier Lists</Header>

			{/* Display the response data */}
			{response && (
				<div>
					<h3>Fetched Response:</h3>
					<pre>{JSON.stringify(response, null, 2)}</pre>
				</div>
			)}

			{/* Display error message if there's an error */}
			{error && <p style={{ color: 'red' }}>{error}</p>}

			{/* Display tier lists */}
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

			{/* Button to navigate to add tier list */}
			<AddButton onClick={() => navigate('/add-tierlist')}>Add New Tier List</AddButton>
		</Wrapper>
	)
}

export default Home
