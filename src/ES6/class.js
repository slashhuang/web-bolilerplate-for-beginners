

class Test {
	constructor(){
		this.a = 'a';
		this.b = 'b'
	}
	c(){
		console.log('c')
	}
}


// let Test = function (argument) {
// 	this.a = 'a';
// 	this.b = 'b'
// };
// Test.prototype.d ='d'

let inst = new Test();
console.log(inst.c())