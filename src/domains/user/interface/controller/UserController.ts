import { Account } from '../../domain/entity/Account';
import { UserService } from '../../application/services/UserService';
import { PlatformRepository } from '../../infrastructure/repository/PlatformRepository';
import { UserRepository } from '../../infrastructure/repository/UserRepository';


const userRepository = new UserRepository();
const platformRepository = new PlatformRepository();
const userService = new UserService(userRepository, platformRepository);

export async function createUser(payload: any) : Promise<string | Error> {
  const { email, username, profileImageUrl, account } = payload;
  const user = await userService.createUser(username, email, profileImageUrl);
  if (user instanceof Error) {
    console.error('Error creating user:', user.message);
    return user;
  }
  if (account) {
    const linkedAccount = await linkAccountToUser({email, account});
    if (linkedAccount instanceof Error) {
      console.error('Error linking account to user:', linkedAccount.message);
      return linkedAccount;
    }
  }
  return `Message processed. User created: ${user.props.username}`;
}

export async function linkAccountToUser(payload : any) : Promise<string | Error> {
  const { email, account } : { email : string, account: Account} = payload;
  const user = await userService.linkAccountToUser(email, account);
  if (user instanceof Error) {
    console.log(`Error linking account to user email: ${email}`)
    return user;
  }
  return `Message processed. Account linked to user: ${user.props.username}`;
}
