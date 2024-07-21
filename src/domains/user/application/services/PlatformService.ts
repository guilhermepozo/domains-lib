import { Platform, PlatformProps, platforms } from "../../domain/entity/Platform";
import { PlatformRepository } from "../../infrastructure/repository/PlatformRepository";


export class PlatformService {
  constructor(private platformRepository: PlatformRepository) {}

  async createPlatform(name: string, url: string, platformProps: Record<string, string|number>): Promise<Platform> {
    const platform = new Platform({name:platforms[name], url, platformProps});
    await this.platformRepository.save(platform);
    return platform;
  }

  async getPlatformById(id: string): Promise<Platform | null> {
    return await this.platformRepository.findById(id);
  }

  async getPlatformByName(name: string): Promise<Platform | null> {
    return await this.platformRepository.findByName(name);
  }

}
