import * as mongoose from 'mongoose'
import * as bcrytp from 'bcrypt'

export const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    district: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
}, { timestamps: true })


UserSchema.pre('save', async function (next: any) {
    try {
        if (!this.isModified('password')) {
            return next()
        }

        const hashedPassword = await bcrytp.hash(this['password'], 10)
        this['password'] = hashedPassword

        next()
    } catch (error) {
        return next(error)
    }
})