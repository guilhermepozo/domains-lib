import { Entity } from "./Base"

export enum platforms {
    twitch = 'Twitch',
}

export interface PlatformProps {
    name: platforms,
    url: string,
    platformProps: Record<string, string | number>,
}

export class Platform extends Entity<PlatformProps> {
    public name: platforms
    public url: string
    public platformProps: Record<string, string | number>

    constructor(
        params: PlatformProps,
        id?: string
    ) {
        super({ ...params }, id);
    }
}
