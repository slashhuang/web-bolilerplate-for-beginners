/*
 * 异步编程 番外讲解
 * built by slashhuang
 * 17/5/10
 * rxjs
 * realtime[即时通讯 im] + continuency[持续性 stock]
 */

import { Observable } from 'rxjs/Rx'
const observer ={
	next:console.log,
	complete:()=>console.log('complete'),
	error:console.log
}
// observable == push notifications ==> observer
const o_1 = Observable.create(observer=>{
	observer.next(1)
	setTimeout(()=>observer.next(2),1000)
	setTimeout(()=>observer.next(3),2000)
	setTimeout(()=>observer.complete(),2000)
})
o_1.subscribe(observer)
// pub/sub observer观察者模式
const o_2 = Observable.interval(1000).map(val=>val*2)
o_2.subscribe(observer)







