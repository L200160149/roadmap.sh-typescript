// The typeof operator is used to check the type of a variable. It returns a string value representing the type of the variable.

let values: string | number = "hello";

if (typeof values === "string") {
    console.log('values is a string');
} else {
    console.log('values is a number');
}