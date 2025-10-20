ldpercy.Date = class extends Date {

	constructor(date) {
		super(date);
	}


	// mutators:

	incrementDay() {
		this.setDate(this.getDate() + 1);
	}

	decrementDay() {
		this.setDate(this.getDate() - 1);
	}

	isValid() {
		//https://stackoverflow.com/a/1353711
		return this instanceof Date && !isNaN(this);		// it looks like this works okay, think it looks up the whole tree
	}





}/* ldpercy.Date */