//
// inner-class.js
//


class OuterClass {

	name = 'initial OuterClass name';

	constructor(name) {
		this.name = name;
	}

	/* This is a syntax error:

	class InnerClass {
		name = 'initial InnerClass name';
		constructor(name) {
			this.name = name;
		}
	}
	*/

	// These work:

	InnerClass = class {
		name = 'InnerClass';
		constructor(name) {	this.name = name; }
	}/* InnerClass */

	static StaticInnerClass = class {
		name = 'StaticInnerClass';
		constructor(name) {	this.name = name; }
	}/* StaticInnerClass */


}/* OuterClass */



OuterClass.QuasiInnerClass = class {
	name = 'initial QuasiInnerClass name';

	constructor(name) {
		this.name = name;
	}

}/* OuterClass.QuasiInnerClass */


let oc = new OuterClass('outer class');

let ic = new oc.InnerClass('inner class');

let sic = new OuterClass.StaticInnerClass('static inner class');

let qic = new OuterClass.QuasiInnerClass('quasi-inner class');
