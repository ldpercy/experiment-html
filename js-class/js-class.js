/* experiment-template.js
*/
console.clear();
log = createPageLog(document.getElementById('pageLog'));
log('experiment-template.js: run');
document.addEventListener('DOMContentLoaded', documentDOMContentLoaded);

function documentDOMContentLoaded() {
	log('experiment-template.js: document.DOMContentLoaded');
}



/* class Foo doesn't appear in any obvious namespace like window

class Foo {
	constructor() { console.log("I'm a Class constructor") }
	log() { console.log("I'm a Class method") }
}

const obj1 = new Foo(); // I'm a Class constructor
obj1.log(); // I'm a Class method

*/
/*
classMap = {};

classMap.Foo1 = class {
	constructor() { console.log("Foo1 Class constructor") }
	log() { console.log("Foo1 Class method") }
}

classMap.Foo2 = class {
	constructor() { console.log("Foo2 Class constructor") }
	log() { console.log("Foo2 Class method") }
}
 */



class ClassA {
	constructor(desc) {
		log("ClassA constructor")
		this.desc = desc;
	}

	name = 'This is class A';
	desc = 'Default desc';
	info = 'Some info';

	reportThis() {
		log(this);
	}

	testMethod() {
		log('This is testMethod in Class A');
	}

}

/* you can declare this class error-free, but to instantiate it a call to super() is required in the */
class ClassB extends ClassA {
	constructor() {
		super();	// this is required
		log("ClassB constructor")
	}

	name = 'This is class B';

	testMethod() {
		super.testMethod();
		log('This is testMethod in Class B');
	}

}


ca = new ClassA('asdf');
ca.reportThis();

cb = new ClassB()
cb.reportThis();


/*
property and method inheritance appear to work normally

*/