window.onload = getBody;
	function getBody() {
		container = document.createElement("div");
		body = document.body
		body.appendChild(container);
		container.classList.add("container");
		var array = [1, 2, 3, null, undefined, 'a', 'b', 'c', '', true, false, 31, 42, 53, , function (){ }, {}, [], 15, 55, 4];
		for(i = 0; i < array.length; i++) {
			if ((typeof array[i]) == "number" && (array[i] % 3) != 0 && (array[i] % 5) != 0) getElement(array[i]);
			if ((typeof array[i]) == "number" && (array[i] % 3) == 0 && (array[i] % 5) == 0) getElement("FizzBuzz");
			if (Object.prototype.toString.call(array[i]) == "[object Object]" && array[i] != null) getElement("element is an object");
			if ((typeof array[i]) == "number" && (array[i] % 3) == 0 && (array[i] % 5) != 0) getElement("Fizz");
			if ((typeof array[i]) == "number" && (array[i] % 5) == 0 && (array[i] % 3) != 0) getElement("Buzz");
			if (Object.prototype.toString.call(array[i]) == "[object Array]") getElement("element is an array");
			if ((typeof array[i]) == "function") getElement("element is an function");
			if (array[i] === null) getElement("element is null");
			if (array[i] === undefined) getElement("element is undefined");
			if ((typeof array[i] == "string") && array[i] != "") getElement(array[i]);
			if (array[i] === "") getElement("string is empty");
			if (array[i] === true) getElement("true");
			if (array[i] === false) getElement("false");
			if ( i == 4 || i == 11 || i == 18) div.classList.add("ml");
		};
	};
	function getElement(innerContent) {
		div = document.createElement("div");
		container.appendChild(div);
		div.classList.add("block");
		var p = document.createElement("p"); 
		div.appendChild(p);
		p.innerHTML = innerContent;
	};