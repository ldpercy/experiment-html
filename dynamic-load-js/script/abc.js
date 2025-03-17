// abc script

log('abc: load');


function scriptAnnounce() {
	log('abc: scriptAnnounce');
}

/* the function above runs, but i can't to execute eithor of these */

function dynScriptLoaded() {
	log('abc: script onload');
}

function abcTest() {
	log('abc test');
}

abcTest()
