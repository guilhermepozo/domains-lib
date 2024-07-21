import { createUser, linkAccountToUser } from '../../interface/controller/UserController';
import { User } from '../../domain/entity/User';
import { EventHandler } from './Base';
import { Event } from '../events/eventType';
import { AccountProps } from '../../domain/entity/Account';
import { TopicManager } from '../../interface/controller/PubSubManager';
import { UserAccountAlreadyExistError, UserAlreadyExistError, UserNotFoundError } from '../../errors/User';
const topicManager = new TopicManager("backend_user_management_dlq_dev")

export class UserCreatedHandler implements EventHandler {
  async handle(event: Event<User>) : Promise<void> {
    const user = await createUser(event.payload)
    if (user !instanceof UserAlreadyExistError && user instanceof Error) {
      await topicManager.publishMessage(event)
      console.log(user)
    }
  }
}

export interface AccountLinkedHandlerProps {
  email: string;
  account: AccountProps;
} 

export class AccountLinkedHandler implements EventHandler {
  async handle(event: Event<AccountLinkedHandlerProps>) : Promise<void> {
    const user = await linkAccountToUser(event.payload)
    if (user !instanceof (UserAccountAlreadyExistError || UserNotFoundError) && user instanceof Error) {
      await topicManager.publishMessage(event)
      console.log(user)
    }
  }
}

