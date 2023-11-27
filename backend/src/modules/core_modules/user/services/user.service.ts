import * as argon from 'argon2'
import { ForbiddenException, Injectable } from "@nestjs/common";
import { User } from "../entities";
import { CreateUserDto } from "../dto/create-user.dto";


@Injectable()
export class UserService {

    async createUser(dto: CreateUserDto): Promise<User> {
        if (await User.findByEmail(dto.email))
            throw new ForbiddenException("Email address already exist");

        const password = await argon.hash(dto.password);

        const user = await User.createAndSave({ ...dto, password });
        delete user.password

        return user;
    }

    async findUserByEmailAndPassword(email: string, password: string): Promise<User> {
        const user = await User.findByEmail(email);

        if (!user || !(await argon.verify(user.password, password)))
            throw new ForbiddenException("Credentials Incorrect");

        return user;
    }
}