/*
**	file.js
*/


/** readFileContent
 * @param {string} filePath
 * @returns {Promise<string>}
 */
export async function readFileContent(filePath) {

	let result = undefined;

	try {
		const textImport = await import(`./${filePath}`, { with: { type:'text' }});
		//console.log(textImport);
		result = textImport.default;
	}
	catch {
		console.log(`readFileContent: cannot read "${filePath}"`);
	}

	return result;
}/* readFileContent */



/*	examples from
** https://stackoverflow.com/questions/14446447/how-can-i-read-a-local-text-file-in-the-browser



fetch("myText.txt")
	.then((res) => res.text())
	.then((text) => {
	// Do something with "text"
	})
	.catch((e) => console.error(e));

//

fetch('file.txt')
	.then(response => response.text())
	.then(text => console.log(text))
	// Outputs the content of the text file

//

const logFileText = async file => {
    const response = await fetch(file)
    const text = await response.text()
    console.log(text)
}

logFileText('file.txt')

*/




