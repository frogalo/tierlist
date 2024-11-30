import TierList from '../api/models/TierList.js';
import Item from '../api/models/TierListItem.js';

export default async (request, reply) => {
	try {
		// Handle GET request to fetch all tier lists
		if (request.method === 'GET') {
			const tierLists = await TierList.find().populate('items');
			return { status: 200, data: tierLists };
		}

		// Handle POST request to create a new tier list
		if (request.method === 'POST') {
			const { name, items } = await request.json();

			// Validate input
			if (!name) {
				throw new Error('Tier list name is required.');
			}

			// Create the tier list
			const tierList = new TierList({ name });

			// Process items if provided
			if (items && Array.isArray(items)) {
				const createdItems = await Promise.all(
					items.map(async (item) => {
						if (!item.tier || !item.source) {
							throw new Error('Each item must have a tier and source.');
						}
						const newItem = await Item.create({
							tier: item.tier,
							source: item.source,
							tierList: tierList._id,
						});
						return newItem._id;
					})
				);

				// Add items to the tier list
				tierList.items = createdItems;
			}

			// Save the tier list
			await tierList.save();

			return {
				status: 201,
				message: 'Tier list created successfully.',
				tierList,
			};
		}

		// Handle unsupported HTTP methods
		reply.code(405).send('Method not allowed');
		return;
	} catch (error) {
		// Error handling
		console.error('Error processing tier list API request:', error.message);
		reply.code(500).send({
			error: 'Internal server error',
			message: error.message,
		});
	}
};
