/* experiment-template.js
*/
console.clear();
log = createPageLog(document.getElementById('pageLog'));
log('experiment-template.js: run');
document.addEventListener('DOMContentLoaded', documentDOMContentLoaded);

function documentDOMContentLoaded() {
	log('experiment-template.js: document.DOMContentLoaded');
}



/* class Foo doesn't appear in any obvious namespace like window
*/
class Foo {
	constructor() { console.log("I'm a Class constructor") }
	log() { console.log("I'm a Class method") }
}





const obj1 = new Foo(); // I'm a Class constructor
obj1.log(); // I'm a Class method



classMap = {};

classMap.Foo1 = class {
	constructor() { console.log("Foo1 Class constructor") }
	log() { console.log("Foo1 Class method") }
}

classMap.Foo2 = class {
	constructor() { console.log("Foo2 Class constructor") }
	log() { console.log("Foo2 Class method") }
}


