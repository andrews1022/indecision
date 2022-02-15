function square(x) {
  return x * x;
}

console.log(square(3));

const squareArrow = (x) => {
  return x * x;
};

const squareArrow = (x) => x * x;

console.log(squareArrow(4));

/////////////////////////
// challenge - use arrow functions
// getFirstName('Mike Smith') -> "Mike"
// Create regular arrow function
// Create arrow function using shorthand syntax

// solution
const getFirstName = (fullName) => {
  return fullName.split(' ')[0];
};

const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Andrew Mead'));
