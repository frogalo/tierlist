import mongoose from 'mongoose'

const tierListSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true,
	},
	items: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Item',
		},
	],
});

const TierList = mongoose.model('TierList', tierListSchema);

export default TierList;
