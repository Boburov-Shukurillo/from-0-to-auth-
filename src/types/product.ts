import { Document } from "mongoose";
import { User } from "./user";

export interface Product extends Document {
    title: string, // Product name
    description: string, // Product description
    price: number, // Product price
    amount: number, // Product amount
    owner: User, // Owner ID
}
 