import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Button, Input, Wrapper, Form } from './AddTierList.styles.js'
import { Header } from './Home.styles.js'

const AddTierList = () => {
	const [tierListName, setTierListName] = useState('')
	const navigate = useNavigate()

	const handleSubmit = async (event) => {
		event.preventDefault()
		const guild_id = sessionStorage.getItem('guild_id') // Retrieve guild_id from session storage

		if (!guild_id) {
			console.error('Guild ID not found in session storage')
			return
		}

		try {
			console.log('Sending:', { name: tierListName, guild_id });
			await axios.post('/api/tierlist', { name: tierListName, guild_id: guild_id })
			navigate('/') // Redirect to the home page after successful submission
		} catch (error) {
			console.error('Error adding tier list:', error)
		}
	}

	return (
		<Wrapper>
			<Header>Create New Tier List</Header>
			<Form onSubmit={handleSubmit}>
				<Input
					type="text"
					value={tierListName}
					onChange={(e) => setTierListName(e.target.value)}
					placeholder="Enter Tier List Name"
					required
				/>
				<Button type="submit">Create</Button>
				<Button type="button" onClick={() => navigate('/')}>
					Cancel
				</Button>
			</Form>
		</Wrapper>
	)
}

export default AddTierList
