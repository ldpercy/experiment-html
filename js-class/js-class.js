/* experiment-template.js
*/
console.clear();
log = createPageLog(document.getElementById('pageLog'));
log('js-class.js: run');
document.addEventListener('DOMContentLoaded', documentDOMContentLoaded);

function documentDOMContentLoaded() {
	log('js-class.js: document.DOMContentLoaded');
}




class BaseClass {
	// cannot have function calls in the initialisation area

	name    = 'Initial BaseClass name';
	desc    = 'Initial BaseClass description';
	summary = `Name: ${this.name}; Description: ${this.desc};`
	//baseClassSummary = `Name: ${this.name}; Description: ${this.desc}; Additional: ${this.additional};`

	constructor(name, desc, additional) {
		log("BaseClass.constructor:"); //, this
		this.name = name;
		this.desc = desc;
		this.additional = additional;
	}

	baseClassMethod() {
		log('This is baseClassMethod');
	}

	commonMethod() {
		log('This is commonMethod in BaseClass');
	}

	baseCallCommon() {
		log('This is baseCallCommon in BaseClass');
		this.commonMethod();
	}


	#private = 'this is a private var';
	get private() { return this.#private; }
	set private(param) { this.#private = param; }


	reportThis() { log('reportThis:', this); }
	toString() { return this; }

}/* BaseClass */




class SubClass extends BaseClass {

	name = 'Initial SubClass name';
	subClassSummary = `Name: ${this.name}; Description: ${this.desc}; Additional: ${this.additional};`

	constructor() {
		super();	// this is required
		/* The super call must explicitly pass parameters, or they will be undefined */
		log("SubClass constructor")
	}

	subClassMethod() {
		log('This is subClassMethod');
	}

	commonMethod() {
		//super.commonMethod();
		log('This is commonMethod in SubClass');
	}

	subCallCommon() {
		log('This is subCallCommon in SubClass');
		this.commonMethod();
	}

	/*
	If all the methods are masked by the subclass, the super never gets called.
	*/


}/* SubClass */


bc = new BaseClass('BaseClass 1', 'New instance of BaseClass');
//mc.reportThis();

sc = new SubClass('SubClass 1', 'New instance of SubClass')
//sc.reportThis();




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

