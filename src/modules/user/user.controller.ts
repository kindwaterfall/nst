import { Controller, Post, Body } from '@nestjs/common';
import { UserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('api/v1/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  setUserInfo(@Body() data: UserDto) {
    return this.userService.setUserInfo(data);
  }
}
