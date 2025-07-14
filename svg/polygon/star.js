/* star.js
*/

function bodyOnload() {

	drawStar()
}


function drawStar(){

	const sides = document.getElementById('input-sides').value;
	const offset = document.getElementById('input-offset').value;
	const startDivision = document.getElementById('input-startDivision').value;

	let starPath = getStarPath(sides, offset, startDivision);
	//console.log(starPath);
	document.getElementById('star').setAttribute('d',starPath);
}


function getStarPath(sides, offset, startDivision) {
	const length = 1000;
	let path = '';
	let x = 0, y = 0;

	const mainAngle = tau / sides;

	const startAngle = mainAngle/startDivision;

	let pointRadians = startAngle;

	for (let i=0; i < sides; i++)
	{
		pointRadians += offset * mainAngle;

		const p = polarPoint(pointRadians, length)

		x = Math.round(p.x);
		y = Math.round(p.y);
		//console.log(i,Math.round(degrees(pointRadians)),x,y);

		path  += (i===0) ? `M ${x} ${y} ` : `L ${x} ${y} `;
	}

	return `${path} Z`;
}
