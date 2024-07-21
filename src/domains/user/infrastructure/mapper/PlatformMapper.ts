import { Platform, platforms } from "../../domain/entity/Platform";
import { PlatformEntity } from "../entity/PlatformEntity.entity";
import { ObjectId } from "mongodb";


export class PlatformMapper {
  static toDomain(entity: PlatformEntity): Platform {
    return new Platform({
      name: platforms[entity.name],
      url: entity.url,
      platformProps: entity.platformProps
    }, entity.id.toString());
  }

  static toEntity(domain: Platform): PlatformEntity {
    const platformEntity = new PlatformEntity();
    platformEntity.id = new ObjectId(domain.id);
    platformEntity.name = domain.name;
    platformEntity.url = domain.url;
    platformEntity.platformProps = domain.platformProps;
    platformEntity.createdAt = domain.createdAt;
    platformEntity.updatedAt = domain.updatedAt;
    return platformEntity;
  }
}
