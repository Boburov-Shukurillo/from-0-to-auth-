import * as mongoose from 'mongoose'
import { title } from 'process'

const ProductSchema = new mongoose.Schema({
    title: { type: String, required: true },    // Product name
    description: { type: String, required: true }, // Product description  
    price: { type: Number, required: true }, // Product price
    amout: { type: Number, required: true }, // Product amount
    owner:{
        type: mongoose.Schema.Types.ObjectId, // Owner ID
        ref: 'User', // Reference to the User model
        required: true // Owner is required
    }
},{timestamps: true}) // Automatically add createdAt and updatedAt timestamps
