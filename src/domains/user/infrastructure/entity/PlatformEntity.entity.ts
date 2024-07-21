import { Entity, ObjectIdColumn, Column } from 'typeorm';
import { ObjectId } from 'mongodb';

@Entity()
export class PlatformEntity {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  name: string;

  @Column()
  url: string;

  @Column()
  platformProps: Record<string, string|number>;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
