import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserEntity } from "./user.orm";
import { UserDto } from "./user.dto";
import { UserDomainService } from "src/domains/servicies/user.service";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) 
    private readonly userRepo: Repository<UserEntity>) {
  }

  async setUserInfo(data: UserDto) {
    const signature = UserDomainService.createSignature();
    console.log(data);
    // const user = this.userRepo.create();
    // await this.userRepo.save(user);
    // return user;
  }
}