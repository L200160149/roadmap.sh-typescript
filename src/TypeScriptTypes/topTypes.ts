// (*) Top Types
// // 1. Unknown
// // unknown is the type-safe counterpart of any. Anything is assignable to unknown, but unknown isn’t assignable to anything but itself and any without a type assertion or a control flow based narrowing. Likewise, no operations are permitted on an unknown without first asserting or narrowing to a more specific type.
//     function f1(a: any) {
//         a.b(); // OK
//     }
//     function f2(a: unknown) {
//         // 'a' is of type 'unknown'
//         a.b();
//     }

// // 2. Any
//     let obj: any = {x: 0}
//     obj.foo();
//     obj();
//     obj.bar = 100;
//     obj = 'hello';
//     const n: number = obj;