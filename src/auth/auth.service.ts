import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { Authdto } from "src/dto";
import * as argon from'argon2';

@Injectable ({})
export class AuthService {
    constructor (private prisma: PrismaService) {}
    async signup(dto: Authdto) {
        //generate the password hash
        const hash = await argon.hash(dto.password);
        //save the user to the db
        const user = await this.prisma.user.create({
            data: {
                email: dto.email,
                hash,
            },
        });
        return user;
    }
    
    signin() {
        return { msg: 'I have signed in!'};
    }

    
}