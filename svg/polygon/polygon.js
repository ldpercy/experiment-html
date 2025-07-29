/* star.js
*/

function bodyOnload() {

	document.getElementById('form-star').addEventListener('change', redraw);
	document.getElementById('form-style').addEventListener('change', updateStyle);

	redraw();
}


function updateStyle() {

	//console.log('updateStyle', fillRule);

	if (document.getElementById('input-fillRule-evenOdd').checked) {
		document.getElementById('star-group').classList.add('evenodd');
	}
	else {
		document.getElementById('star-group').classList.remove('evenodd');
	}

	if (document.getElementById('input-markers').checked) {
		console.log('asdf');
		document.getElementById('star-group').classList.add('show-markers');
	}
	else {
		console.log('zxcv');
		document.getElementById('star-group').classList.remove('show-markers');
	}


}


function redraw(){

	const sides = document.getElementById('input-sides').value;
	const pointStep = document.getElementById('input-pointStep').value;
	const startDivision = document.getElementById('input-startDivision').value;

	const copies = document.getElementById('input-copies').value;
	const divisionOffset = document.getElementById('input-divisionOffset').value;
	const separatePaths = document.getElementById('input-separatePaths').checked;

	const starGroup = getStarPath(sides, pointStep, startDivision, copies, divisionOffset, separatePaths);

	//console.log(starPath);
	document.getElementById('star-group').innerHTML = starGroup;
}



function getStarPath(
		sides, 				// how many sides the polygon has
		pointStep, 			// how many divisions to the next vertex
		startDivision,		// integer divisions of the base angle to the start of the polygon
		copies, 			// number of copies of the polygon to draw
		divisionOffset,		// integer divisions of the base angle between the copies
		separateCopies		// whether the copies are separate svg paths
	) {
	const length = 1000;
	let result = '';
	let path = '';
	let x = 0, y = 0;

	const mainAngle = tau / sides;

	const startAngle = mainAngle/startDivision;

	let pointRadians = startAngle;

	for (let c=0; c < copies; c++) {

		pointRadians += mainAngle/divisionOffset;

		for (let i=0; i < sides; i++)
		{
			pointRadians += mainAngle * pointStep;

			const p = polarPoint(pointRadians, length)

			x = Math.round(p.x);
			y = Math.round(p.y);
			//console.log(i,Math.round(degrees(pointRadians)),x,y);

			path  += (i===0) ? `M ${x} ${y} ` : `L ${x} ${y} `;
		}

		if (separateCopies) {
			result += `<path class="star" d="${path} Z"/>`;
			path = '';
		}
		else {
			path += ` Z`;
		}
	}

	if (!separateCopies) {
		result = `<path class="star" d="${path} Z"/>`;
	}

	return result;
}




