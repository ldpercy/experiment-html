//
// inner-class.js
//


class OuterClass {

	name = 'initial OuterClass name';

	constructor(name) {
		this.name = name;
	}


	static InnerClass = class {
		name = 'initial InnerClass name';

		constructor(name) {
			this.name = name;
		}
	}/* InnerClass */


}/* OuterClass */



OuterClass.QuasiInnerClass = class {
	name = 'initial QuasiInnerClass name';

	constructor(name) {
		this.name = name;
	}

}/* OuterClass.QuasiInnerClass */


oc = new OuterClass('outer class');

ic = new OuterClass.InnerClass('inner class');

qic = new OuterClass.QuasiInnerClass('quasi-inner class');
