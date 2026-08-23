

import { importFile, importJson } from '../[common]/file.js';


let basePath = '';

export function setBasePath(path) {
	basePath = path;
}


/** loadTestDirectory
 * @param {string} directoryPath
 * @return {Promise<TestDirectory>}
 */
export async function loadTestDirectory(directoryPath) {
	const result = {
		path	: directoryPath,
		item	: []
	};

	/** @type Array<TestDirectoryItem> */
	try {
		result.item = await importJson(`${basePath}${directoryPath}_test.json`);

		result.item = await Array.fromAsync(
			result.item,
			(item) => {
				let result;
				if (item.endsWith('/')) {
					result = loadTestDirectory(item);
				}
				else {
					result = item;
				}
				//console.log(`Array.fromAsync`,result);
				return result;
			}
		);
	}
	catch {
		console.log(`Can't load ${basePath}${directoryPath}_test.json`);
	}

	console.log('--loadTestDirectory', directoryPath, result);

	return result;
}/* loadTestDirectory */



/** flattenSubdirectories
 * @param {TestDirectory} directory
 * @return {Array<directory>}
 */
export function flattenSubdirectories(directory) {
	const result = [
		{
			path: directory.path,
			item: [],
		}
	];

	for (const item of directory.item.values()) {

		if (typeof item === 'string') {
			result[0].item.push(item);
		}
		else if (typeof item === 'object') {
			result.push(
				{
					path: `${directory.path}${item.path}`,
					item: item.item,
				}
			);
		}

		//console.log(index, element);
		//elements += `<tr><th>${index}</th><td>${render(element)}</td></tr>`;
	}
	return result;
}/* flattenSubdirectories */




/** TestDirectory
 * @typedef		{Object} 					TestDirectory
 * @property	{string} 					path
 * @property	{Array<TestDirectoryItem>}	item
 */

/** TestDirectoryItem
 * @typedef {TestFile|TestDirectory} TestDirectoryItem
 */

/** TestFile
 * @typedef {string} TestFile
 */