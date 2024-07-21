import { Entity, ObjectIdColumn, Column } from 'typeorm';
import { ObjectId } from 'mongodb';

@Entity()
export class AccountEntity {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  access_token: string;

  @Column()
  expires_at: Date;

  @Column()
  id_token: string;

  @Column()
  provider: string;

  @Column()
  providerAccountId: string;

  @Column()
  refresh_token: string;

  @Column()
  scope: string;

  @Column()
  token_type: string;

  @Column()
  type: string;

  @Column()
  userId: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}