import { ApiProperty } from "@nestjs/swagger";

export class UserDto {
  @ApiProperty({type: Number})
  useId: number;
  @ApiProperty({type: String})
  userName: string;
  @ApiProperty({type: String})
  userOldPassword: string;
  @ApiProperty({type: String})
  userNewPassword: string;
}