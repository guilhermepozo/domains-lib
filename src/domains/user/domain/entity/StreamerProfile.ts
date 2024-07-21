import { Stream } from '../value_objects/Stream';
import { Platform } from './Platform';
import { Entity } from './Base';

interface streamerProfile {
  userId: string,
  platform: Platform,
  platformStreamerID: string,
  platformProfileProps?: Record<string, string|number>,
}

export class StreamerProfile extends Entity<streamerProfile> {
  public userId: string
  public platform: Platform
  public platformStreamerID: string
  public platformProfileProps?: Record<string, string|number>
  public streams: Stream[] = [];

  constructor(
    params: streamerProfile,
    id?: string
  ) {
    super({ ...params }, id);
  }
  addStream(stream: Stream): void {
    this.streams.push(stream);
    this.updateTimestamp();
  }
}
