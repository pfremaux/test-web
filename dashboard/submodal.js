
function toggleSubModal() {
	console.log('toggle');
	let modal = id('submodalGlobalId');
	let display = modal.style.display;
	modal.style.display = display === 'block' ? 'none' : 'block';
}