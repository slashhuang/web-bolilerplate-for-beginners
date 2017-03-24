/*
 * 增加react decorator
 * @Author slashhuang
 * 17/3/24
 */
 import React,{Component} from 'react';
 import {render} from 'react-dom';
 import _ from 'lodash'

const highOrderFunc=methodHook=>InnerComponent=>{
    _.forIn(methodHook, (hookFn, key)=>{
        let cache = InnerComponent.prototype[key]
        InnerComponent.prototype[key]=function(...args){
            cache.apply(this,args)
            hookFn()
        }
    });
    return InnerComponent
}
@highOrderFunc({'clickFunc':()=>console.log('hook click called')})
class FirstComponent extends Component{
    constructor(){
        super();
        this.state={ text: 'hello world' }
    }
    clickFunc(){
        this.setState({text:'I am clicked'})
    }
    render(){
        return <div onClick={::this.clickFunc}>{this.state.text}</div>
    }
 };
 render(<FirstComponent />,document.getElementById('root'))
