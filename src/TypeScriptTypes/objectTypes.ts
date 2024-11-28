// (*) Object Types
// 1. Interface
// TypeScript allows you to specifically type an object using an interface that can be reused by multiple objects.
    interface Person {
        name: string;
        age: number;
    }

    function greet(person: Person) {
        return 'Hello ' + person.name;
    }

    greet({name: 'John', age: 22})

// 2. Class
// https://www.typescriptlang.org/docs/handbook/2/classes.html
// In TypeScript, a class is a blueprint for creating objects with specific properties and methods. 
    class Car {
        make: string;
        model: string;
        year: number;

        constructor(make: string, model: string, year: number) {
            this.make = make;
            this.model = model;
            this.year = year;
        }

        drive() {
            console.log(`Driving my ${this.year} ${this.make} ${this.model}`);
            
        }
    }

    class Greeter {
        readonly name: string = "world";

        constructor(otherName?: string) {
            if (otherName !== undefined) {
                this.name = otherName
            }
        }

        err() {
            this.name = "not ok";
        }
    }

    const g = new Greeter();
    g.name = "also not ok";

// 3. Enum
    enum Direction {
        Up,     // default 0
        Down,   // default 1
        Left,   // default 2
        Right,  // default 3
    }

// 4. Array
    const numbers: number[] = [1,2,3]

// 5. Tuple
    type StringNumberPair = [string, number];
    const pair: StringNumberPair = ['hello', 42];

    const first = pair[0];
    const second = pair[1];
    const third = pair[2]

// 6. Object
    function printCoord(pt: {x: number; y: number}) {
        console.log(`The coordinate's x value is ${pt.x}`);
        console.log(`The coordinate's y value is ${pt.y}`);
    }
    printCoord({x: 3, y: 7})