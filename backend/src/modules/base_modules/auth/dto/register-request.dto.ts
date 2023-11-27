import { IsEmail, IsNotEmpty, IsString, IsInt, IsOptional } from "class-validator";

export class RegisterRequestDto {
    @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}