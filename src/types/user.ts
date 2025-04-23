import { Document } from "mongoose";

export interface User extends Document {
    username: string, // User name
    readonly password: string, // User password
    region: string, // User region
    district: string, // User district
}