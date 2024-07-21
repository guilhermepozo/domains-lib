import { ObjectId } from "mongodb";
import { AccountEntity } from "../entity/Account.entity";
import { Account, provider, type } from "../../domain/entity/Account";

export class AccountMapper {
  static toDomain(entity: AccountEntity): Account {
    const account = new Account({
      access_token: entity.access_token,
      expires_at: entity.expires_at,
      id_token: entity.id_token,
      provider: provider[entity.provider],
      providerAccountId: entity.providerAccountId,
      refresh_token: entity.refresh_token,
      scope: entity.scope,
      token_type: entity.token_type,
      type: type[entity.type],
      userId: entity.userId,
    }, entity.id?.toString());

    return account;
  }

  static toEntity(domain: Account): AccountEntity {
    const accountEntity = new AccountEntity();
    accountEntity.id = new ObjectId(domain.id);
    accountEntity.access_token = domain.props.access_token; 
    accountEntity.expires_at = domain.props.expires_at; 
    accountEntity.id_token = domain.props.id_token; 
    accountEntity.provider = domain.props.provider; 
    accountEntity.providerAccountId = domain.props.providerAccountId; 
    accountEntity.refresh_token = domain.props.refresh_token; 
    accountEntity.scope = domain.props.scope; 
    accountEntity.token_type = domain.props.token_type; 
    accountEntity.type = domain.props.type; 
    accountEntity.userId = domain.props.userId; 
    accountEntity.createdAt = domain.createdAt; 
    accountEntity.updatedAt = domain.updatedAt;
    return accountEntity;
  }
}
