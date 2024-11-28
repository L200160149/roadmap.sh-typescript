// (*) Primitive Types
// 1. boolean
    let isTrue: boolean = true;
    let isFalse: boolean = false;

    isTrue = true
    isTrue = 'string'
// 2. number
    let intValue: number = 42;
    let floatValue: number = 3.14;
    intValue = 10
    intValue = '42'

// 3. string
    let names: string = 'John Doe';
    names = 'John Snow'
    names = false

// 4. void
    function noop() {
        return;
    }

// 5. undefined & 6. null
// JavaScript has two primitive values used to signal absent or uninitialized value: null (absent) and undefined (uninitialized).
    function doSomething(x: string | null) {
        if (x === null) {
            // do nothing
        } else {
            console.log('Hello, ' + x.toUpperCase());
            
        }
    }
    doSomething('John')