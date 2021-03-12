import { Module } from "@nestjs/common";
import { UserModule } from "../user/user.module";
import { AuthService } from "./auth.service";

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [AuthService]
})
export class AuthModule {}