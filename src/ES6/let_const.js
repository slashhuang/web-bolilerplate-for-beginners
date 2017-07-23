// let 和 const

export let a = 0 ;

// 适用for 循环
// for (let i = 0; i < 10; i++) {
// 	console.log(i);
// }

// //比对

// 块级作用域
function f1() {
  let n = 5;
  if (true) {
    let n = 10;
  }
  console.log(n); // 5
}
f1()

const C= 'C'; // readonly 

const c= { // point to a reference
	a:1
}
// c={a: 2}; // point to another reference
c.a = 2;


// //块级作用域返回值 do expression
// let x = do{
// 	1
// }

// //const read only 

// const p = 1;

















