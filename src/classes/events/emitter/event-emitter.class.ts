import { Receivable } from "../receiver/event-receiver.class"

export interface Firable<Events extends string> {
    fire: (event: Events) => void
}

export class EventEmitter<E extends string> implements Firable<E> {
    constructor(private receiver: Receivable<E>) {}

    public fire(event: E): void {
        this.receiver.fire(event)
    }
}