import { EventType, Event } from "../../infrastructure/events/eventType";
import { EventHandler } from "../../infrastructure/handlers/Base";
import { UserCreatedHandler, AccountLinkedHandler } from "../../infrastructure/handlers/UserHandlers";

export class EventManager {
    private handlers: { [key in EventType]?: EventHandler };

  constructor() {
    this.handlers = {
      [EventType.USER_CREATED]: new UserCreatedHandler(),
      [EventType.USER_ACCOUNT_LINKED]: new AccountLinkedHandler(),
    };
  }

  handleEvent(event: Event) {
    const handler = this.handlers[event.type];
    if (handler) {
      handler.handle(event);
    } else {
      console.error(`No handler found for event type: ${event.type}`);
    }
  }
}