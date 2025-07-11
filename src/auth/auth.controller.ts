import { Body, Controller, Post, Req } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Authdto } from "src/dto";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('signup')
    signup(@Body() dto: Authdto)  {
       
        return this.authService.signup(dto);
    }

    @Post('signin')
    signin(@Body() dto: Authdto) {
        return this.authService.signin(dto);
    }
}