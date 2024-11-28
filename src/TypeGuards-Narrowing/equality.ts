// TypeScript also uses switch statements and equality checks like ===, !==, ==, and != to narrow types. For example:

function example(x: string | number, y: string | boolean) {
    if (x === y) {
        x.toUpperCase();
        y.toLowerCase();
    } else {
        console.log(x, y);
    }
}