class TestSuper {
	constructor() {
		this.c = 'a1';
	}
	e(){}
}
class Test extends TestSuper{ 
	constructor(){
		super();
		this.a = 'a';
		this.b = 'b'
	}
	d(){
		return 'ddddd';
	}
}

let ins = new Test();
// React用class语法来写


let TestFactory = function (argument) {
	this.a = 'a';
	this.b = 'b'
};
Test.prototype.c = () => 'ddddd';
let inst = new Test();
console.log(inst.d)