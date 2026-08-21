/*
**	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
*/




/**
 * @param {any} any
 * @return {string}
 */
export function render(any) {
	let result = '';

	switch (typeof any) {
		case 'undefined':	result = `<code>undefined</code>`;	break;
		case 'boolean':		result = `<code>${any}</code>`;		break;
		case 'string':		result = `<span>${any}</span>`;		break;
		case 'number':		result = `<span>${any}</span>`;		break;
		case 'bigint':		result = `<span>${any}</span>`;		break;
		case 'symbol':		result = `<span>${String(any)}</span>`;		break;
		case 'object':		result = renderObject(any); 		break;
		case 'function':	result = renderFunction(any); 		break;
		default:			result = `<strong>${any}</strong>`;	break;
	}

	return result;
}



/**
 * @param {object} object
 * @return {string}
 */
function renderObject(object) {
	let result = '';

	if (object === null) {
		result = `<code>null</code>`;
	}
	else if (object.constructor.name === 'array') {
		result = renderArray(object);
	}
	else {
		result = renderObjectObject(object);
	}

	return result;

}

/**
 * @param {array} array
 * @return {string}
 */
function renderArray(array) {
	const elements = array.map(
		(item)=>`<li>${render(item)}</li>`
	);
	const result = `
		<ol>
			${elements}
		</ol>
	`;
	return result;
}


/**
 * @param {object} object
 * @return {string}
 */
function renderObjectObject(object) {
	let elements = '';
	for (const [key, value] of Object.entries(object)) {
		elements += `<li>${key} : ${render(value)}</li>`;
	}
	const result = `
		<ul>
			${elements}
		</ul>
	`;
	//console.log(result);
	return result;
}





/**
 * @param {function} func
 * @return {string}
 */
function renderFunction(func) {
	let result = func.toString();
	return result;
}