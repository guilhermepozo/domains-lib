import { Repository } from 'typeorm';
import { PlatformEntity } from '../entity/PlatformEntity.entity';
import { Platform } from '../../domain/entity/Platform';
import { MongoDBDataSource } from '../datasources';
import { PlatformMapper } from '../mapper/PlatformMapper';
import { ObjectId } from 'mongodb';


export class PlatformRepository {
  private platformRepo: Repository<PlatformEntity>;

  constructor() {
    const AppDataSource = MongoDBDataSource.instance
    this.platformRepo = AppDataSource.getRepository(PlatformEntity);
  }

  async save(platform: Platform): Promise<void> {
    const platformEntity = PlatformMapper.toEntity(platform);
    await this.platformRepo.save(platformEntity);
  }

  async findById(id: string): Promise<Platform | null> {
    const platformEntity = await this.platformRepo.findOne({ where: { id: new ObjectId(id) } });
    if (!platformEntity) return null;
    return PlatformMapper.toDomain(platformEntity);
  }

  async findByName(name: string): Promise<Platform | null> {
    const platformEntity = await this.platformRepo.findOne({ where: { name } });
    if (!platformEntity) return null;
    return PlatformMapper.toDomain(platformEntity);
  }
}
