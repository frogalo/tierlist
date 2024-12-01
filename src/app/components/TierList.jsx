import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {
	TierListWrapper,
	TierHeaderItem,
	TiersWrapper,
	TierContent,
	TierListItem,
	TierListItems,
	ButtonsWrapper,
	InputWrapper,
	Button,
} from './TierList.styles'

export const TierList = () => {
	const { id } = useParams()
	const [tierList, setTierList] = useState(null)
	const [tiers, setTiers] = useState({
		S: [],
		A: [],
		B: [],
		C: [],
		F: [],
		NEW: [], // Add NEW tier
	})
	const [newItem, setNewItem] = useState(false) // Track if new item input is shown
	const [itemName, setItemName] = useState('')
	const [selectedTier, setSelectedTier] = useState('NEW') // Default to 'NEW' tier

	useEffect(() => {
		fetchTierList(id) // Call the function here
	}, [id]) // Re-fetch when the id changes

	// Fetch the tier list from the API
	const fetchTierList = async (tierListId) => {
		try {
			const response = await axios.get(`/api/tierList/${tierListId}`)
			setTierList(response.data.data)

			const newTiers = { S: [], A: [], B: [], C: [], F: [], NEW: [] }
			response.data.data.items.forEach((item) => {
				if (newTiers[item.tier]) {
					newTiers[item.tier].push(item)
				}
			})
			setTiers(newTiers)
		} catch (error) {
			console.error('Error fetching tier list:', error)
		}
	}

	// Handle showing input for a new item
	const toggleNewItemInput = () => {
		setNewItem((prev) => !prev)
		setItemName('') // Clear previous input
	}

	// Handle adding the new item
	const handleAddItem = async () => {
		try {
			if (!itemName) return

			const response = await axios.post('/api/tierListItem/create', {
				name: itemName,
				tier: selectedTier,
				tierListId: tierList._id
			})

			if (response.status === 201) {
				const newItem = response.data.data
				setTiers((prevTiers) => ({
					...prevTiers,
					[selectedTier]: [...prevTiers[selectedTier], newItem]
				}))
				setNewItem(false) // Hide input after adding
				setItemName('') // Reset input field
			}
		} catch (error) {
			console.error('Error adding item:', error)
		}
	}

	return (
		<TierListWrapper>
			<h2>Tier List #{tierList?.name}</h2>

			<TiersWrapper>
				{Object.keys(tiers).map((tier) => (
					<TierContent key={tier}>
						<TierHeaderItem style={{ backgroundColor: getTierColor(tier) }}>
							{tier}
						</TierHeaderItem>
						<TierListItems>
							{tiers[tier].map((item) => (
								<TierListItem key={item._id}>{item.name}</TierListItem>
							))}
						</TierListItems>
					</TierContent>
				))}
			</TiersWrapper>

			<ButtonsWrapper>
				<Button onClick={toggleNewItemInput}>{newItem ? 'Cancel' : 'Add Item'}</Button>
				{newItem && (
					<InputWrapper>
						<input
							type="text"
							value={itemName}
							onChange={(e) => setItemName(e.target.value)}
							placeholder="Enter item name"
						/>
						<Button onClick={handleAddItem}>Add</Button>
					</InputWrapper>
				)}
			</ButtonsWrapper>
		</TierListWrapper>
	)
}

const getTierColor = (tier) => {
	switch (tier) {
		case 'S':
			return '#ff7f7f'
		case 'A':
			return '#ffbf7f'
		case 'B':
			return '#ffdf7f'
		case 'C':
			return '#ffff7f'
		case 'F':
			return '#bfff7f'
		case 'NEW':
			return '#e0e0e0' // Default color for NEW tier
		default:
			return 'transparent'
	}
}
