import { Injectable } from "@nestjs/common";
import {} from '@prisma/client';
import { Authdto } from "src/dto";
import * as argon from'argon2';

@Injectable ({})
export class AuthService {
    signup(dto: Authdto) {
        //generate the password hash

        //save the user to the db

        //return saved user
        return { msg: 'I have signed up!'};
    }
    
    signin() {
        return { msg: 'I have signed in!'};
    }

    
}