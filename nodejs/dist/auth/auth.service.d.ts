import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/user/user.service';
import { LoginDto } from './dto/login.dto';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    register(user: any): Promise<import("../user/entities/user.entity").User>;
    login({ email, password }: LoginDto): Promise<{
        email: string;
    }>;
}
