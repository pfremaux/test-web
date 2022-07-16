
const FORM_NEW_TYPE_METADATA = {
	typeId:{
		label:"Type id",
		type:"text",
	},
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
	inputTypeId: {
		label:"Input type: ",
		type:"combo",
		allowedValues: [
			{value:"combo", text:"Select list", change:(e)=> show(e.target.nextSibling.nextSibling)},
			{value:"text", text:"Text", change:(e)=> hide(e.target.nextSibling.nextSibling) },
		]
	},
	inputAllowedValuesId: {
		label:"Set allowed values",
		type:"button",
		onClick: (e) => {
			let nextSibling= e.target.nextSibling.nextSibling.nextSibling;
			// TODO integrer ce fonctionnement dans withForm() direct 
			
			let modalForm = new Form(SUB_MODAL_ALLOWED_VALUES_METADATA);
			modalForm.insertIn(id(subModal.contentId))
			subModal.withForm(modalForm);
			subModal.onSubmit({ accept:(obj) =>  {
				nextSibling.value = nextSibling.value + obj.result;
			} });
			subModal.build();
			subModal.toggle();
		}
	},
	"hiddenAllowedValuesId": {
		label:"",
		type:"hidden"
	}
};
const FORM_VIEW_METADATA = {
	titleId: {
		label:"Title field: ",
		type:"combo",
		allowedValues: [// dynamic list based on all ID (with input type between parenthesis)
			{value:"combo", text:"Select list", change:(e)=> show(e.target.nextSibling.nextSibling)}
		]
	},
	actionTitleId: {
		label:"Action title field: ",
		type:"combo",
		allowedValues: [// dynamic list based on all ID (with input type between parenthesis)
			{value:"combo", text:"Select list", change:(e)=> show(e.target.nextSibling.nextSibling)}
		]
	},
	ImageId: {
		label:"Image : ",
		type:"combo",
		allowedValues: [// dynamic list based on all ID or a default image or a deducted one
			{value:"default", text:"Default", change:(e)=> log(e)},
			{value:"calculated", text:"Calculated", change:(e)=> log(e)},
		]
	}
	
	// TODO PFR action by itself will be defined in another form
	
};

const SUB_MODAL_ALLOWED_VALUES_METADATA = {
	technicalValueAllowedId: {
		label:"Technical value",
		type:"text"
	},
	inputValueAllowedId: {
		label:"Human value",
		type:"text"
	},
	result: {
		label:"",
		type:"hidden"
	},
	buttonAddValueId: {
		label:"Add",
		type:"button",
		onClick: (e) => {
			id('result').value = id('result').value+";"+id('technicalValueAllowedId').value+':'+id('inputValueAllowedId').value;
			id('inputValueAllowedId').value = "";
		}
	}
};


let inputCounter;

