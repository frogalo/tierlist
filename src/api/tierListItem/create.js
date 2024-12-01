import Item from '../models/TierListItem.js'
import TierList from '../models/TierList.js'

export default async (request, reply) => {
	try {
		// Extract the data from the request
		const { name, tier, tierListId } = await request.json()

		// Validate the input
		if (!name || !tier || !tierListId) {
			return { status: 400, error: 'Name, tier, and tierListId are required.' }
		}

		// Check if the tier list exists
		const tierList = await TierList.findById(tierListId)
		if (!tierList) {
			return { status: 404, error: 'Tier list not found.' }
		}

		// Create a new item
		const newItem = new Item({
			name,
			tier,
			tierList: tierListId
		})

		// Save the new item to the database
		await newItem.save()

		// Add the new item to the tier list
		tierList.items.push(newItem._id)
		await tierList.save()

		// Return the response with success message
		return {
			status: 201,
			message: 'Tier list item created successfully.',
			data: newItem
		}
	} catch (error) {
		console.error('Error creating tier list item:', error.message)
		return {
			status: 500,
			error: 'Internal server error',
			message: error.message
		}
	}
}
