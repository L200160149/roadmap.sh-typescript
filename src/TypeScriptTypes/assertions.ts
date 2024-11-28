// (*) assertions
// Type assertions are a way to override the default static type-checking behavior and tell the compiler that you know more about the type of a particular expression than it does.
// 1. As Type
    let someValue: any = "Hello, TS";
    let strLength: number = (someValue as string).length;
    console.log(strLength);
    
// 2. As Any
    let anyValue: any = 42;
    // we can assign any value to anyValue, regardless of its type
    anyValue = 'Hello, world!';
    anyValue = true;

// 3. As Const
    const colors = ['red', 'green', 'blue'] as const;
    // colors is now of type readonly ['red', 'green', 'blue']

// 4. Non null assertion
    let names: string | null = null;
    // we use the non-null assertion operator to tell the compiler that name will never be null
    let nameLength = names!.length;

