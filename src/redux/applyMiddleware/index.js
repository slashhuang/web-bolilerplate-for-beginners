/*
 * @Author slashhuang
 * 17/4/16
 * redux中的applyMiddleware中间件
 * Middleware makes it easier for software developers
 * to implement 【communication and input/output】,
 * so they can focus on the 【specific purpose of their application】.
 * service服务
 *  input/output service
 */

// ajax ==>  json(乱的数据) =service转换=>  UI(整齐的数据)
// express/Koa
// 前端
// ajax ==http==>
// httpRequest(head,cookie,body)
// middlewares(解析cookie, 拿到post请求的数据)
// 数据就是好的一笔的数据
// 后端(node.js)
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
// 高阶函数
import { createStore, applyMiddleware } from 'redux';
const logger1 = store => next => action => {
    console.log('current dipatch' + JSON.stringify(action));
    next(action);
};
const logger2 = store => next => action=> {
    next(action);
};
const enhancer = applyMiddleware(logger1, logger2);
const reducer = (state, action) => state;
const store = createStore(reducer, {}, enhancer);
store.dispatch({type:1});
store.dispatch({type:2});
store.dispatch({type:3});

// action ==> ==dispatch==> reducer ==> nextState;
// action ==middlewares==> ==dispatch==> reducer ==> nextState;
