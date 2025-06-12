import { Injectable } from "@nestjs/common";
import {} from '@prisma/client';

@Injectable ({})
export class AuthService {
    signup() {
        return { msg: 'I have signed up!'};
    }
    
    signin() {
        return { msg: 'I have signed in!'};
    }

    
}