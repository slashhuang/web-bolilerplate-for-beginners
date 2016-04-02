/**
 * 创建redux中间件
 */
export default function applyMiddleware(...middlewares) {
    //参数和redux的store保持一致，这一块就是所有的函数式API逻辑了
    return (store) => {
        var dispatch = store.dispatch
        //传递store的部分API给中间件
        var middlewareAPI = {
            getState: store.getState,
            dispatch: (action) => dispatch(action)
        }
        //这种方式可以让类似arguments数组拥有数组的所有方法，ES6的妙用!!
        /**
         * 整个中间件的实现目的是不断修正dispatch
         */
        middlewares.forEach(middleware =>
            /**
             * 不断堆积闭包函数栈
             * @param middleware
             */
                dispatch = middleware(middlewareAPI)(dispatch)
        )
        /**
         * 覆盖原来的dispatch函数
         */
        return Object.assign({},
            store,{
                dispatch
            })
    }
}
