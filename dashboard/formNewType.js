
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
		possibleValues: [
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

