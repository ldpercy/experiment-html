

function bodyOnload() {
	console.log('asdfasdf');
	drawStar()
}


function drawStar(){

	const sides = document.getElementById('input-sides').value;
	const offset = document.getElementById('input-offset').value;

	let starPath = getStarPath(sides,offset);
	//console.log(starPath);
	document.getElementById('star').setAttribute('d',starPath);
}




function getStarPath(sides, offset) {
	const length = 1000;
	let path = '';
	let x = 0, y = 0;
	//const sides = 12;
	const divisions = 3;

	//const mainAngle = tau / sides;
	const mainAngle = tau / sides;

	let angle = mainAngle/2;

	const internalAngle = mainAngle / divisions;

	console.log(mainAngle, internalAngle);

	const points = sides * divisions;

	for (let i=0; i < sides; i++)
	{
		angle += offset * mainAngle;

		const p = polarPoint(angle, length)

		x = Math.round(p.x);
		y = Math.round(p.y);
		console.log(i,degrees(angle),x,y);

		path  += (i===0) ? `M ${x} ${y} ` : `L ${x} ${y} `;
	}

	return `${path} Z`;
}
