import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import * as bcryptjs from 'bcryptjs';
import { UsersService } from 'src/user/user.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  // async validateUser(email: string, password: string): Promise<any> {
  //   const user = await this.usersService.findByEmail(email);
  //   if (user && (await bcryptjs.compare(password, user.password))) {
  //     return user;
  //   }
  //   return null;
  // }

  // async login(user: any) {
  //   const payload = { email: user.email, sub: user.userId };
  //   return {
  //     access_token: this.jwtService.sign(payload),
  //   };
  // }
  async register(user: any) {
    user.password = await bcryptjs.hash(user.password, 10);
    return this.usersService.create(user);
  }
  async login({ email, password }: LoginDto) {
    const user = await this.usersService.findByEmail(email);
    if (!user) {
    throw new UnauthorizedException("Invalid email");
    }
    const isPasswordValid = await bcryptjs.compare(password, user.password);
    if (!isPasswordValid) {
    throw new UnauthorizedException("Invalid password");
    }
    return {
    email: user.email,
    };
    }
    
 
  
}
