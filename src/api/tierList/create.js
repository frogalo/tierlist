import TierList from '../models/TierList.js'
import Item from '../models/TierListItem.js'

export default async (request, reply) => {
	try {
		const { name, items, guild_id } = await request.json()

		// Validate input
		if (!name) {
			return { status: 400, error: 'Tier list name is required.' }
		}
		if (!guild_id) {
			return { status: 400, error: 'Guild ID is required.' }
		}

		// Create the tier list
		const tierList = new TierList({ name, guild_id })

		// Process items if provided
		if (items && Array.isArray(items)) {
			const createdItems = await Promise.all(
				items.map(async (item) => {
					if (!item.tier || !item.source) {
						throw new Error('Each item must have a tier and source.')
					}
					const newItem = await Item.create({
						tier: item.tier,
						source: item.source,
						tierList: tierList._id
					})
					return newItem._id
				})
			)

			// Add items to the tier list
			tierList.items = createdItems
		}

		// Save the tier list
		await tierList.save()

		return {
			status: 201,
			message: 'Tier list created successfully.',
			data: tierList
		}
	} catch (error) {
		console.error('Error processing tier list creation:', error.message)
		return {
			status: 500,
			error: 'Internal server error',
			message: error.message
		}
	}
}
