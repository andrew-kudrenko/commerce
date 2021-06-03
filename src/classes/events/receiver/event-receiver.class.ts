import { Exception, WrongEventException } from "../../exceptions/exception.class"
import { Firable } from "../emitter/event-emitter.class"

export interface Receivable<E extends string> extends Firable<E> {
    on: (event: E, handler: VoidFunction) => void
    off: (event: E, handler: VoidFunction) => void
}

export class EventReceiver<E extends string> implements Receivable<E> {
    private events: Map<E, VoidFunction[]> = new Map()

    public on(event: E, handler: VoidFunction): void {
        this.addHandler(event, handler)
    }

    public off(event: E, handler: VoidFunction): void {
        const existing = this.getHandlers(event)
        const filtered = existing.filter(h => h === handler)

        this.setHandlers(event, filtered)
    }

    public fire(event: E): void {
        try {
            const handlers = this.events.get(event)

            if (!handlers) {
                throw new WrongEventException()
            }
            
            handlers.forEach(h => h())
        } catch (e) {
            console.error('Wrong exception')
        }
    }

    private addHandler(event: E, handler: VoidFunction): void {
        const handlers = [handler]
        
        if (this.hasHandlers(event)) {
            handlers.unshift(...this.getHandlers(event))
        }

        this.setHandlers(event, handlers)
    }

    private setHandlers(event: E, handlers: VoidFunction[]): void {
        this.events.set(event, handlers)        
    }
    
    private getHandlers(event: E): VoidFunction[] {
        const handlers = this.events.get(event)
    
        if (!handlers) {
            throw new WrongEventException()
        }

        return handlers
    }

    private hasHandlers(event: E): boolean {
        return this.events.has(event)
    }
}