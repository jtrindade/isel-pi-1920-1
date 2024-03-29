
const main = `
	<nav>
		<a href="#home">Home</a> |
		<a href="#insert">Insert</a> |
		<a href="#list">List</a> |
		<a href="#about">About</a> |
		<a href="#contacts">Contacts</a>
	</nav>
	
	<div id="mainContainer"></div>
`;

const setContents = function (html) {
	const mainContainer =
		document.querySelector('#mainContainer');

	mainContainer.innerHTML = html;
}

function nop() {}

const modDefault = function () {
	return {
		view : function() {
			return '<h1>' + location.hash + '</h1>';
		},
		run : nop
	}
} 
