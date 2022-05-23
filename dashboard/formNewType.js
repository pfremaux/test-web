const FORM_NEW_TYPE_METADATA = {
	inputLabelId: {
		label:"Input label: ",
		type:"text"
	},
	inputIdId: {
		label:"Input ID: ",
		type:"text"
	},
	inputTypeId: {
		label:"Input type: ",
		type:"combo",
		possibleValues: [
			{value:"text", text:"Text"},
			{value:"combo", text:"Select list"},
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
		type:"button"
	}
};

let REPO = {
	types: {}
	
};

let inputCounter;

