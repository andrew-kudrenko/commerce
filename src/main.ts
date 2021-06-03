import { EventEmitter, Firable } from "./classes/events/emitter/event-emitter.class"
import { EventReceiver, Receivable } from "./classes/events/receiver/event-receiver.class"
import { EventEmittable } from "./decorators/event-emittable.decorator"

type BuiltInEvents = 'generate' | 'update' | 'finish'

const globalReceiver: Receivable<BuiltInEvents> = new EventReceiver()

const body: Firable<BuiltInEvents> = new EventEmitter(globalReceiver)

globalReceiver.on('generate', generateHandler)

@EventEmittable<BuiltInEvents>(globalReceiver)
class Doodler {}

const doodler = new Doodler()

window.setInterval(() => {
    body.fire('generate')
    ;(doodler as any).fire('generate')
}, 1e3)

function generateHandler(): void {
    console.warn('Generating...');
}