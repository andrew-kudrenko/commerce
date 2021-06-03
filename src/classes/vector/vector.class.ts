export type NumericOperator = '+' | '-' | '*' | '/' | '**' | '%'

export type LogicalOperator = '>' | '>=' | '<' | '<=' | '==' 

export class Vector {
    constructor(public x: number = 0, public y: number = 0) {}

    public static add(a: Vector, b: Vector): Vector {
        return Vector.operateNumeric(a, '+', b)
    }

    public static substract(a: Vector, b: Vector): Vector {
        return Vector.operateNumeric(a, '-', b)
    }

    public static multiply(a: Vector, b: Vector): Vector {
        return Vector.operateNumeric(a, '*', b)
    }

    public static power(a: Vector, b: Vector): Vector {
        return Vector.operateNumeric(a, '**', b)
    }

    public static divide(a: Vector, b: Vector): Vector {
        return Vector.operateNumeric(a, '/', b)
    }

    public static restOfDivision(a: Vector, b: Vector): Vector {
        return Vector.operateNumeric(a, '%', b)
    }

    public static greater(a: Vector, b: Vector): boolean {
        return Vector.operateLogical(a, '>', b)
    }

    public static greaterOrEquals(a: Vector, b: Vector): boolean {
        return Vector.operateLogical(a, '>=', b)
    }
    
    public static less(a: Vector, b: Vector): boolean {
        return Vector.operateLogical(a, '<', b)
    }

    public static lessOrEquals(a: Vector, b: Vector): boolean {
        return Vector.operateLogical(a, '<=', b)
    }

    public static equals(a: Vector, b: Vector): boolean {
        return Vector.operateLogical(a, '==', b)
    }

    public add(value: Vector | number): Vector {
        return Vector.operateNumeric(this, '+', value)
    }

    public substract(value: Vector | number): Vector {
        return Vector.operateNumeric(this, '-', value)
    }

    public multiply(value: Vector | number): Vector {
        return Vector.operateNumeric(this, '*', value)
    }

    public divide(value: Vector | number): Vector {
        return Vector.operateNumeric(this, '/', value)
    }

    public power(value: Vector | number): Vector {
        return Vector.operateNumeric(this, '**', value)
    }

    public restOfDivision(value: Vector | number): Vector {
        return Vector.operateNumeric(this, '%', value)
    }

    public floor(): Vector {
        const x = Math.floor(this.x)
        const y = Math.floor(this.y)

        return new Vector(x, y)
    }

    public greater(value: Vector | number): boolean {
        return Vector.operateLogical(this, '>', value)
    }

    public greaterOrEquals(value: Vector | number): boolean {
        return Vector.operateLogical(this, '>=', value)
    }

    public less(value: Vector | number): boolean {
        return Vector.operateLogical(this, '<', value)
    }

    public lessOrEquals(value: Vector | number): boolean {
        return Vector.operateLogical(this, '<=', value)
    }

    public equals(value: Vector | number): boolean {
        return Vector.operateLogical(this, '==', value)
    }

    public copy(value: Vector): void {
        this.defineCoords(value)
    }

    private static operateNumeric(a: Vector | number, operator: NumericOperator, b: Vector | number): Vector {
        const lambda = Vector.getNumericLambda(operator)

        if (a instanceof Vector && b instanceof Vector) {
            return new Vector(lambda(a.x, b.x), lambda(a.y, b.y))
        }

        if (a instanceof Vector && typeof b === 'number') {
            return new Vector(lambda(a.x, b), lambda(a.y, b))
        }

        if (b instanceof Vector && typeof a === 'number') {
            return new Vector(lambda(a, b.x), lambda(a, b.y))
        }
        if (typeof a === 'number' && typeof b === 'number') {
            return new Vector(lambda(a, b), lambda(a, b))
        }
        
        throw new Error('Unsupported operation')
    }

    private static operateLogical(a: Vector | number, operator: LogicalOperator, b: Vector | number): boolean {
        const lambda = Vector.getLogicalLambda(operator)

        if (a instanceof Vector && b instanceof Vector) {
            return lambda(a.x, b.x) && lambda(a.y, b.y)
        }

        if (a instanceof Vector && typeof b === 'number') {
            return lambda(a.x, b) && lambda(a.y, b)
        }

        if (b instanceof Vector && typeof a === 'number') {
            return lambda(a, b.x) && lambda(a, b.y)
        }

        if (typeof a === 'number' && typeof b === 'number') {
            return lambda(a, b) && lambda(a, b)
        }

        throw new Error('Unsupported operation')
    }

    private static getNumericLambda(operator: NumericOperator): (a: number, b: number) => number {
        switch(operator) {
            case "+":
                return (a, b) => a + b
            case "-":
                return (a, b) => a - b
            case "*":
                return (a, b) => a * b
            case "**":
                return (a, b) => a ** b
            case "/": 
                return (a, b) => a / b
            case "%":
                return (a, b) => a % b
            default:
                Vector.throwNotImplementedOperatorException(operator)
        }
    }

    private static getLogicalLambda(operator: LogicalOperator): (a: number, b: number) => boolean {
        switch(operator) {
            case ">":
                return (a, b) => a > b
            case ">=":
                return (a, b) => a >= b
            case "<=":
                return (a, b) => a <= b
            case "<":
                return (a, b) => a < b
            case "==": 
                return (a, b) => a === b
            default:
                Vector.throwNotImplementedOperatorException(operator)
        }
    }

    private defineCoords({ x, y }: Vector): void {
        this.x = x
        this.y = y
    }

    private static throwNotImplementedOperatorException(operator: string): never {
        throw new Error(`Operator ${operator} has not implemented yet`)
    }
}