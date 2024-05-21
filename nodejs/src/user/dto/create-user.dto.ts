
import { IsString, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  id:string;
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  password: string;
}
