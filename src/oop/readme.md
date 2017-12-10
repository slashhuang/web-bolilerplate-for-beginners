# oop

1. oop的概念

object-oriented-programming

|- object ？ 人、js、公司

|- 属性 property  eyes
|- 方法 method eat()


|- 抽象性 abstraction【抽取描述对象的方法、属性】
|- 封装性 encapsulation【不用care细节，只暴露必要的东西】
|- 继承性 inheritage 【复用共同的属性、方法...】
		parent class父类 child class子类

new Person().eat()

|- eyes
|- mouth
|- eat()

公务员
|- work()


2. js中的oop


class 类 java/c++/python

class A ==> 创建对象 new A(name, age) 

class Person { // parent class
	constructor(name, age) {
		this.name = name ;
		this.age = age;
		this.eatList = [];
	}
	public eat(food) {
		this.eatList.push(food);
	} 
}

// === inheritage
class 公务员 extends Person{ //child class
	constructor(title) {
		super();
		this.title = title;
	}
}

const a = new ('lilei', 10);
console.log(a.age);
a.eat('烤鸭');
console.log(a.eatList);

好像一个工厂、封装了person需要的属性和方法




// 工厂函数
var s = function () {
	return {
		a: 1
	}
};

// 构造函数 constructor
var s1 = function() {
	this.a = 'a';
	this.b = 'b';
};


s1.prototype // 模板对象

// 构造函数 + 原型链

3. js中oop的简单实现
4. 如何去应用oop


