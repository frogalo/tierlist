// import TierList from './TierList.js'
// import Item from './TierListItem.js'
//
// const createTierListWithItems = async () => {
// 	try {
// 		// Create a TierList
// 		const tierList = await TierList.create({ name: 'My First Tier List', guild_id: 'test' })
//
// 		// Create Items and associate them with the TierList
// 		const item1 = await Item.create({
// 			tier: 'S',
// 			source: '/images/item1.png',
// 			tierList: tierList._id
// 		})
//
// 		const item2 = await Item.create({
// 			tier: 'A',
// 			source: '/images/item2.png',
// 			tierList: tierList._id
// 		})
//
// 		// Add the Items to the TierList
// 		tierList.items.push(item1._id, item2._id)
// 		await tierList.save()
//
// 		console.log('TierList with Items created successfully:', tierList)
// 	} catch (error) {
// 		console.error('Error creating TierList with Items:', error.message)
// 	}
// }
//
// createTierListWithItems()
