// arguments object - no longer bound with arrow functions
const add = (a, b) => {
  // console.log(arguments); // will produce ReferenceError
  return a + b;
};
console.log(add(55, 1, 1001));

// this keyword - no longer bound
const user = {
  name: 'Andrew',
  cities: ['Vancouver', 'Toronto'],
  printPlacesLived() {
    console.log(this.name); // 'this' is accessible
    console.log(this.cities); // 'this' is accessible

    this.cities.forEach(function (city) {
      console.log(`${this.name} has lived in ${city}`); // 'this' is NOT accessible
      // it is NOT accessible because it is being called in a regular function
      // at this point, the 'this' keyword is bound to the global (window) object
    });

    this.cities.forEach((city) => {
      console.log(`${this.name} has lived in ${city}`); // 'this' is accessible
    });

    return this.cities.map((city) => `${this.name} has lived in ${city}`);
  },
  printPlacesLivedArrow = () => {
    console.log(this.cities); // 'this' is NOT accessible
  }
};
console.log(user.printPlacesLived());

/////////////////////////
// Challenge area
const multiplier = {
  numbers: [10, 20, 30],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  },
};

console.log(multiplier.multiply());
