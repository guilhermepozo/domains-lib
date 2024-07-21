import { User } from '../../domain/entity/User';
import { Event } from '../../infrastructure/events/eventType';
import { AccountLinkedHandlerProps } from '../../infrastructure/handlers/UserHandlers';
import { PubSub } from '@google-cloud/pubsub';


export class TopicManager {
  private pubSubClient: PubSub;
  private topicName: string;

  constructor(topicName: string) {
    this.pubSubClient = new PubSub();
    this.topicName = topicName;
  }

  async publishMessage(message: Event<AccountLinkedHandlerProps | User>) : Promise<void> {
    try {
      const topic = this.pubSubClient.topic(this.topicName);
      await topic.publishMessage({ data: Buffer.from(JSON.stringify(message)) });
      console.log(`Event ${message.type} published.`);
    } catch (error) {
      console.error(`Received error while publishing: ${error.message}`);
    }
  }
}

