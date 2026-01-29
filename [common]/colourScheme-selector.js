

document.querySelectorAll('.colourScheme-selector').forEach(
	(element) => {
		element.addEventListener(
			'click',
			(event) => {
				event.preventDefault();

				const eventTarget = /** @type {HTMLElement} */ (event.target);		// this cast is awkward - see if there is a 'proper' way

				this.setColourScheme(eventTarget.dataset.colourscheme);
			}
		);
	}
);


function setColourScheme(schemeName) {
	//document.documentElement.style.setProperty('--colourScheme', schemeName);
	//document.documentElement.className = document.documentElement.className.replace(/(\bcolourScheme-\w+\b)?/,`colourScheme-${schemeName}`);
	document.documentElement.dataset.colourscheme = schemeName;
}


let colourScheme = getUrlParameter('colourScheme');


if (colourScheme) {
	setColourScheme(colourScheme);
}

