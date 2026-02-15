
console.info('export.js');


export {
	BaseFoo,
	SubFoo
}


class BaseFoo {
	constructor() {}
}

class SubFoo extends BaseFoo{
	constructor() {
		super();
	}
}
