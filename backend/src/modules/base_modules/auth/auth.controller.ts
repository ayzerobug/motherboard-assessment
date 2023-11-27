import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginRequestDto, RegisterRequestDto } from "./dto";
import { ResponseMessage } from "src/common/decorators/response-message.decorator";
import { AuthResponseInterface } from "./interfaces";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('register')
    @ResponseMessage("Registration Successful")
    signup(@Body() dto: RegisterRequestDto): Promise<AuthResponseInterface> {
        return this.authService.signup(dto);
    }

    @HttpCode(HttpStatus.OK)
    @Post('login')
    @ResponseMessage("Login Successful")
    signin(@Body() dto: LoginRequestDto): Promise<AuthResponseInterface> {
        return this.authService.signin(dto);
    }
}