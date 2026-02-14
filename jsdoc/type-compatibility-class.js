//
//	Type compatibility - classes and instances
//
//	Type errors in here are intensional
//
export {};
console.info('type-compatibility-class.js');
function clog(p) {
	console.log(typeof p, p);
	if (typeof p === 'function') { console.log('Construct', new p); }
}




class BaseClass1 {
	constructor() {

	}
}/* BaseClass */

class SubClass1 extends BaseClass1{
	constructor() {
		super();
	}
}/* SubClass */




console.groupCollapsed('acceptsAny');	//

	/**
	 * @param {any}	a
	 */
	function acceptsAny(a) { clog(a) }

	acceptsAny( BaseClass1 );
	acceptsAny( new BaseClass1 );
	acceptsAny( new BaseClass1() );
	acceptsAny( SubClass1 );
	acceptsAny( new SubClass1 );
	acceptsAny( new SubClass1() );

	// All clear here

console.groupEnd();



console.groupCollapsed('acceptsUnknown'); //

	/**
	 * @param {unknown}	u
	 */
	function acceptsUnknown(u) { clog(u) }

	acceptsUnknown( BaseClass1 );
	acceptsUnknown( new BaseClass1() );
	acceptsUnknown( SubClass1 );
	acceptsUnknown( new SubClass1() );

	// All clear here as well

console.groupEnd();


console.groupCollapsed('acceptsObject'); //

	/**
	 * @param {object}	obj
	 */
	function acceptsObject(obj) { clog(obj) }

	acceptsObject( BaseClass1 );
	acceptsObject( new BaseClass1() );
	acceptsObject( SubClass1 );
	acceptsObject( new SubClass1() );

console.groupEnd();



console.groupCollapsed('acceptsBoolean'); // Collapsed

	/**
	 * @param {boolean}	p
	 */
	function acceptsBoolean(p) { clog(p) }

	acceptsBoolean( BaseClass1 );				//	Argument of type 'typeof BaseClass1' is not assignable to parameter of type 'boolean'.ts(2345)
	acceptsBoolean( new BaseClass1() );			//	Argument of type 'BaseClass1' is not assignable to parameter of type 'boolean'.ts(2345)
	acceptsBoolean( SubClass1 );				//	Argument of type 'typeof SubClass1' is not assignable to parameter of type 'boolean'.ts(2345)
	acceptsBoolean( new SubClass1() );			//	Argument of type 'SubClass1' is not assignable to parameter of type 'boolean'.ts(2345)

	// These clearly don't work, but the type errors are interesting
	// Give the same kind of 'not assignable' errors if you change the param to a different simple type like number or string

console.groupEnd();




console.group('acceptsFunction');

	/**
	 * @param {function}	p
	 */
	function acceptsFunction(p) { clog(p) }

	acceptsFunction( BaseClass1 );
	acceptsFunction( new BaseClass1() );
		// Argument of type 'BaseClass1' is not assignable to parameter of type 'Function'. Type 'BaseClass1' is missing the following properties from type 'Function': apply, call, bind, prototype, and 5 more.ts(2345)
	acceptsFunction( SubClass1 );
	acceptsFunction( new SubClass1() );
		// Argument of type 'SubClass1' is not assignable to parameter of type 'Function'. Type 'SubClass1' is missing the following properties from type 'Function': apply, call, bind, prototype, and 5 more.ts(2345)

	// Classes typecheck, instances do not

console.groupEnd();



console.group('acceptsBaseClass1');

	/**
	 * @param {BaseClass1}	p
	 */
	function acceptsBaseClass1(p) { clog(p) }

	acceptsBaseClass1( BaseClass1 );
	acceptsBaseClass1( new BaseClass1() );
	acceptsBaseClass1( SubClass1 );
	acceptsBaseClass1( new SubClass1() );

	// These all pass

console.groupEnd();



console.group('acceptsTypeofBaseClass1');

	/**
	 * @param {typeof BaseClass1}	p
	 */
	function acceptsTypeofBaseClass1(p) { clog(p) }

	acceptsTypeofBaseClass1( BaseClass1 );
	acceptsTypeofBaseClass1( new BaseClass1() );
		// Argument of type 'BaseClass1' is not assignable to parameter of type 'typeof BaseClass1'. Property 'prototype' is missing in type 'BaseClass1' but required in type 'typeof BaseClass1'.ts(2345)
	acceptsTypeofBaseClass1( SubClass1 );
	acceptsTypeofBaseClass1( new SubClass1() );
		// Argument of type 'SubClass1' is not assignable to parameter of type 'typeof BaseClass1'. Property 'prototype' is missing in type 'SubClass1' but required in type 'typeof BaseClass1'.ts(2345)

	// instances not accepted here; not sure if it's just type-shape though

console.groupEnd();



console.group('acceptsSubClass1');	//Collapsed

	/**
	 * @param {SubClass1}	p
	 */
	function acceptsSubClass1(p) { clog(p) }

	acceptsSubClass1( BaseClass1 );
	acceptsSubClass1( new BaseClass1() );
	acceptsSubClass1( SubClass1 );
	acceptsSubClass1( new SubClass1() );

	// These all pass too... maybe it's more to do with exact shape of the *thing*

console.groupEnd();




console.group('acceptsTypeofSubClass1');

	/**
	 * @param {typeof SubClass1}	p
	 */
	function acceptsTypeofSubClass1(p) { clog(p) }

	acceptsTypeofSubClass1( BaseClass1 );
	acceptsTypeofSubClass1( new BaseClass1() );
		// Argument of type 'BaseClass1' is not assignable to parameter of type 'typeof BaseClass1'. Property 'prototype' is missing in type 'BaseClass1' but required in type 'typeof BaseClass1'.ts(2345)
	acceptsTypeofSubClass1( SubClass1 );
	acceptsTypeofSubClass1( new SubClass1() );
		// Argument of type 'SubClass1' is not assignable to parameter of type 'typeof BaseClass1'. Property 'prototype' is missing in type 'SubClass1' but required in type 'typeof BaseClass1'.ts(2345)

	// instances not accepted here; not sure if it's just type-shape though

console.groupEnd();
