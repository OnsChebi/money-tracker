import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { ignoreElements } from "rxjs";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor() {
        super({
            JwtStrategy:ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration:false,
            //secretOrKey:process.env.JWT_SECRET
            secretOrkey:"pplucky00691234"
        })
    }
    async validate(payload:{userId:number}){
        return{
            userId:payload.userId
        }
    }
 }