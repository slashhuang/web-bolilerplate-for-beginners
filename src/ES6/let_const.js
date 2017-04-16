// let 和 const

//变量声明

let a = 0 ;
// 适用for 循环
for (let i = 0; i < 10; i++) {
	console.log(i);
}

// //比对


// 块级作用域
export function f1() {
  let n = 5;
  if (true) {
    let n = 10;
  }
  console.log(n); // 5
}

const C= 'C';
export default {C}

// export f1  ;

// const b = 0;
// //pointer to heap
// const c= {
// 	a:1
// }
// c= {a:2}



// //块级作用域返回值 do expression
// let x = do{
// 	1
// }

// //const read only 

// const p = 1;

















