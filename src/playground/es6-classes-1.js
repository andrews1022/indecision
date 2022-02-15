// the goal is to use classes to reuse code
// we're going to define a class which is like a blueprint, and we'll be able to make multiple instances of that class for the individual items

class Person {
	// the constructor function is the function that gets called when we make a new instance and it gets called with all of the arguments we pass in
	constructor(name = 'Anonymous', age = 0) {
		// can use default
		// inside of our class methods we use te 'this' keyword
		// inside of class methods, 'this' refers to the class instance
		this.name = name;
		this.age = age;
	}

	// methods allow us to reuse code across every instance of a person
	// unlike the constructor function which has a specific name and gets implicitly called to we make a new instance, any methods we define have a name that we pick
	// this method will also only run if we call it explicity
	getGreeting() {
		return `Hi, I am ${this.name}`;
	}

	getDescription() {
		return `${this.name} is ${this.age} year(s) old.`;
	}
}

const me = new Person('Andrew Shearer', 28);
console.log(me);
console.log(me.getGreeting()); // calling a class method
console.log(me.getDescription());

// you don't have to pass in all arguments, and any defaults would be used
const other = new Person();
console.log(other);
console.log(other.getGreeting());
console.log(other.getDescription());

/////////////////////////
// challenge
// add an optional item to constructor - age, default to 0
// add new method, getDescription
// getDescription will return take in name and age: 'NAME is AGE year(s) old.'

// solution
// see above
