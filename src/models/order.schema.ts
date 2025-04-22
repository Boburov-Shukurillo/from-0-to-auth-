import * as mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId, // User ID
        ref: 'User', // Reference to the User model
        required: true // User is required
    },
    totalPrice: String,
    products: {
        type: mongoose.Schema.Types.ObjectId, // Product ID
        ref: 'Product', // Reference to the Product model
    },
    quantity: Number,
})