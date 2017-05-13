/*
 * built by slashhuang
 * 17/5/11
 * 基础的microtask和macrotask
 */


 const p_1 = new Promise((res,rej)=>{
 	res(1)
 	res(2)
 }).then(val=>{
 	console.log(val)
 })

 Promise.resolve({
 	then:(res,rej)=>{
 		res(5)
 	}
 }).then(val=>{
 	console.log(val)
 })

 console.log('3')

 setTimeout(console.log,0,4)
