//
//	Type compatibility
//
//	Type errors in here are intensional
//
console.info('type-compatibility.js')


console.groupCollapsed('acceptsAny');

	/**
	 * @param {any}	a
	 */
	function acceptsAny(a) { console.log(a) }

	acceptsAny();
	acceptsAny(1234);
	acceptsAny('Hello');
	acceptsAny(['an array']);
	acceptsAny({i:'an object'});
	acceptsAny(undefined);
	acceptsAny(null);
	acceptsAny(NaN);

	// All clear here

console.groupEnd();



console.groupCollapsed('acceptsUnknown');

	/**
	 * @param {unknown}	u
	 */
	function acceptsUnknown(u) { console.log(u) }

	acceptsUnknown();
	acceptsUnknown(1234);
	acceptsUnknown('Hello');
	acceptsUnknown(['an array']);
	acceptsUnknown({i:'an object'});
	acceptsUnknown(undefined);
	acceptsUnknown(null);
	acceptsUnknown(NaN);

	// All clear here as well

console.groupEnd();




console.groupCollapsed('acceptsObject');

	/**
	 * @param {object}	obj
	 */
	function acceptsObject(obj) { console.log(obj) }

	acceptsObject();					// interesting that this is fine
	acceptsObject(1234);
	acceptsObject('Hello');
	acceptsObject(['an array']);
	acceptsObject({i:'an object'});
	acceptsObject(undefined);
	acceptsObject(null);
	acceptsObject(NaN);

	// Looks like {object} will take just about anything - wonder if there's anything it actually won't accept? Maybe not... synonymous with 'any'?

console.groupEnd();




console.groupCollapsed('acceptsBoolean');

	/**
	 * @param {boolean}	b
	 */
	function acceptsBoolean(b) { console.log(b) }

	acceptsBoolean();						// Expected at least 1 arguments, but got 0.ts(2555)
	acceptsBoolean(1234);					// Argument of type 'number' is not assignable to parameter of type 'boolean'.ts(2345)
	acceptsBoolean('Hello');				// Argument of type 'string' is not assignable to parameter of type 'boolean'.ts(2345)
	acceptsBoolean(['an array']);			// Argument of type 'string[]' is not assignable to parameter of type 'boolean'.ts(2345)
	acceptsBoolean({i:'an object'});		// Argument of type '{ i: string; }' is not assignable to parameter of type 'boolean'.ts(2345)
	acceptsBoolean(undefined);
	acceptsBoolean(null);
	acceptsBoolean(NaN);					// Argument of type 'number' is not assignable to parameter of type 'boolean'.ts(2345)

console.groupEnd();



console.groupCollapsed('acceptsNumber');

	/**
	 * @param {number}	n
	 */
	function acceptsNumber(n) { console.log(n) }

	acceptsNumber();						// Expected at least 1 arguments, but got 0.ts(2555)
	acceptsNumber(1234);
	acceptsNumber('Hello');					// Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)
	acceptsNumber(['an array']);			// Argument of type 'string[]' is not assignable to parameter of type 'number'.ts(2345)
	acceptsNumber({i:'an object'});			// Argument of type '{ i: string; }' is not assignable to parameter of type 'number'.ts(2345)
	acceptsNumber(undefined);
	acceptsNumber(null);
	acceptsNumber(NaN);						// NaN is a number... chortle

console.groupEnd();



console.groupCollapsed('acceptsString');

	/**
	 * @param {string}	s
	 */
	function acceptsString(s) { console.log(s) }

	acceptsString();						// Expected at least 1 arguments, but got 0.ts(2555)
	acceptsString(1234);					// Argument of type 'number' is not assignable to parameter of type 'string'.ts(2345)
	acceptsString('Hello');
	acceptsString(['an array']);			// Argument of type 'string[]' is not assignable to parameter of type 'string'.ts(2345)
	acceptsString({i:'an object'});			// Argument of type '{ i: string; }' is not assignable to parameter of type 'string'.ts(2345)
	acceptsString(undefined);
	acceptsString(null);
	acceptsString(NaN);						// Argument of type 'number' is not assignable to parameter of type 'string'.ts(2345)

console.groupEnd();

