import TierList from '../models/TierList.js'

export default async (request, reply) => {
  try {
    const { id } = request.params

    // Find the tier list by ID and populate its items
    const tierList = await TierList.findById(id).populate('items')

    if (!tierList) {
      return { status: 404, error: 'Tier list not found' }
    }

    return { status: 200, data: tierList }
  } catch (error) {
    console.error('Error fetching tier list by ID:', error.message)
    return {
      status: 500,
      error: 'Internal server error',
      message: error.message
    }
  }
}
