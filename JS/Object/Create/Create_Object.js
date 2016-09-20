//FactoryPattern 工厂模式
function createPerson(name, age, job) {
	var o = new Object();
	o.name = name;
	o.age = age;
	o.job = job;
	o.sayName = function() {
		alert(this.name);
	};
	return o;
}

var person1 = createPerson('Chen', 23, 'FE');
var person2 = createPerson('Sheriff', 32, 'EF');
//缺点： 无法知道对象的类型

/*--------------------------------------------------*/
//ConstructorPattern 构造函数模式
function Person(name, age, job) {
	this.name = name;
	this.age = age;
	this.job = job;
	this.sayName = function() {
		alert(this.name);
	};
}

var person1 = new Person('Chen', 23, 'FE');

person1.constructor == Person //true

person1 instanceof Object //true
person1 instanceof Person //true
	//没有显式地创造对象；直接将属性和方法赋给了this；没有return
	//优点： 可以将它的实例标志为一种特定的类型。
	//缺点： 每个方法都要在每个函数上重新定义一遍
function Person(name, age, job) {
	this.name = name;
	this.age = age;
	this.job = job;
	this.sayName = sayName;
}

function sayName() {
	alert(this.name);
}

var person1 = new Person("Chen", 23, "FE");

	//这样解决了方法重新定义的问题，可是这个在全局定义域中定义的方法只能被某个对象调用，没什么意义；另外如果对象需要很多方法，就要定义很多个全局函数，失去了面向对象的封装性。






//////////////////////     Attribute && Methods     /////////////////////////////////
/*
	constructor(构造函数)
	constructor属性返回对创建此对象的数组函数的引用
*/
var o = {};
o.constructor === Object; //true

var a = [];
a.constructor === Array; //true

function Tree(name) {
	this.name = name;
}

var theTree = new Tree('Redwood');
theTree.constructor; // function Tree(name) { this.name = name; }

/*-------------------------------------------------------------------*/
/*
	instanceof
	object instanceof constructor
	用来检测constructor.prototype是否存在于参数object的原型链上
*/
