/*
 * built by slashhuang
 * 17/5/11
 * async + await语法 ==> Promise+generator+autoIterate
 */

 const f = async (val)=>{
 	const await1 = await new Promise((resolve,reject)=>{
 		resolve(val)
 	}).then(val=>{
 		return val+1
 	})
 	console.log(`await value is ==>${await1}`)
 }
 
 f(2)
 f(3)