// export const helloMessage = "hello";
// export const goodbyeMessage = "goodbye";

// export const hello = () => helloMessage;
// export const goodbye = () => goodbyeMessage;

const sqrt = Math.sqrt;
const square = (x) => x * x;
const sqrt2 = (x, y) => sqrt(square(x) + square(y));

export { square, sqrt2 };
