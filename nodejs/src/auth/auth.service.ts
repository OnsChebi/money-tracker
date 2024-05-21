import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UsersService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
constructor(private userService:UsersService, private jwtService: JwtService){}

async Create(authLogin: CreateAuthDto){
  const user = await this.validateUser(authLogin);
  const payload ={
    userId:user.id
  };

  return{
    access_token:this.jwtService.sign(payload)
  };
}

async validateUser(authLogin:CreateAuthDto){
  const{email,password} = authLogin;
  const user=await this.userService.findByUsername(email);
  if(!(await user?.validatePassword(password))){
    throw new UnauthorizedException('Invalid credentials');
  }
  return user;
}

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
