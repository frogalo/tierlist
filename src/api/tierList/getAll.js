import TierList from '../models/TierList.js'

export default async (request, reply) => {
	try {
		// Fetch all tier lists with populated items
		const tierLists = await TierList.find().populate('items')
		return { status: 200, data: tierLists }
	} catch (error) {
		console.error('Error fetching tier lists:', error.message)
		return {
			status: 500,
			error: 'Internal server error',
			message: error.message
		}
	}
}
