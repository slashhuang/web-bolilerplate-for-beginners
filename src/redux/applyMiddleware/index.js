/*
 * @Author slashhuang
 * 17/4/16
 * redux中的applyMiddleware中间件
 */
import { createStore,applyMiddleware } from 'redux';
/*
 * 中间件 applyMiddleware
 * 参数
 * 	类数组的中间件对象
 * applyMiddleware(...middlewares)
 * 返回值
 *   return {
      ...store,
      dispatch
    }
 *
  koa框架或者cuty等的数据流模型
  request ===>  middleware ===> controller ===> response

  redux的数据流模型
  previouseState 
  	===> action ===> reducers ==>
  nextState	
	

  dispatch(action) ===> reducers

  === monkeyPatch ==
  let _dispatch = store.dispatch;
  let log = (action)=>{console.log(action)}
  dispatch = (action)=>{
	log(action); //打印日志
	_dispatch(action) ;//执行真正的逻辑
  }

  //日志中间件
  //devtool
  curry 化 ==> 
  	1. 多参函数转换成单参函数
  	2. 灵活化闭包
 */

const logger = store => next => action => {
	console.log('logger1'+action);
	console.log(store.getState())
	next(action)
};
// const logger1 = store => next => action => {
// 	setTimeout(next,1000,action)
// };
const thunkMiddleware= store => next => action => {
		console.log('thunk',action)
        let {dispatch,getState}=store;
        if (typeof action == 'function') {
                return action(dispatch, getState);
         }
        return next(action);
};
let reducer = (preState={},action)=>{
 	return Object.assign(preState,action)
}
let store = createStore(reducer,{},applyMiddleware(logger,thunkMiddleware));
document.addEventListener('click',()=>{
	store.dispatch({type:"学习bindActionCreators"})
})


