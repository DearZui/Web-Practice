/*function SuperType(){
	this.property = true;
}

SuperType.prototype.getSuperValue = function(){
	return this.property;
};

function SubType() {
	this.subproperty = false;
}

SubType.prototype = new SuperType();

SubType.prototype.getSubValue = function() {
	return this.subproperty;
};

var instance = new SubType();
alert(instance.getSuperValue());*/


/*//不能使用对象字面量创建原型方法
function SuperType() {
	this.property = true;
}

SuperType.prototype.getSuperValue = function () {
	return this.property;
};

function SubType() {
	this.subproperty = false;
}

SubType.prototype = new SuperType();

SubType.prototype = {
	getSubType: fucntion() {
		return this.subproperty;
	},
	someothermethod: function() {
		return false;
	}
};

var instance = new SubType();
alert(instance.getSuperValue());*/


/*//Problem of PrototypeChain
function SuperType(){
	this.colors = ["red", "blue", "green"];
}

function SubType() {}

SubType.prototype = new SuperType();

var instance1 = new SubType();
var instance2 = new SubType();

instance1.colors.push("black");
alert(instance2.colors);  //实例的属性会互相影响*/


/*//Constructor Stealing
function SuperType() {
	this.colors = ["red", "blue", "green"];
}

function SubType() {
	SuperType.call(this);
}

var instance1 = new SubType();
var instance2 = new SubType();

instance1.colors.push("black");
alert(instance1.colors);
alert(instance2.colors);*/


/*//Constructor Stealing passing params
function SuperType(name) {
	this.name = name;
}

function SubType() {
	SuperType.call(this, "Nicholas");

	this.age = 29;
}

var instance1 = new SubType();
var instance2 = new SubType();
instance1.name = "chen";
alert(instance1.name);
alert(instance2.name);

instance1.age = 92;
alert(instance1.age);
alert(instance2.age);//可在调用超类型构造函数后，再添加子类的属性*/


/*//Combination Inheritance
//Prototype Chain to inherit prototype property and method
//Constructor Stealing to inherit property
function SuperType(name) {
	this.name = name;
	this.colors = ["red", "blue", "green"];
}

SuperType.prototype.sayName = function() {
	alert(this.name);
}

function SubType(name, age) {
	SuperType.call(this, name);
	this.age = age;
}

SubType.prototype = new SuperType();
SubType.prototype.constructor = SubType();
SubType.prototype.sayAge = function () {
	alert(this.age);
};

var instance1 = new SubType("Nick", 29);
var instance2 = new SubType("Chen", 92);

instance1.colors.push("black");
instance2.name = "Dick";
instance1.age = 44;
alert(instance1.colors);
instance1.sayName();
instance1.sayAge();

alert(instance2.colors);
instance2.sayName();
instance2.sayAge();*/


/*//Prototypal Inheritance
function object(o) {
	function F(){};
	F.prototype = o;
	return new F();
}
var person = {
	name: "Nick",
	friends: ["Shelby", "Court", "Van"]
};

var anotherPerson = object(person);
anotherPerson.name = "Greg";
anotherPerson.friends.push("Rob");

var yetAnotherPerson = object(person);
yetAnotherPerson.name = "Linda";
yetAnotherPerson.friends.push("Bar");

alert(person.friends);
alert(anotherPerson.friends);
alert(yetAnotherPerson.friends);
alert(person.name);
alert(anotherPerson.name);
alert(yetAnotherPerson.name);*/

/*//Prototypal Inheritance Object.create()
var person = {
	name: "Nick",
	friends: ["Shelby", "Court", "Van"]
};

var anotherPerson = Object.create(person);
anotherPerson.name = "Greg";
anotherPerson.friends.push("Rob");

var yetAnotherPerson = Object.create(person);
yetAnotherPerson.name = "Linda";
yetAnotherPerson.friends.push("Bar");

alert(person.friends);*/


/*//Parasitic Combination Inheritance
function object(o) {
	function F(){};
	F.prototype = o;
	return new F();
}

function inheritPrototype(subType, superType) {
	var prototype = object(superType.prototype);
	prototype.constructor = subType;
	subType.prototype = prototype;
}

function SuperType(name) {
	this.name = name;
	this.colors = ["red", "blue", "green"];
}

SuperType.prototype.sayName = function() {
	alert(this.name);
}

function SubType(name, age) {
	SuperType.call(this, name);

	this.age = age;
}

inheritPrototype(SubType, SuperType);

SubType.prototype.sayAge = function() {
	alert(this.age);
};

var instance1 = new SubType("Nick", 29);
instance1.colors.push("black");
alert(instance1.colors);
instance1.sayName();
instance1.sayAge();

var instance2 = new SubType("Chen", 92);
alert(instance2.colors);
instance2.sayName();
instance2.sayAge();*/

//ES6
'use strict'
/*class AnimalES6 {
	constructor(name) {
		this.name = name;
	}

	doSomething() {
		alert(this.name);
	}
}

var lionES6 = new AnimalES6("lion");
lionES6.doSomething();*/

/*class AnimalES6 {
	constructor(name) {
		this.name = name;
		this._age = 0;
	}

	get age() {
		return this._age;
	}

	set age(value) {
		if (value < 0) {
			alert("Error");
		}
		this._age = value;
	}

	doSomething() {
		alert(this.name);
	}
}

const lionES6 = new AnimalES6("lion");
lionES6.doSomething();
// lionES6.age = 5;
alert(lionES6.age);*/

var ageSymbol = Symbol();

class AnimalES6 {
	constructor(name) {
		this.name = name;
		this[ageSymbol] = 0;
	}

	get age() {
		return this[ageSymbol];
	}

	set age(value) {
		this[ageSymbol] = value;
	}

	doSomething() {
		alert(this.name);
	}
}

const lionES6 = new AnimalES6("lion");
lionES6.doSomething();
lionES6.age = 5;

var legCountSymbol = Symbol();
class InsertES6 extends AnimalES6 {
	constructor(name) {
		super(name);
		this[legCountSymbol] = 0;
	}

	get legCount() {
		return this[legCountSymbol];
	}

	set legCount(value){
		this[legCountSymbol] = value;
	}

	doSomething() {
		super.doSomething();
		alert(this[legCountSymbol]);
	}
}

var spiderES6 = new InsertES6("spider");
spiderES6.legCount = 8;
spiderES6.doSomething();