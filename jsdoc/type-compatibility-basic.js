//
//	Type compatibility - basic types
//
//	Type errors in here are intensional
//
/*
https://www.typescriptlang.org/docs/handbook/basic-types.html
https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
*/

export {};
console.info('type-compatibility-basic.js')
function clog(p) { console.log(typeof p, p) }


console.groupCollapsed('acceptsAny');

	/**
	 * @param {any}	a
	 */
	function acceptsAny(a) { clog(a) }

	acceptsAny();
	acceptsAny(1234);
	acceptsAny('Hello');
	acceptsAny(['an array']);
	acceptsAny({i:'an object'});
	acceptsAny(undefined);
	acceptsAny(null);
	acceptsAny(NaN);
	acceptsAny(()=>{});

	// All clear here

console.groupEnd();



console.groupCollapsed('acceptsUnknown');

	/**
	 * @param {unknown}	u
	 */
	function acceptsUnknown(u) { clog(u) }

	acceptsUnknown();
	acceptsUnknown(1234);
	acceptsUnknown('Hello');
	acceptsUnknown(['an array']);
	acceptsUnknown({i:'an object'});
	acceptsUnknown(undefined);
	acceptsUnknown(null);
	acceptsUnknown(NaN);
	acceptsUnknown(()=>{});

	// All clear here as well

console.groupEnd();




console.groupCollapsed('acceptsObject');

	/**
	 * @param {object}	obj
	 */
	function acceptsObject(obj) { clog(obj) }

	acceptsObject();					// interesting that this is fine
	acceptsObject(1234);
	acceptsObject('Hello');
	acceptsObject(['an array']);
	acceptsObject({i:'an object'});
	acceptsObject(undefined);
	acceptsObject(null);
	acceptsObject(NaN);
	acceptsObject(()=>{});

	// Looks like {object} will take just about anything - wonder if there's anything it actually won't accept? Maybe not... synonymous with 'any'?

console.groupEnd();




console.groupCollapsed('acceptsBoolean');

	/**
	 * @param {boolean}	b
	 */
	function acceptsBoolean(b) { clog(b) }

	acceptsBoolean();						// Expected 1 arguments, but got 0.ts(2554)
	acceptsBoolean(1234);					// Argument of type 'number' is not assignable to parameter of type 'boolean'.ts(2345)
	acceptsBoolean('Hello');				// Argument of type 'string' is not assignable to parameter of type 'boolean'.ts(2345)
	acceptsBoolean(['an array']);			// Argument of type 'string[]' is not assignable to parameter of type 'boolean'.ts(2345)
	acceptsBoolean({i:'an object'});		// Argument of type '{ i: string; }' is not assignable to parameter of type 'boolean'.ts(2345)
	acceptsBoolean(undefined);
	acceptsBoolean(null);
	acceptsBoolean(NaN);					// Argument of type 'number' is not assignable to parameter of type 'boolean'.ts(2345)
	acceptsBoolean(()=>{});					// Argument of type '() => void' is not assignable to parameter of type 'boolean'.ts(2345)

console.groupEnd();



console.groupCollapsed('acceptsNumber');

	/**
	 * @param {number}	n
	 */
	function acceptsNumber(n) { clog(n) }

	acceptsNumber();						// Expected 1 arguments, but got 0.ts(2554)
	acceptsNumber(1234);
	acceptsNumber('Hello');					// Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)
	acceptsNumber(['an array']);			// Argument of type 'string[]' is not assignable to parameter of type 'number'.ts(2345)
	acceptsNumber({i:'an object'});			// Argument of type '{ i: string; }' is not assignable to parameter of type 'number'.ts(2345)
	acceptsNumber(undefined);
	acceptsNumber(null);
	acceptsNumber(NaN);						// NaN is a number... chortle
	acceptsNumber(()=>{});					// Argument of type '() => void' is not assignable to parameter of type 'number'.ts(2345)

console.groupEnd();



console.groupCollapsed('acceptsString');

	/**
	 * @param {string}	s
	 */
	function acceptsString(s) { clog(s) }

	acceptsString();						// Expected 1 arguments, but got 0.ts(2554)
	acceptsString(1234);					// Argument of type 'number' is not assignable to parameter of type 'string'.ts(2345)
	acceptsString('Hello');
	acceptsString(['an array']);			// Argument of type 'string[]' is not assignable to parameter of type 'string'.ts(2345)
	acceptsString({i:'an object'});			// Argument of type '{ i: string; }' is not assignable to parameter of type 'string'.ts(2345)
	acceptsString(undefined);
	acceptsString(null);
	acceptsString(NaN);						// Argument of type 'number' is not assignable to parameter of type 'string'.ts(2345)
	acceptsString(()=>{});					// Argument of type '() => void' is not assignable to parameter of type 'string'.ts(2345)

console.groupEnd();




console.groupCollapsed('acceptsFunction');

	/**
	 * @param {function}	p
	 */
	function acceptsFunction(p) { clog(p) }

	acceptsFunction();						// Expected 1 arguments, but got 0.ts(2554)
	acceptsFunction(1234);					// Argument of type 'number' is not assignable to parameter of type 'Function'.ts(2345)
	acceptsFunction('Hello');				// Argument of type 'string' is not assignable to parameter of type 'Function'.ts(2345)
	acceptsFunction(['an array']);			// Argument of type 'string[]' is not assignable to parameter of type 'Function'.
	acceptsFunction({i:'an object'});		// Object literal may only specify known properties, and 'i' does not exist in type 'Function'.ts(2353)
	acceptsFunction(undefined);
	acceptsFunction(null);
	acceptsFunction(NaN);					// Argument of type 'number' is not assignable to parameter of type 'Function'.ts(2345)
	acceptsFunction(()=>{});

console.groupEnd();