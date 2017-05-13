/*
 * built by slashhuang
 * 17/5/11
 * generator yield 语法
 */
 const generator_souce = function* () {
 	const y = yield 1
 	console.log('y==='+y)
 	const z = yield 2
 	console.log('z==='+z)
 }
 // control of iteration
 const generator1 = generator_souce()
// value + done[boolean]
// generator的开始
// const a = generator1.next()
// const b = generator1.next(a.value)
// generator1.next(b.value)
// co ==> 封装以上逻辑
const co = generator=>{
	//start the generator
	const a= generator.next()
	setTimeout(()=>{
		if(!a.done){
			const b = generator.next(a.value)
			if(!b.done){
				const c = generator.next(b.value)
				if(!c.done){
					const d = generator.next(c.value)
				}
			}
		}
	},0)
	
}
co(generator1)








// 遍历逻辑+ 传值逻辑

// iteration
// for(let i of generator1){
// 	console.log(i)
// }


 // const g1 = generator1.next()['value']
 // const g2 = generator1.next(g1)['value']
 // const g3 = generator1.next(g2)['value']

 // 用 Promise来处理generator ==> 著名的CO库
