/*
 * built by slashhuang
 * 17/5/11
 * 基础的microtask和macrotask
 */

// repl
 const p_1 = new Promise((res,rej)=>{
 	res(1) //==> resolved
 	console.log('started')
 	// res(2) //==> rejected  ===> sealed封锁
 	// res(3)
 	//=> enqueue to microtask [当前js执行loop的尾部]
 }).then(val=>{
 	//第二个
 	console.log(val)
 })

// thenable  ==>  enqueue to microtask [当前js执行loop的尾部]
 Promise.resolve({
 	then:(res,rej)=>{
 		j2
 		res(5)
 	}
 	// j3
 }).then(val=>{
 	//第三个
 	console.log(val)
 })
//第一个
 console.log('3')

//第四个 j5
// enqueue to macrotask [下个js loop ]
 setTimeout(console.log,0,4)
// 1行1行的执行 【 1 2 3 4 】 [j1,j2,j3] [macrotask j5]










