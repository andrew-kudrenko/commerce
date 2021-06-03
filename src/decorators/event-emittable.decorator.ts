import { EventEmitter } from "../classes/events/emitter/event-emitter.class"
import { Receivable } from "../classes/events/receiver/event-receiver.class"

export function EventEmittable<E extends string>(receiver: Receivable<E>): ClassDecorator {
    return function (constructor) {
        constructor.prototype.emitter = new EventEmitter<E>(receiver)
        constructor.prototype.fire = (event: E) => {
            constructor.prototype.emitter.fire(event)
        }

        return constructor
    }
}