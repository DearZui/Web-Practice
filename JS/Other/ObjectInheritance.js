/*var mul = function (para1, para2) {
	var ret = 0;
	for (var i = 0; i < para2; i++) {
		ret = add(ret, para1);
	}
	return ret;
}

var out = mul(3, 3);
console.log(out);

function add(para1, para2) {
	return para1 + para2;
}*/

/*function Person(name) {
	this.name = name;
	this.hello = function() {
		console.log("my name is " + this.name);
	}
}

var person1 = new Person('Chen');

person1.hello();*/


/*function Person(name) {
	this.name = name;
}

Person.prototype.hello = function(){
	console.log('my name is', this.name);
};

var person1 = new Person('Chen');

person1.hello();*/


/*function Person(name) {
	this.name = name;
}
Person.prototype.hello = function() {
	console.log('my name is', this.name);
};

function Staff(type, name) {
	Person.call(this, name);
	this.type = type;
}
Staff.prototype = new Person();
Staff.prototype.hello = function() {
	console.log('my name is', this.name, 'an I am a', this.type);
};

var staff1 = new Staff('FE Engineer', 'Chen');
staff1.hello();*/


"use strict";
"use strict";
class Person {
	constructor(name) {
		this.name = name;
	}
	hello() {
		console.log('my name is', this.name);
	}
}

class Staff extends Person{
	constructor(type, name) {
		super(name);
		this.type = type;
	}
	hello() {
		console.log('my name is', this.name, 'and I am a', this.type);
	}
}

var staff1 = new Staff('FE Engineer', 'Chen');
staff1.hello();