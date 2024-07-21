import { Category } from './Category.js';
import { StreamerProfile } from '../entity/StreamerProfile.js';
import { Platform } from '../entity/Platform.js';
import { ValueObject } from './Base.js';

export type stream = {
  id: string,
  title: string,
  streamerProfile: StreamerProfile,
  startTime: Date,
  viewersCount: number,
  platform: Platform,
  createdAt: Date,
  category?: Category,
}

export class Stream extends ValueObject<stream> {
  constructor(
    public id: string,
    public title: string,
    public streamerProfile: StreamerProfile,
    public startTime: Date,
    public viewersCount: number,
    public platform: Platform,
    public createdAt: Date,
    public category?: Category,
  ) {
    super({ title, streamerProfile, startTime, viewersCount, platform, createdAt, category, id });
  }
}
