import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryColumn()
  id: number;
  @Column()
  userNameHashed: string;
  @Column()
  userPasswordEncrypted: string;
  @Column()
  group: number;
}