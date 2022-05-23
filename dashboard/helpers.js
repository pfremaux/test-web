function id(i) {
	return document.getElementById(i);
}

function el(name) {
	return document.createElement(name);
}

function removeAllChildren(i) {
	const myNode = document.getElementById(i);
	while (myNode.lastElementChild) {
		myNode.removeChild(myNode.lastElementChild);
	}
}

window.onerror = function(a,b,c) {
	console.log("a="+a+", b="+b+", c="+c);
	// TODO Send logs to server here.
};