import { Vector } from './vector.class'

describe('Numeric operations', () => {
    const aX = Math.random()
    const aY = Math.random()

    const bX = Math.random()
    const bY = Math.random()

    const a = new Vector(aX, aY)
    const b = new Vector(bX, bY)

    describe('Static numeric methods', () => {
        
        test('Adding', () => {
            expect(Vector.add(a, b)).toStrictEqual(new Vector(a.x + b.x, a.y + b.y))
        })

        test('Substracting', () => {
            expect(Vector.substract(a, b)).toStrictEqual(new Vector(a.x - b.x, a.y - b.y))
        })

        test('Multiplying', () => {
            expect(Vector.multiply(a, b)).toStrictEqual(new Vector(a.x * b.x, a.y * b.y))
        })

        test('Dividing', () => {
            expect(Vector.divide(a, b)).toStrictEqual(new Vector(a.x / b.x, a.y / b.y))
        })

        test('Exponentiation', () => {
            expect(Vector.power(a, b)).toStrictEqual(new Vector(a.x ** b.x, a.y ** b.y))
        })

        test('Getting the rest of division', () => {
            expect(Vector.restOfDivision(a, b)).toStrictEqual(new Vector(a.x % b.x, a.y % b.y))
        })
    })

    describe('Instance numeric methods', () => {
        const copied: Vector = new Vector()

        beforeEach(() => copied.copy(a))

        test('Adding', () => {
            expect(copied.add(b)).toStrictEqual(new Vector(a.x + b.x, a.y + b.y))
        })

        test('Substracting', () => {
            expect(copied.substract(b)).toStrictEqual(new Vector(a.x - b.x, a.y - b.y))
        })

        test('Multiplying', () => {
            expect(copied.multiply(b)).toStrictEqual(new Vector(a.x * b.x, a.y * b.y))
        })

        test('Dividing', () => {
            expect(copied.divide(b)).toStrictEqual(new Vector(a.x / b.x, a.y / b.y))
        })

        test('Exponentiation', () => {
            expect(copied.power(b)).toStrictEqual(new Vector(a.x ** b.x, a.y ** b.y))
        })

        test('Getting the rest of division', () => {
            expect(copied.restOfDivision(b)).toStrictEqual(new Vector(a.x % b.x, a.y % b.y))
        })
    })

})