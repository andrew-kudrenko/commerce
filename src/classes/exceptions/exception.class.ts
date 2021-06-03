export interface Exception {
    name: string
}

export abstract class GameException implements Exception {
    constructor(public name: string, public message: string) {}
}

export class WrongEventException extends GameException {
    constructor() {
        super('wrong-event', 'Invoking event does not exist')
    }
}