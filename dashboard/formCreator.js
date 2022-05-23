
const TYPES = ["text", "combo", "range", "button"];


function Element(tagName) {
	this.element = el(tagName);
	this.withId = function(i) {
		this.element.id = i;
		return this;
	};
	this.withText = function(text) {
		this.element.innerHTML = text;
		return this;
	};
	this.onClick = function(evtFun) {
		this.element.addEventListener("click", evtFun);
		return this;
	};
	this.forId = function(ident) {
		this.element.htmlFor = ident;
		return this;
	};
	this.withPossibleValues = function(options) {
		if (this.element.type !== "select") {
			// TODO ERROR
		}
		options.forEach(e => {
			let opt = el('option');
			opt.value=e.value;
			opt.innerHTML = e.text;
			this.element.appendChild(opt);
		});
		return this;
	}; 
	this.get = function() {
		return this.element;
	};
}

function InputForm(ident, data) {
	this.elements = [];
	this.inputIdToValueBuilder = [];
	if (data.type !== "button") {
		this.elements.push(
			new Element("label")
				.withText(data.label)
				.forId(ident)
				.get());
	}
	if (data.type === 'combo') {
		let input = new Element('select')
						.withId(ident)
						.withPossibleValues(data.possibleValues)
						.get();
		this.elements.push(input);
		this.inputIdToValueBuilder.push(() => {
			let obj = {};
			obj[ident] = id(ident).value;
			return obj;
		});
	} else if (data.type === 'button') {
		let input = new Element("button")
						.withId(ident)
						.withText(data.label)
						.get();
		this.elements.push(input);
	} else {
		let input = el('input');
		input.id = ident;
		input.type = data.type;
		this.elements.push(input);
		this.inputIdToValueBuilder.push(() => {
			let obj = {};
			obj[ident] = id(ident).value;
			return obj;
		});
	}
	this.insertIn = function(parent) {
		for (let i = 0 ; i < this.elements.length ; i++) {
			parent.appendChild(this.elements[i]);
		}
		return this;
	};
	
}

function Form(metadata) {
	this.inputForms = [];
	for (let k in metadata) {
		let data = metadata[k];
		this.inputForms.push(new InputForm(k, data));
	}
	this.insertIn = function(parent) {
		for (let i = 0 ; i < this.inputForms.length ; i++) {
			this.inputForms[i].insertIn(parent);
		}
		return this;
	};
}