
function toggleModal() {
	let modal = id('modalGlobalId');
	let display = modal.style.display;
	modal.style.display = display === 'block' ? 'none' : 'block';
	// TODO PFR remove children ? On peut pas avant ce call car parfois on est directement lié a un event
	// TODO PFR add child based on context... Based on GLOBAL DB ?
}

function Modal(idModal, idContent, idControl) {
	this.modalId = idModal;
	this.contentId = idContent; 
	this.controlId = idControl;
	this.form = undefined;
	this.submit = undefined;
	this.withForm = function(formInstance) {
		this.form=formInstance;
		return this;
	};
	this.clear = () => {
		removeAllChildren(this.contentId);
		removeAllChildren(this.controlId);
	};
	this.toggle = () => {
		let modal = id(this.modalId);
		let display = modal.style.display;
		modal.style.display = display === 'block' ? 'none' : 'block';
		if (modal.style.display === 'none') {
			this.clear();
		}
		return this;
	};
	this.onSubmit = function(saveLocation) {
		let inputIdsToValue = {};
		let currentModal = this;
		this.submit = function(evt) {
			for(let i = 0 ; i < currentModal.form.inputForms.length ; i++) {
				currentModal.form.inputForms[i].inputIdToValueBuilder.forEach(fn => {
					let map = fn();
					for (let k in map) {
						inputIdsToValue[k] = map[k];
					}
				});
			}
			log("on submit : "+ JSON.stringify(inputIdsToValue));
			saveLocation.accept(inputIdsToValue);
			currentModal.toggle();
		};
		
		return this;
	};
	this.build = function() {
		let controlDiv = id(this.controlId);
		let btn = new Element('button').withText('Submit').onClick(this.submit);
		controlDiv.appendChild(btn.get());	
		return this;
	};
	
}