//
//	arguments object
//
//	WARNING:
//	Make sure the compiler options are set to something modern, otherwise some of these fail
//	"target": "es2024", // es6, es2024



function f0(p) {

}

function f1() {

	const args1 = Array.prototype.slice.call(arguments);	// Does work
	// or
	const args2 = Array.from(arguments);					// Property 'from' does not exist on type 'ArrayConstructor'. Do you need to change your target library? Try changing the 'lib' compiler option to 'es2015' or later.ts(2550)
	// or
	const args3 = [...arguments];							// Type 'IArguments' is not an array type.ts(2461)

	const args = [...arguments];							// it does work actually, just need to set the compiler target to something recent

}

