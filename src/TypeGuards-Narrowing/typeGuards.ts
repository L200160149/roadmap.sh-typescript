// As we’ve seen, JavaScript supports a typeof operator which can give very basic information about the type of values we have at runtime. TypeScript expects this to return a certain set of strings:

// "string"
// "number"
// "bigint"
// "boolean"
// "symbol"
// "undefined"
// "object"
// "function"

function printAll(strs: string | string[] | null) {
    if (strs && typeof strs === "object") {
        for (const s of strs) {
            console.log(s);            
        }
    } else if (typeof strs === "string") {
        console.log(strs);
    }
}


function multiplyAll(
    values: number[] | undefined,
    factor: number
  ): number[] | undefined {
    if (!values) {
      return values;
    } else {
      return values.map((x) => x * factor);
    }
  }