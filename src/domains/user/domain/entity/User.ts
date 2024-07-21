import { UserAccountAlreadyExistError } from '../../errors/User';
import { Account } from './Account';
import { Entity } from './Base';
import { StreamerProfile } from './StreamerProfile';

export interface UserProps {
  username: string,
  email: string,
  profileImageUrl?: string,
  emailVerified?: boolean,
  streamerProfiles: StreamerProfile[],
  accounts: Account[],
}

export class User extends Entity<UserProps> {
  constructor(
    params: UserProps,
    id?: string,
  ) {
    super({...params}, id); 
  }

  addStreamerProfiles(streamerProfiles: StreamerProfile[]):  void | Error {
    streamerProfiles.map(streamerProfile=>{
      if (this.props.streamerProfiles.some(sp => sp.platform.name === streamerProfile.platform.name)) {
        return new Error('Streamer profile for this platform already exists');
      }
      this.props.streamerProfiles.push(streamerProfile);
    })
    this.updateTimestamp();
  }

  addAccounts(accounts: Account[]): void | Error {
    accounts.map(account=>{
      this.props.accounts.push(account);
    })
    this.updateTimestamp();
  }
}