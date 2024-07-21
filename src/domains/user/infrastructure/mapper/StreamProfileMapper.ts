import { StreamerProfile } from "../../domain/entity/StreamerProfile";
import { StreamerProfileEntity } from "../entity/StreamerProfileEntity.entity";
import { ObjectId } from "mongodb";
import { PlatformMapper } from "./PlatformMapper";

export class StreamerProfileMapper {
    static toDomain(entity: StreamerProfileEntity): StreamerProfile {
        const streamerProfile = new StreamerProfile({
            userId: entity.userId,
            platform: PlatformMapper.toDomain(entity.platform),
            platformStreamerID: entity.platformStreamerID,
            platformProfileProps: entity.platformProfileProps},
            entity.id.toString()
        );
        return streamerProfile;
    }

    static toEntity(domain: StreamerProfile): StreamerProfileEntity {
        const streamerProfileEntity = new StreamerProfileEntity();
        streamerProfileEntity.id = new ObjectId(domain.id);
        streamerProfileEntity.userId = domain.props.userId;
        streamerProfileEntity.platform = PlatformMapper.toEntity(domain.platform);
        streamerProfileEntity.platformProfileProps = domain.props.platformProfileProps ?? {};
        streamerProfileEntity.createdAt = domain.createdAt;
        return streamerProfileEntity;
    }
}
