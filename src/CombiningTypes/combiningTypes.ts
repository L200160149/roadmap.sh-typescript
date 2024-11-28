// 1. Type Union
// The union operator | is used to combine two or more types into a single type that represents all the possible types.
    type stringOrNumber = string | number;
    let value: stringOrNumber = 'Hello, world!';
    
    value = 42;

// 2. Type Intersection
// The intersection operator & is used to intersect two or more types into a single type that represents the properties of all the types.
    interface A {
        a: string;
    }

    interface B {
        b: number;
    }

    type AB = A & B;
    let obj: AB = { a: 'Hello', b: 42 };