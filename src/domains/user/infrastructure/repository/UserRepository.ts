import { Repository } from "typeorm/repository/Repository";
import { UserEntity } from "../entity/UserEntity.entity";
import { MongoDBDataSource } from "../datasources";
import { UserMapper } from "../mapper/UserMapper";
import { ObjectId } from "mongodb";
import { User } from "../../domain/entity/User";


export class UserRepository {
  private userRepo: Repository<UserEntity>;

  constructor() {
    const AppDataSource = MongoDBDataSource.instance
    this.userRepo = AppDataSource.getRepository(UserEntity);
  }

  async save(user: User): Promise<void> {
    const userEntity = UserMapper.toEntity(user);
    await this.userRepo.save(userEntity);
  }

  async update(user: User): Promise<void> {
    const userEntity = UserMapper.toEntity(user);
    await this.userRepo.update({id: userEntity.id}, userEntity);
  }

  async findById(id: string): Promise<User | null> {
    const objectId = new ObjectId(id)
    const userEntity = await this.userRepo.findOne({ where: { id: objectId }, relations: ['streamerProfiles', 'accounts'] });
    if (!userEntity) return null;
    return UserMapper.toDomain(userEntity);
  }

  async findByEmail(email: string): Promise<User | null> {
    const userEntity = await this.userRepo.findOne({ where: { email }, relations: ['streamerProfiles', 'accounts'] });
    if (!userEntity) return null;
    return UserMapper.toDomain(userEntity);
  }
}
