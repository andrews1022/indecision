class Person {
	constructor(name = 'Anonymous', age = 0) {
		this.name = name;
		this.age = age;
	}

	getGreeting() {
		return `Hi, I am ${this.name}.`;
	}

	getDescription() {
		return `${this.name} is ${this.age} year(s) old.`;
	}
}

// Creating a subclass
class Student extends Person {
	// set up constructor in sub class
	// parameters for the constructor function for the sub class will be the same as the parent class, as well as any new ones
	constructor(name, age, major) {
		// we need to call the parent class constructor function
		// to do that, we use super()
		super(name, age); // we pass in the same parameters found in the parent constructor
		this.major = major;
	}

	// settings up methods in subclass
	// methods in the subclass CAN NOT be access in the parent
	hasMajor() {
		// side note: using !! converts truthy/falsy value into pure boolean true/false value
		return !!this.major;
	}

	// but we can override methods from the parent in the subclass
	// define the exact same method name
	// in the method body, we can completely change the logic
	getDescription() {
		// we can call the parent version of the method and use that as well
		// we do that by calling super, followed by the method name
		// you would also enter in any arguments as needed. here, there are none
		// here, we store it in this 'description' variable
		let description = super.getDescription();

		// check if the student has a major
		// if they do, add it onto the string returned by getDescription()
		if (this.hasMajor()) {
			description += ` Their is major is ${this.major}`;
		}

		return description;
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

const newMe = new Student('Andrew Shearer', 28, 'Computer Science');
console.log(newMe);
console.log(newMe.getDescription());
console.log(newMe.hasMajor());
console.log(newMe.getDescription());

const newOther = new Student();
console.log(newOther);
console.log(newOther.getDescription());
console.log(newOther.hasMajor());
console.log(newOther.getDescription());

/////////////////////////
// challenge
// create new Traveler class, which extends from Person
// and new property: homeLocation
// override getGretting in traveler class
// 1. if there is a home location, include that in the message
// example: 'Hi. I am NAME. I'm visiting from HOMELOCATION'
// 2. if there is no home location, stick with parent string
// example: 'Hi. I am NAME.'

// solution
class Traveler extends Person {
	constructor(name, age, homeLocation) {
		super(name, age);
		this.homeLocation = homeLocation;
	}

	getGreeting() {
		let greeting = super.getGreeting();

		// check if this.homeLocation is a truthy value
		if (this.homeLocation) {
			greeting += ` I'm visiting from ${this.homeLocation}.`;
		}

		return greeting;
	}
}

const traveler1 = new Traveler('Andrew Shearer', 28, 'Vancouver');
console.log(traveler1);
console.log(traveler1.getGreeting());

const traveler2 = new Traveler();
console.log(traveler2);
console.log(traveler2.getGreeting());
