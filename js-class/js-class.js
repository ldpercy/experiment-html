/* experiment-template.js
*/
console.clear();
log = createPageLog(document.getElementById('pageLog'));
log('experiment-template.js: run');
document.addEventListener('DOMContentLoaded', documentDOMContentLoaded);

function documentDOMContentLoaded() {
	log('experiment-template.js: document.DOMContentLoaded');


	p1 = new Point(1,1);

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



class MyClass {
	// cannot have function calls in this space

	name    = 'Default MyClass name';
	desc    = 'Default MyClass desc';
	summary = `Name: ${this.name}; Description: ${this.desc};`
	myClassSummary = `Name: ${this.name}; Description: ${this.desc}; Additional: ${this.additional};`

	constructor(name, desc, additional) {
		log("MyClass.constructor:"); //, this
		this.name = name;
		this.desc = desc;
		this.additional = additional;
	}

	reportThis() {
		log('reportThis:', this);
	}

	testMethod() {
		log('This is testMethod in MyClass');
	}


	test2() {
		log('This is test2 in MyClass');
		this.testMethod();
	}


	/* Accessors
	Not sure what getters are actually doing yet.. don't think I'm doing it right
	Ah looks like you can't have a property *and* getter function with the same name - the property overrides the fn
	So getters aren't all that useful for ordinary fields, but can be used for private fields, and good for complex properties.
	*/

	//foo = ' this is foo '; // cannot have a getter of this name
	#private = 'this is a private var';

	get foo() { /* return this.foo */ }
	set foo(param) { this.foo = param; }

	get private() { return this.#private; }
	set private(param) { this.#private = param; }


}/* MyClass */




class SubClass extends MyClass {

	name = 'Default SubClass name';
	subClassSummary = `Name: ${this.name}; Description: ${this.desc}; Additional: ${this.additional};`

	constructor() {
		super();	// this is required
		/*
		The super call must explicitly pass parameters, or they will be undefined
		*/
		log("SubClass constructor")
	}

	testMethod() {
		super.testMethod();
		log('This is testMethod in SubClass');
	}

}/* SubClass */


mc = new MyClass('MyClass 1', 'New instance of MyClass');
//mc.reportThis();

sc = new SubClass()
//sc.reportThis();




/* Passing arguments to super
*/
class C0 {
	constructor(param) {
		this.param=param;
		//log('this:', this);
	}

	f0() { log('c0.f0') }
}

class C1 extends C0 {
	f0() { log('c1.f0') }
}
class C2 extends C1 {
	f0() { log('c2.f0') }
}
class C3 extends C2 {
	f0() { log('c3.f0') }
}

c0 = new C0();
c1 = new C1();
c3 = new C2();
c3 = new C3();



class Point {
	constructor(x,y) {
		this.x=x;
		this.y=y;
	}
	toString = function() { return 'foo'; }
}


class SVGChunk {
	constructor(
		text = '',
		defs = ''
	) {
		this.text = text;
		this.defs = defs;
	}

	add = function(svgChunk) {
		this.text += svgChunk.text;
		this.defs += svgChunk.defs;
	}




	/*toString = function() {
		const result = `
			<defs>
				${this.defs}
			</defs>
			${this.text}`;
		return result;
	}*/
}/* SVGChunk */



test = function(s) {
	//const result = `test1: ${p = new Point(1,2)}`;			// will define 'p' globally(?)
	//const result = `test2: ${var a = new Point(1,2)}`;		// syntax error
	//const result = `test3: ${const a = new Point(1,2)}`;		// syntax error
	//const result = `test3: ${let a = new Point(1,2)}`;		// different error

	o = {};
	const result = `test1: ${o.p = new Point(1,2)}`;


	return result;
}
