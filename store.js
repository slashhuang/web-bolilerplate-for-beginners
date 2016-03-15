/**
 * Created by slashhuang on 16/3/8.
 */



/**
 * 记录所有被发起的 action 以及产生的新的 state。
 */

/**
 * middleware
 */
const logger = store => next => action => {
        console.group(action.type)
        console.info('dispatching', action)
        let result = next(action)
        console.log('next state', store.getState())
        console.groupEnd(action.type)
        //return result
}
const logger1 = store => next => action => {
        console.group(action.type)
        console.info('logger1', action)
        let result = next(action)
        console.log('next state', store.getState())
        console.groupEnd(action.type)
        //return result
}

import todoApp from './reducers';
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from './actions';
import { createStore, combineReducers, applyMiddleware } from './src/index.js'

let createStoreWithMiddleware = applyMiddleware(logger,logger1)(createStore)
let store = createStoreWithMiddleware(todoApp)

// 监听 state 更新时，打印日志
// 注意 subscribe() 返回一个函数用来注销监听器
let unsubscribe = store.subscribe(() =>
        document.body.innerHTML  += JSON.stringify(store.getState())
);
let unsubscribe1 = store.subscribe(() =>
        document.body.innerHTML  += 'fuckfuckfuck'
);

// 发起一系列 action
store.dispatch(addTodo('Learn about actions'));
store.dispatch(addTodo('Learn about reducers'));
store.dispatch(addTodo('Learn about store'));
store.dispatch(completeTodo(0));
store.dispatch(completeTodo(1));
//unsubscribe1();
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

// 停止监听 state 更新
unsubscribe();
