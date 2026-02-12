//
//	Subclass constructor type
//
//	Seeing what effects different kinds of subclass constructors and their types have
//
export {}			// here so that the compiler interprets the file as a module to prevent name collisions





//
//	Experiment 0
//	No types, no params in the base class:
//
class Base0 {
	constructor() { }
}

// no types, no params in the subclass
class Sub00 extends Base0 {

	constructor() {
		super();					// This is fine
		//super(arguments);			//	Expected 0 arguments, but got 1.ts(2554)
		//super(...arguments);		//	A spread argument must either have a tuple type or be passed to a rest parameter.ts(2556)	;	Type 'IArguments' is not an array type.ts(2461)
		//super([...arguments]);	//	Expected 0 arguments, but got 1.ts(2554)			;	Type 'IArguments' is not an array type.ts(2461)
		//super(arguments[0]);		//	Expected 0 arguments, but got 1.ts(2554)
	}

}/* Sub00 */

// add an untyped param to the sub-constructor
class Sub01 extends Base0 {

	constructor(p) {
		super();					// This is fine
		//super(arguments);			//	Expected 0 arguments, but got 1.ts(2554)
		//super(...arguments);		//	A spread argument must either have a tuple type or be passed to a rest parameter.ts(2556)	;	Type 'IArguments' is not an array type.ts(2461)
		//super([...arguments]);	//	Expected 0 arguments, but got 1.ts(2554)			;	Type 'IArguments' is not an array type.ts(2461)
		//super(arguments[0]);		//	Expected 0 arguments, but got 1.ts(2554)
	}

}/* Sub01 */


// add a loosely typed param to the sub-constructor - same as the above untyped version
class Sub02 extends Base0 {

	/**
	 * @param {any} p
	 */
	constructor(p) {
		super();					// This is fine
		//super(arguments);			//	Expected 0 arguments, but got 1.ts(2554)
		//super(...arguments);		//	A spread argument must either have a tuple type or be passed to a rest parameter.ts(2556)	;	Type 'IArguments' is not an array type.ts(2461)
		//super([...arguments]);	//	Expected 0 arguments, but got 1.ts(2554)			;	Type 'IArguments' is not an array type.ts(2461)
		//super(arguments[0]);		//	Expected 0 arguments, but got 1.ts(2554)
	}

}/* Sub02 */

// add a more restrictive type to the sub-constructor - also the same
class Sub03 extends Base0 {

	/**
	 * @param {string} s
	 */
	constructor(s) {
		super();					// This is fine
		//super(arguments);			//	Expected 0 arguments, but got 1.ts(2554)
		//super(...arguments);		//	A spread argument must either have a tuple type or be passed to a rest parameter.ts(2556)	;	Type 'IArguments' is not an array type.ts(2461)
		//super([...arguments]);	//	Expected 0 arguments, but got 1.ts(2554)			;	Type 'IArguments' is not an array type.ts(2461)
		//super(arguments[0]);		//	Expected 0 arguments, but got 1.ts(2554)
	}

}/* Sub03 */



//
//	Experiment 1
//	One {any} parameter in the base class's constructor:
//

class Base1 {

	/**
	 * @param {any} p
	 */
	constructor(p) {
		this.p = p;
	}

}/* Base1 */

// no types, no params in the subclass
class Sub10 extends Base1 {

	constructor() {
		//super();					// This is fine
		//super(arguments);			// Also fine, might not be doing what you want it to though
		//super(...arguments);		//	A spread argument must either have a tuple type or be passed to a rest parameter.ts(2556)	;	Type 'IArguments' is not an array type.ts(2461)
		//super([...arguments]);	//	Type 'IArguments' is not an array type.ts(2461)
		super(arguments[0]);		// This also works
	}

}/* Sub10 */

// typed param in the subclass constructor
class Sub11 extends Base1 {

	/**
	 * @param {any} p
	 */
	constructor(p) { 				// p required here
		super();					// This is fine
		//super(arguments);			// Also fine, might not be doing what you want it to though
		//super(...arguments);		//	A spread argument must either have a tuple type or be passed to a rest parameter.ts(2556)	;	Type 'IArguments' is not an array type.ts(2461)
		//super([...arguments]);	//	Type 'IArguments' is not an array type.ts(2461)
		//super(arguments[0]);		// This also works

		console.log([...arguments])
	}

}/* Sub11 */













// One {string} constructor parameter:
//
class BaseS {

	/**
	 * @param {string} s
	 */
	constructor(s) {
		this.s = s;
	}

}/* BaseS */


class SubS0 extends BaseS {

	constructor() {
		//super();					//	Expected 1 arguments, but got 0.ts(2554)
		//super(arguments);			//	Argument of type 'IArguments' is not assignable to parameter of type 'string'.ts(2345)
		//super(...arguments);		//	A spread argument must either have a tuple type or be passed to a rest parameter.ts(2556)	;	Type 'IArguments' is not an array type.ts(2461)
		//super([...arguments]);	//	Argument of type 'any[]' is not assignable to parameter of type 'string'.ts(2345)			;	Type 'IArguments' is not an array type.ts(2461)
		super(arguments[0]);		// This one works for this particular case
	}

}/* SubS0 */



/* SubS1
*/
class SubS1 extends BaseS {

	constructor(s) {	// similar to above
		//super();					//	Expected 1 arguments, but got 0.ts(2554)
		//super(s);					// This is fine
		//super(arguments);			//	Argument of type 'IArguments' is not assignable to parameter of type 'string'.ts(2345)
		//super(...arguments);		//	A spread argument must either have a tuple type or be passed to a rest parameter.ts(2556)	;	Type 'IArguments' is not an array type.ts(2461)
		//super([...arguments]);	//	Argument of type 'any[]' is not assignable to parameter of type 'string'.ts(2345)			;	Type 'IArguments' is not an array type.ts(2461)
		super(arguments[0]);		// This is also fine
	}

}/* SubS1 */




