class A  {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	eat() {
		console.log('eat');
	}
}

class B extends A {
	constructor(name, age, title) {
		super(name, age);
		this.title = title
	}
	work() {
		console.log('work');
	}
}

const c = new B('lilei', 18, 'engineer');
c.work();
c.eat();
console.log(c.name);























