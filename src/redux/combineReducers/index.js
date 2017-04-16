/*
 * @Author slashhuang
 * 17/4/16
 * redux中的createStore是最核心的api
 * 创建store
 */
import { createStore,combineReducers } from 'redux';

let reducer = (preState={},action)=>{
 	return Object.assign(preState,action)
}
let reducer1 = (preState={},action)=>{
 	return Object.assign(preState,{hello:'我是另一个reducer'})
}
/* 合并reducers
 * 参数
 * combineReducers(reducers)
 * 返回值
 * function(state,action)
 */
let finalReducer = combineReducers({
	userList:reducer,
	userDetail:reducer1
});
let store = createStore(finalReducer,{userList:{}});

store.dispatch({type:"学习combineReducers"})
console.log(store.getState());

