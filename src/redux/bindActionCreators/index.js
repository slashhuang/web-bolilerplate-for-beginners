/*
 * @Author slashhuang
 * 17/4/16
 * redux中的createStore是最核心的api
 * 创建store
 */
import { createStore,bindActionCreators } from 'redux';
/* 
 * 参数 {}
 * bindActionCreators(actionCreators, dispatch)
 * 返回值
 * {Function|Object}
 *
 * action ==> reducers ==> nextState
 * action1 action2 action3
 *
 * ajax
 * store.dispatch(action1) 
   store.dispatch(action2)
   store.dispatch(action3)

===>let wrapper =  bindActionCreators({
		click:action1,
		focus:action2
	},dispatch)
	wrapper.click('参数')
 *
 */
let reducer = (preState={},action)=>{
 	return Object.assign(preState,action)
}
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
	//store.dispatch({type:'学习bindActionCreators'})
	AutoDispatch.click("学习bindActionCreators")
})


