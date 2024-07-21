import { init } from '@paralleldrive/cuid2';
const createId = init({
  // A custom random function with the same API as Math.random.
  // You can use this to pass a cryptographically secure random function.
  random: Math.random,
  // the length of the id
  length: 12,
  // A custom fingerprint for the host environment. This is used to help
  // prevent collisions when generating ids in a distributed system.
  fingerprint: 'fingerprint',
});

export abstract class Entity<T> {
  protected _id: string;
  protected _createdAt: Date;
  protected _updatedAt: Date;
  protected _props: T;

  protected constructor(props: T, id?: string) {
    this._id = id || createId();
    this._createdAt = new Date();
    this._updatedAt = new Date();
    this._props = props;
  }

  get id(): string {
    return this._id;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  get updatedAt(): Date {
    return this._updatedAt;
  }

  get props(): T {
    return this._props;
  }

  protected updateTimestamp(): void {
    this._updatedAt = new Date();
  }

  protected setProps(props: T): void {
    this._props = props;
    this.updateTimestamp();
  }
}
