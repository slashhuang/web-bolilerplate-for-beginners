//函数参数的默认值

// function log(x, y = 'World') {
//   console.log(x, y);
// }

// log('hello')

// // log('Hello') // Hello World


//rest参数
function add(a,b,...values) {
  console.log(values)
}

// add(2, 5, 3) // 10

console.log(5,...[1, 2, 3])


// //箭头函数 {}
// var f = v => v;
// var f1 = v=>{
// 	console.log(this)
// }
var f3 = function(v){
	//this
	return v=>{
		console.log(this);
	}
}

// var f4 = function() {
// 	//this
// 	return (v=>{
// 		console.log(this);
// 	})::{a:1}
// };
// f4()()
// var f2 = function() {
// 	console.log(this)
// }












// 箭头函数有几个使用注意点。

// （1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。

// （2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。

// （3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用Rest参数代替。

// （4）不可以使用yield命令，因此箭头函数不能用作Generator函数。