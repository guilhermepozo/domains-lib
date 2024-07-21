export enum EventType {
    USER_CREATED = 'USER_CREATED',
    USER_UPDATED = 'USER_UPDATED',
    USER_ACCOUNT_LINKED = 'USER_ACCOUNT_LINKED',
}

export interface Event<T = any> {
    type: EventType;
    payload: T;
}