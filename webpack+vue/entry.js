document.getElementById('app').innerHTML = "This is my first";

require("./first.js");

require("./style.css");

var Vue = require("vue");
	new Vue({
		el: "body",
		data: {
			message: "hello vue!"
		}
	});