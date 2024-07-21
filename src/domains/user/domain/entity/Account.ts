import { Entity } from "./Base"

export enum provider {
    twitch = 'twitch',
    google = 'google',
}

export enum type {
    oauth = 'oauth',
}

export interface AccountProps {
    access_token: string,
    expires_at: Date,
    id_token: string,
    provider: provider,
    providerAccountId: string,
    refresh_token: string,
    scope: string,
    token_type: string,
    type: type,
    userId: string,
}

export class Account extends Entity<AccountProps> {
    public access_token: string
    public expires_at: Date
    public id_token: string
    public provider: provider
    public providerAccountId: string
    public refresh_token: string
    public scope: string
    public token_type: string
    public type: type
    public userId: string

    constructor(
        params: AccountProps,
        id?: string) {
        super({...params}, id);
    }
}
