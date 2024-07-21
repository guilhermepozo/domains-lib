export class UserAlreadyExistError extends Error  {
    constructor (public message: string) {
        super();    
    }
}

export class UserNotFoundError extends Error  {
    constructor (public message: string) {
        super();    
    }
}

export class UserAccountAlreadyExistError extends Error  {
    constructor (public message: string) {
        super();    
    }
}