
const FORM_NEW_TYPE_METADATA = {
	addInputId: {
		label:"Add row",
		type:"button",
		onClick:function(evt) {
			console.log(evt.srcElement.parentNode);
			let form = new Form(FORM_NEW_INPUT_TYPE_METADATA, GLOBAL.counter);
			form.insertIn(evt.srcElement.parentNode);
		}
	}
};
const FORM_NEW_INPUT_TYPE_METADATA = {
	inputLabelId: {
		label:"Input label: ",
		type:"text"
	},
	inputIdId: {
		label:"Input ID: ",
		type:"text"
	},
	inputAllowedValuesId: {
		label:"Set allowed values",
		type:"button",
		onClick: (e) => {
			subModal.withForm(SUB_MODAL_ALLOWED_VALUES_METADATA);
			subModal.build();
			subModal.toggle();
		}
	},
	inputTypeId: {
		label:"Input type: ",
		type:"combo",
		possibleValues: [
			{value:"text", text:"Text", change:(e)=> hide(inputAllowedValuesId) },
			{value:"combo", text:"Select list", change:(e)=> show(inputAllowedValuesId)},
		]
	}
};


const SUB_MODAL_ALLOWED_VALUES_METADATA = {
	inputValueAllowedId: {
		label:"",
		type:"text"
	},
	buttonAddValueId: {
		label:"Add",
		type:"button",
		onClick: (e) => {
			log(id('inputValueAllowedId').value);
			id('inputValueAllowedId').value = "";
		}
		
	}
};


let inputCounter;

