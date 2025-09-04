//
// n-ary
//

function bodyOnload() {


	document.getElementById('form-nary').addEventListener('change', redraw);

	redraw();
}

function redraw() {
	const base = document.getElementById('input-base').value;

	if (base < 2) { return; }

	document.getElementById('style-base').innerHTML = `
		html { --base: ${base}; }
	`;

	nLight = (document.getElementById('input-nLight').checked);

	draw(1,16, base, 'output1');
	draw(17,32, base, 'output2');
}



function getNumberSVG(number, base) {

	const nb = (nLight) ? numberToBaseN(number, base): numberToBase(number, base) ;

	const size = baseSize(base,number) ;
	let digits = '';
	let digitValue = 0;
	let value = number;
	for (let i=0; i <= size; i++) {

		//for (let d = size; d >= 0; d--)
		digitValue = nb[base**i] || 0;
		digits += getDigitSVG(base, digitValue, i);
	}

	var result = `
		<g class="group-number number-${number}" data-number="${number}">
			${digits}
		</g>`;
	return result;
}


function getDigitSVG(base, value, place) {

	let lights = '';
	const to = (nLight) ? base: base-1;

	for (let i=0; i < to; i++) {
		lights += `<rect class="light light-${i}" data-value="${i}"/>`
	}

	result= `
		<g class="group-digit base-${base} place-${place} value-${value} digit-${value}" data-value="${value}" data-place="${place}">
			<title>base-${base} place-${place} value-${value}</title>
			${lights}
		</g>
	`;
	return result;
}



function draw(from, to, base, element) {

	let output = '';

	for (let i=from;i<=to;i++) {
		output += `
			<g style="transform:translate(0px,${(i-from)*100}px)" data-number="${i}">
				<text x="-300">${i}</text>
				${getNumberSVG(i, base)}
			</g>
		`;
	}

	document.getElementById(element).innerHTML = output;

}

