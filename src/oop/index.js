var s = function() {
	this.a = 'a';
	this.b = 'b';
};

s.prototype.c = 'c';


var p = new s();

// // p?
// p ---- 属性、方法
// 	===== 共享prototype
// p1 ---属性、方法


 // parent class 父类   child class 子类

 var parent = function(name, age) {
 	this.name = name;
 	this.age = age;
 };

 parent.prototype.c = 'c';
 // var child = function(title) {
 // 	this.title = title;
 // };
 // child.prototype = new parent('lilei', 10);



 var child = function(name, age, title) {
 	this.title = title;
 	parent.call(this, name, age);
 	child.prototype = Object.create(parent.prototype);
 	child.prototype.consturctor = child;
 	// child.prototype.__proto__ = parent.prototype;
 };
 child.prototype.d = "d"
 // child.prototype = new parent('lilei', 10);

new child('lilei', 10, 'student');

|- title : 'student',
|- name : 'lilei'
|- age : 10,
|- __proto__
		|- d : 'd'
		|__proto__
			|- c: 'c'
				|- Object...














