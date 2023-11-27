import { User } from "src/modules/core_modules/user/entities";

export interface AuthResponseInterface {
    user: User;
    token: string;
}