import { User } from "../../domain/entity/User";
import { UserEntity } from "../entity/UserEntity.entity";
import { AccountMapper } from "./AccountMapper";
import { StreamerProfileMapper } from "./StreamProfileMapper";
import { ObjectId } from "mongodb";

export class UserMapper {
  static toDomain(entity: UserEntity): User {
    const user = new User(
      {
        username: entity.username,
        email: entity.email,
        profileImageUrl: entity.profileImageUrl,
        emailVerified: entity.emailVerified,
        accounts: entity.accounts.map(AccountMapper.toDomain),
        streamerProfiles: entity.streamerProfiles.map(StreamerProfileMapper.toDomain),
      },
        entity.id.toString(),
    );
    user.addStreamerProfiles(entity.streamerProfiles.map(StreamerProfileMapper.toDomain));
    return user;
  }

  static toEntity(domain: User): UserEntity {
    const userEntity = new UserEntity();
    userEntity.id = new ObjectId(domain.id);
    userEntity.username = domain.props.username;
    userEntity.email = domain.props.email;
    domain.props.profileImageUrl ? userEntity.profileImageUrl = domain.props.profileImageUrl : null;
    userEntity.createdAt = domain.createdAt;
    userEntity.streamerProfiles = domain.props.streamerProfiles.map(StreamerProfileMapper.toEntity);
    userEntity.accounts = domain.props.accounts.map(AccountMapper.toEntity);
    userEntity.updatedAt = domain.updatedAt;
    domain.props.emailVerified ? userEntity.emailVerified = domain.props.emailVerified : null;
    return userEntity;
  }
}
