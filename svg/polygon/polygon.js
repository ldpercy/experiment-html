/* star.js
*/

function bodyOnload() {

	document.getElementById('form-star').addEventListener('change', redraw);
	document.getElementById('form-style').addEventListener('change', updateStyle);

	redraw();
}


function updateStyle() {

	//console.log('updateStyle', fillRule);

	if (document.getElementById('input-fillRule').value === 'evenodd') {
		document.getElementById('star-group').classList.add('evenodd');
	}
	else {
		document.getElementById('star-group').classList.remove('evenodd');
	}

	if (document.getElementById('input-markers').checked) {
		document.getElementById('star-group').classList.add('show-markers');
	}
	else {
		document.getElementById('star-group').classList.remove('show-markers');
	}
}


function redraw(){

	const length = document.getElementById('input-length').value;
	const sides = document.getElementById('input-sides').value;
	const pointStep = document.getElementById('input-pointStep').value;
	const startDivision = document.getElementById('input-startDivision').value;

	const copies = document.getElementById('input-copies').value;
	const divisionOffset = document.getElementById('input-divisionOffset').value;
	const separatePaths = document.getElementById('input-copyPaths').value;
	const coordinates = document.getElementById('input-coordinates').value;

	const starGroup = getStarPath(length, sides, pointStep, startDivision, copies, divisionOffset, separatePaths, coordinates);

	//console.log(starPath);
	document.getElementById('star-group').innerHTML = starGroup;
}



function getStarPath(
		length,				// length of sides
		sides, 				// how many sides the polygon has
		pointStep, 			// how many divisions to the next vertex
		startDivision,		// integer divisions of the base angle to the start of the polygon
		copies, 			// number of copies of the polygon to draw
		divisionOffset,		// integer divisions of the base angle between the copies
		copyPaths,			// combined or separate svg paths
		coordinates,		// absolute or relative
	) {
	let result = '';
	let path = '';
	let x = 0, y = 0;

	const mainAngle = tau / sides;

	const startAngle = mainAngle/startDivision;

	let pointRadians = startAngle;
	let lastPoint = new Point(0,0);
	for (let c=0; c < copies; c++) {

		pointRadians += mainAngle/divisionOffset;


		for (let i=0; i <= sides; i++)
		{
			pointRadians += mainAngle * pointStep;

			const p = polarPoint(pointRadians, length)

			if (coordinates === 'relative') {

				x = Math.round(p.x - lastPoint.x);
				y = Math.round(p.y - lastPoint.y);

				path  += (i===0) ? `m${x},${y} ` : `l${x},${y} `;
				lastPoint = p;

			} else {
				x = Math.round(p.x);
				y = Math.round(p.y);
				//console.log(i,Math.round(degrees(pointRadians)),x,y);

				path  += (i===0) ? `M${x},${y} ` : `L${x},${y} `;
			}
		}// for i

		if (copyPaths === 'separate') {
			result += `<path class="star" d="${path} z"/>`;
			lastPoint = new Point(0,0);
			path = '';
		}
		else {
			path += ` Z `;
		}
	}// for c

	if (copyPaths === 'combined') {
		result = `<path class="star" d="${path} z"/>`;
	}

	return result;
}




