import { IsEmail, IsNotEmpty, IsSemVer, IsString } from "class-validator";

export class Authdto {
    
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}