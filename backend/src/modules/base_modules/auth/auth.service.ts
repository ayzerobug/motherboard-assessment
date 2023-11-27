import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { LoginRequestDto, RegisterRequestDto } from "./dto";
import { UserService } from "src/modules/core_modules/user/services/user.service";
import { AuthResponseInterface } from "./interfaces";

@Injectable()
export class AuthService {

    constructor(private jwt: JwtService, private config: ConfigService, private userService: UserService) { }

    private async signToken(sub: number, email: string): Promise<string> {
        const env = this.config.get('ENVIRONMENT')
        const expiresIn = env === 'local' || env === 'dev' || env === 'development' ? '3d' : '15m'
        return this.jwt.signAsync({ sub, email }, { expiresIn, secret: this.config.get('JWT_SECRET') });
    }

    async signin(dto: LoginRequestDto): Promise<AuthResponseInterface> {
        const user = await this.userService.findUserByEmailAndPassword(dto.email, dto.password)
        const token = await this.signToken(user.id, user.email);

        return { user, token };
    }

    async signup(dto: RegisterRequestDto): Promise<AuthResponseInterface> {
        const user = await this.userService.createUser(dto);
        const token = await this.signToken(user.id, user.email);
        return { user, token };
    }
}