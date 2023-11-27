import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UserService } from 'src/modules/core_modules/user/services/user.service';
import { User } from 'src/modules/core_modules/user/entities';
import { LoginDto, RegisterRequestDto } from './dto';

describe('AuthService', () => {
    let authService: AuthService;
    let userService: UserService;
    let jwtService: JwtService;
    let configService: ConfigService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                { provide: JwtService, useValue: {} as JwtService }, // Mock JwtService
                { provide: ConfigService, useValue: {} as ConfigService }, // Mock ConfigService
                { provide: UserService, useValue: {} as UserService }, // Mock UserService
                AuthService
            ],
        }).compile();

        authService = module.get<AuthService>(AuthService);
        jwtService = module.get<JwtService>(JwtService);
        configService = module.get<ConfigService>(ConfigService);
        userService = module.get<UserService>(UserService);
    });

    it('should sign in a user and return an authentication response', async () => {
        const mockUser = new User();
        mockUser.id = 1;
        mockUser.email = 'test@example.com';
        const mockToken = 'mockToken';
        jest.spyOn(userService, 'findUserByEmailAndPassword').mockResolvedValue(mockUser);
        jest.spyOn(authService, 'signToken' as any).mockResolvedValue(mockToken);

        const loginDto: LoginDto = {
            email: 'test@example.com',
            password: 'password',
        };

        const result = await authService.signin(loginDto);

        expect(result.user).toEqual(mockUser);
        expect(result.token).toEqual(mockToken);
    });

    it('should sign up a user and return an authentication response', async () => {
        const mockUser = new User();
        mockUser.id = 1;
        mockUser.email = 'test@example.com';
        const mockToken = 'mockToken';

        const registerDto: RegisterRequestDto = {
            name: "Ayomide Micheal",
            email: "aydcoder@gmail.com",
            password: "keycode123"
        };

        const result = await authService.signup(registerDto);

        expect(result.user).toEqual(mockUser);
        expect(result.token).toEqual(mockToken);
    });
});
