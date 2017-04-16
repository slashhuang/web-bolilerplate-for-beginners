// import redux from 'redux';
let redux = require('redux');
/*

 * redux的主要对外api
 * ------- 中间件流转逻辑
 *
 * applyMiddleware

 * ------- utility工具
 * bindActionCreators
 * combineReducers  必掌握
 * compose
 * ------- 最核心的api
 * createStore 
 */

 /*let model = {} 
	model.a = 'a' 
	//无序的改变

	优势： trackable model
	action 发起变更 'changeA'	
	===> reducers   返回一个新的model {a:1}
	===> model ==> {a:1}

 */
// require('./createStore/')
// require('./combineReducers/')
// require('./bindActionCreators/')

// require('./compose/')
require('./applyMiddleware/')

