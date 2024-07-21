import { Platform } from "../entity/Platform";
import { ValueObject } from "./Base";

export type category = {
  id: string,
  name: string,
  platform: Platform
}

export class Category extends ValueObject<category> {
  constructor(
    public id: string,
    public name: string,
    public platform: Platform
  ) {
    super({ name, platform, id })
  }
}
