import { Injectable } from '@nestjs/common';
import { UserDto } from '../user/user.dto';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(data: UserDto) {
    const user = this.userService.setUserInfo(data);
  }
}
