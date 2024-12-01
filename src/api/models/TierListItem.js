import mongoose from 'mongoose'

const itemSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	tier: {
		type: String,
		required: true
	},
	source: {
		type: String,
		required: false
	},
	tierList: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'TierList',
		required: true
	}
})

const Item = mongoose.model('Item', itemSchema)

export default Item
