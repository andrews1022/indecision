console.log('utils.js is running! :)');

// --- V1 ---
// const square = (x) => x * x;
// const add = (a, b) => a + b;
// const subtract = (a, b) => a - b;

// export as many functions as you like, separated by commas
// export { square, add, subtract };

// --- V2 ---
// add export keyword inline - no need for { }
// export const square = (x) => x * x;
// export const add = (a, b) => a + b;
// export const subtract = (a, b) => a - b;

// --- V3 ---
// const square = (x) => x * x;
// const add = (a, b) => a + b;
// const subtract = (a, b) => a - b;

// can add 'as default' in line
// export { square, add, subtract as default };

// --- V4 ---
export const square = (x) => x * x;
export const add = (a, b) => a + b;

// export default
const subtract = (a, b) => a - b;
export default subtract; // reference an expression
