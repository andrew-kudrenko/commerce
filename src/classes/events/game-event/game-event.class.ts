export interface GameEvent<T extends {}> {
    readonly target: T
}

export class BaseEvent<T extends {}> implements GameEvent<T> {
    constructor(public readonly target: T) {}
}