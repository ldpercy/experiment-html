

class Point {
	#x=0;
	#y=0;

	constructor(x,y) {
		this.#x=x;
		this.#y=y;
	}
	toString = function() { return 'foo'; }

	get desc() {return `${this.#x},${this.#y}`;}
	set x(x) { this.#x=x; return 'blah'; }
}

p1 = new Point(1,1);

test = function(s) {
	//const result = `test1: ${p = new Point(1,2)}`;			// will define 'p' globally(?)
	//const result = `test2: ${var a = new Point(1,2)}`;		// syntax error
	//const result = `test3: ${const a = new Point(1,2)}`;		// syntax error
	//const result = `test3: ${let a = new Point(1,2)}`;		// different error

	o = {};
	const result = `test1: ${o.p = new Point(1,2)}`;


	return result;
}





class SVGChunk {
	#text;
	#defs;

	constructor(
		text = '',
		defs = ''
	) {
		this.#text = text;
		this.#defs = defs;
	}

	get text() { return this.#text; }
	get defs() { return this.#defs; }

	add = function(svgChunk) {
		this.#text += svgChunk.text;
		this.#defs += svgChunk.defs;
	}

	toString = function() {
		const result = `
			<defs>
				${this.#defs}
			</defs>
			${this.#text}`;
		return result;
	}

}/* SVGChunk */