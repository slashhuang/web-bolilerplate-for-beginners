/*
 * built by slashhuang
 * 17/5/11
 * generator yield 语法
 */
 const generator_souce = function* (argument) {
 	console.log('start')
 	const y = yield 1
 	console.log(y)
 	const z = yield y+1
 	console.log(z)
 	console.log('end')
 }
 const generator1 = generator_souce()

 const g1 = generator1.next()['value']
 const g2 = generator1.next(g1)['value']
 const g3 = generator1.next(g2)['value']

 // 用 Promise来处理generator ==> 著名的CO库
