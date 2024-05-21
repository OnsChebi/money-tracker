import { Controller, Post, Body, UnauthorizedException, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { CreateUserDto } from 'src/user/dto/create-user.dto';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
@Post("login")
login(@Body() loginDto: LoginDto) {
return this.authService.login(loginDto);
}

  @Post('register')
  async register(@Body()  createAuthDto: CreateUserDto ){
    return this.authService.register(createAuthDto);
  }
}
