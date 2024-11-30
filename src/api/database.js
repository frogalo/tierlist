import mongoose from 'mongoose'

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI)
		console.log('MongoDB connected successfully')
	} catch (error) {
		console.error('MongoDB connection error:', error.message)
		process.exit(1)
	}
}

await connectDB() // Initialize the database connection