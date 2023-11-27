
import { Column, Entity } from "typeorm";
import { AppBaseEntity } from "src/common/entities";

@Entity('users')
export class User extends AppBaseEntity {
    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    static async findByEmail(email: string): Promise<User | undefined> {
        return this.createQueryBuilder('user')
            .where('user.email = :email', { email })
            .getOne();
    }
}