/*
 * 异步编程 番外讲解
 * built by slashhuang
 * 17/5/10
 * rxjs
 */

import { Observable } from 'rxjs/Rx'
const o_1 = Observable.create(observer=>{

	observer.next(1)

	setTimeout(()=>observer.next(2),1000)

	setTimeout(()=>observer.next(3),2000)
	
	setTimeout(()=>observer.complete(),2000)

})
o_1.subscribe({
	next:console.log,
	complete:()=>console.log('complete'),
	error:console.log
})