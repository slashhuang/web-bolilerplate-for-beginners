/**
 * Created by slashhuang on 16/3/8.
 */



/**
 * 记录所有被发起的 action 以及产生的新的 state。
 */

/**
 * middleware
 * dispatch
 * =>function(){}
 * =>
 */
const logger = store => next => action => {
        console.group(action.type)
        console.info('dispatching', action);
        debugger;
        let result = next(action)
        console.log('next state', store.getState())
        console.groupEnd(action.type)
        //return result
};
const logger1 = store => next => action => {
        debugger;
        console.group(action.type)
        console.info('logger1', action)
        let result = next(action)
        console.log('next state', store.getState())
        console.groupEnd(action.type)
        //return result
};
//var test = function(store){
//    return (next){
//        return (action){
//            //dosomething with store
//            next(action);
//
//        }
//    }
//}
//1
/**
 * 引入改写过的store
 */

import todoApp from './reducers';
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from './actions';
/**
 * 所有接口放在src/index.js
 */
import { createStore, combineReducers, applyMiddleware } from '../src/index.js'

let createStoreWithMiddleware = applyMiddleware(logger,logger1)(createStore(todoApp))
let store = createStoreWithMiddleware;

/**
 * 监听 state 更新时，打印日志
 *
 * 注意 subscribe() 返回一个函数用来注销监听器
 */
let unsubscribe = store.subscribe(() =>
        document.body.innerHTML  += JSON.stringify(store.getState())
);
let unsubscribe1 = store.subscribe(() =>
        document.body.innerHTML  += 'subscribing'
);

/**
 * 发起一系列 action
 */
store.dispatch(addTodo('Learn about actions'));
store.dispatch(addTodo('Learn about reducers'));
store.dispatch(addTodo('Learn about store'));
store.dispatch(completeTodo(0));
store.dispatch(completeTodo(1));
//unsubscribe1();
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

// 停止监听 state 更新
unsubscribe();
