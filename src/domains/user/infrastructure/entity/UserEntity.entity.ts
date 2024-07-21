import { Entity, ObjectIdColumn, Column } from 'typeorm';
import { ObjectId } from 'mongodb';
import { StreamerProfileEntity } from './StreamerProfileEntity.entity';
import { AccountEntity } from './Account.entity';

@Entity()
export class UserEntity {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  profileImageUrl: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @Column(type => StreamerProfileEntity)
  streamerProfiles: StreamerProfileEntity[];

  @Column(type => AccountEntity)
  accounts: AccountEntity[];

  @Column()
  emailVerified: boolean;
}