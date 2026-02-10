



/** testArray
 * @param {function} predicate
 * @param {array} array
 */
export function testArray(predicate, array) {
	//let result = true;
	console.log('predicate:', predicate.name);

	const result = array.map(
		(element) => {
			const elementResult = {
				result : predicate(element),
				test   : element,
			};

			return elementResult ;
			// if (predicate(element))
			// {
			// 	console.log('true', element);
			// }
			// else {
			// 	console.log('false:', element);
			// }
		}
	);

	console.dir(result);

	return result;
}/* testArray */