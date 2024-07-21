import { Entity, ObjectIdColumn, Column } from 'typeorm';
// import { StreamEntity } from './StreamEntity.ts';
import { PlatformEntity } from './PlatformEntity.entity';
import { ObjectId } from 'mongodb';

@Entity()
export class StreamerProfileEntity {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  userId: string;

  @Column(type => PlatformEntity)
  platform: PlatformEntity;

  @Column()
  platformStreamerID: string;

  @Column()
  platformProfileProps: Record<string, string|number>;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
