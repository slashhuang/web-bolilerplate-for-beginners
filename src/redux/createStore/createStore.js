/*
 * @Author slashhuang
 * 17/4/16
 * redux中的createStore是最核心的api
 * 创建store
 */
import { createStore } from 'redux';
/*
 * 参数
 * createStore(reducer, preloadedState, enhancer) 
 * 返回值
 * {
    dispatch, ===> 分发action
    subscribe, [listen1,listener2]  ===> 在每次dispatch的时候，注册回调函数
    getState, ===> getter 获取redux当前的state
    replaceReducer,
    [$$observable]: observable
  }
  model1 ==> model2
  action ==> reducer ==> nextState
 */
 let reducer = (preState,action)=>{
 	switch(action.type){
 		case 'first':
 			return  Object.assign(preState,{name:'first cli'})
 		case 'second':
 			return  Object.assign(preState,{name:'2nd called'})
 		default:
 			return preState
 	}
 }
 let store = createStore(reducer,{a:1});
 module.exports=store




