import { UsersService } from 'src/user/user.service';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private usersService;
    constructor(usersService: UsersService);
    validate(payload: any): Promise<{
        userId: any;
        email: any;
    }>;
}
export {};
