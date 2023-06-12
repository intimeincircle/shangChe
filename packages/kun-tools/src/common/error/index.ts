
export class KunError extends Error {
    constructor(message: string) {
        super(message); // (1)
        this.name = "KunError";
    }
}


export class LoginAuthError extends KunError {
    constructor(message: string) {
        super(message); // (1)
        this.name = "LoginAuthError";
    }
}
