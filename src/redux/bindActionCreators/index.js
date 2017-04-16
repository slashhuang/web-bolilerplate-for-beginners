/*
 * @Author slashhuang
 * 17/4/16
 * redux中的createStore是最核心的api
 * 创建store
 */
import { createStore,bindActionCreators } from 'redux';

let reducer = (preState={},action)=>{
 	return Object.assign(preState,action)
}
/* 合并reducers
 * 参数
 * bindActionCreators(actionCreators, dispatch)
 * 返回值
 * {Function|Object}
 */
let store = createStore(reducer,{});
store.subscribe(()=>{
	document.body.innerHTML += JSON.stringify(store.getState())
})
//action creator 
let clickAction = name=>{
	return {
		type:name
	}
};

let AutoDispatch = bindActionCreators(
	{click:clickAction},	
	//获取 dispatch reference
	store.dispatch
);

document.addEventListener('click',()=>{
	AutoDispatch.click("学习bindActionCreators")
})


