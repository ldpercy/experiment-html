/* star.js
*/

function bodyOnload() {

	document.getElementById('form-star').addEventListener('change', redraw);
	document.getElementById('form-style').addEventListener('change', updateStyle);

	redraw();
}


function updateStyle() {

	const fillRule = document.querySelector('input[name="fillRule"]:checked').value;

	console.log('updateStyle', fillRule);

	if (fillRule === 'evenodd') {
		document.getElementById('star-group').classList.add('evenodd');
	}
	else {
		document.getElementById('star-group').classList.remove('evenodd');
	}

}


function redraw(){

	const sides = document.getElementById('input-sides').value;
	const pointStep = document.getElementById('input-pointStep').value;
	const startDivision = document.getElementById('input-startDivision').value;


	const copies = document.getElementById('input-copies').value;
	const divisionOffset = document.getElementById('input-divisionOffset').value;

	const starGroup = getStarPath(sides, pointStep, startDivision, copies, divisionOffset);

	//console.log(starPath);
	document.getElementById('star-group').innerHTML = starGroup;
}

/*
function drawStar(){

} */


function getStarPath(sides, pointStep, startDivision, copies, divisionOffset) {
	const length = 1000;
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
	}

	return `<path class="star" d="${path} Z"/>`;
}
