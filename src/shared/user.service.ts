import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { User } from "../types/user";
import { InjectModel } from "@nestjs/mongoose";
import { RegisterDTO } from "./dto/register-module";
import bcrypt from 'bcrypt'
import { LoginDTO } from "./dto/login-dto";

@Injectable()

export class UserService {
    constructor(@InjectModel('User') private userModel: Model<User>) { }

    private omitPassword(user: User) {
        return user.depopulate('password')
    }

    async create(userDTO: RegisterDTO): Promise<User> {
        const { username } = userDTO;
        const user = await this.userModel.findOne({ username })

        if (user) {
            throw new HttpException('Invalid creadintial', HttpStatus.UNAUTHORIZED)
        }

        const createdUser = new this.userModel(userDTO)

        await createdUser.save()

        return this.omitPassword(createdUser)
    };

    async findByLogin(userDTO: LoginDTO): Promise<User> {
        const { username, password } = userDTO
        const user = await this.userModel.findById({ username })
        if (!user) {
            throw new HttpException('Invalid Credintial', HttpStatus.UNAUTHORIZED)
        }

        if (await bcrypt.compare(password, user.password)) {
            return this.omitPassword(user)
        } else {
            throw new HttpException('Invalid Credintial', HttpStatus.UNAUTHORIZED)
        }
    }

}
