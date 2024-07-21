export class PlatformNotFoundError extends Error  {
    constructor (public message: string) {
        super();    
    }
}