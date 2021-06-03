import { Vector } from "../classes/vector/vector.class"

export interface Drawable {
    
}

export interface Moveable {
    move: (shift: Vector) => void
}

export interface Positionable {
    coords: Vector
    size: Vector
}

export interface Sprite {

}