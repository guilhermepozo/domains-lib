import { Account } from "../../domain/entity/Account";
import { StreamerProfile } from "../../domain/entity/StreamerProfile";
import { User } from "../../domain/entity/User";
import { UserRepository } from "../../domain/repository/UserRepository";
import { PlatformRepository } from "../../infrastructure/repository/PlatformRepository";
import { PlatformNotFoundError } from "../../errors/Platform";
import { UserAlreadyExistError, UserNotFoundError } from "../../errors/User";

export class UserService {
  constructor(
    private userRepository: UserRepository,
    private platformRepository: PlatformRepository,
  ) { }

  async createUser(username: string, email: string, profileImageUrl?: string, emailVerified?: boolean): Promise<User | Error> {
    const user = new User({ username, email, emailVerified: emailVerified ?? false, profileImageUrl: profileImageUrl ?? '', streamerProfiles: [], accounts: [] });
    const userExists = await this.userRepository.findByEmail(email);
    if (userExists) {
      return new UserAlreadyExistError('User already exists.');
    }
    await this.userRepository.save(user);
    return user;
  }

  async addStreamerProfile(userId: string, platformName: string, platformStreamerID: string, platformProfileProps: Record<string, string | number> = {}): Promise<StreamerProfile | Error> {
    const user = await this.userRepository.findById(userId);
    if (!user) {
      return new UserNotFoundError('User not found.');
    }

    const platform = await this.platformRepository.findByName(platformName.toLowerCase());
    if (!platform) {
      return new PlatformNotFoundError('Platform not found');
    }

    const streamerProfile = new StreamerProfile(
      {
        userId: user.id,
        platform,
        platformStreamerID,
        platformProfileProps
      }
    );

    user.addStreamerProfiles([streamerProfile]);
    await this.userRepository.save(user);
    return streamerProfile;
  }

  async getUserById(userId: string): Promise<User | null> {
    return await this.userRepository.findById(userId);
  }

  async getUserByEmail(email: string): Promise<User | null> {
    return await this.userRepository.findByEmail(email);
  }

  async linkAccountToUser(email: string, account: Account): Promise<User | Error> {    
    const user = await this.getUserByEmail(email);

    if (!user) {
      return new UserNotFoundError('User not found.');
    }

    account.userId = user.id;
    const willBeAddedAccount = new Account(account);
    const response = user.addAccounts([willBeAddedAccount])

    if (response instanceof Error) {
      return response;
    }
    await this.userRepository.update(user);
    return user
  }
}
