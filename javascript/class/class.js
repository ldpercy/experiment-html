//
//	class.js
//




/* BaseClass
*/
class BaseClass {
	name    = 'Initial BaseClass name';
	desc    = 'Initial BaseClass description';
	summary = `Name: ${this.name}; Description: ${this.desc};`
	#basePrivate = 'BaseClass private';

	constructor(name, desc, additional) {
		console.log("BaseClass.constructor:"); //, this
		this.name = name;
		this.desc = desc;
		this.additional = additional;
	}

	// Accessors

	get private() { return this.#basePrivate; }
	set private(param) { this.#basePrivate = param; }

	// methods

	baseClassMethod()	{	console.log('BaseClass.baseClassMethod');	}
	commonMethod()		{	console.log('BaseClass.commonMethod');	}
	baseCallCommon() {
		console.log('This is baseCallCommon in BaseClass');
		this.commonMethod();
	}
	#basePrivateMethod()	{	console.log('BaseClass.#basePrivateMethod');	}

	this() { console.log('BaseClass this:', this); }
	toString() {
		const result = `
			BaseClass.toString()
			Name: ${this.name};
			Description: ${this.desc};
			#basePrivate: ${this.#basePrivate};

		`;

		//#subPrivate: ${this.#subPrivate}; // syntax error
		return result;
	}

}/* BaseClass */


/* SubClass
*/
class SubClass extends BaseClass {
	name = 'Initial SubClass name';
	subClassSummary = `Name: ${this.name}; Description: ${this.desc}; Additional: ${this.additional};`
	#subPrivate = 'SubClass private';

	constructor() {
		super(...arguments);	// a super call is required
	}

	// methods

	subClassMethod()	{	console.log('SubClass.subClassMethod'); }
	commonMethod()		{	console.log('SubClass.commonMethod'); 	}
	subCallCommon() {
		console.log('This is subCallCommon in SubClass');
		this.commonMethod();
	}
	#subPrivateMethod()	{	console.log('SubClass.#subPrivateMethod');	}

	// If all the methods are masked by the subclass, the super never gets called.

	this() { console.log('SubClass this:', this); }
	toString() {
		const result = `
			SubClass.toString()
			Name: ${this.name};
			Description: ${this.desc};
			#subPrivate: ${this.#subPrivate};
		`;
		// #basePrivate: ${this.#basePrivate}; // syntax error
		return result;
	}
	superString() { return super.toString(); }

}/* SubClass */




/* Passing arguments to super

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
*/

