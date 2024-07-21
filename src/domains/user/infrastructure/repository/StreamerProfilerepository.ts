import { Repository } from 'typeorm';
import { StreamerProfileEntity } from '../entity/StreamerProfileEntity.entity';
import { MongoDBDataSource } from '../datasources';
import { ObjectId } from 'mongodb';

export class StreamerProfileRepository {
  private streamerProfileRepo: Repository<StreamerProfileEntity>;

  constructor() {
    const AppDataSource = MongoDBDataSource.instance
    this.streamerProfileRepo = AppDataSource.getRepository(StreamerProfileEntity);
  }

  async save(streamerProfile: StreamerProfileEntity): Promise<void> {
    await this.streamerProfileRepo.save(streamerProfile);
  }

  async findById(id: ObjectId): Promise<StreamerProfileEntity | null> {
    return await this.streamerProfileRepo.findOne({ where: { id }, relations: ['streams'] });
  }

  async findByUserId(userId: string): Promise<StreamerProfileEntity[]> {
    return await this.streamerProfileRepo.find({ where: { userId }, relations: ['streams'] });
  }
}
