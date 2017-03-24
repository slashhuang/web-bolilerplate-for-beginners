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


 const highOrderFunc1=actions=>InnerComponent=>{
    class Inst1 extends Component{
        componentDidMount(){
              let _ref = this.refs.InnerComponent;
                 //侵入事件
                 _ref.__proto__.clickFunc = function(...args){
                    this.props.Update();
                    let { text } = this.state;
                    this.setState({text:`add Text ${text}`})
                 }
        }
        render(){
            //update Props
            this.props = {
                ...this.props,
                ...actions
            };
            return <InnerComponent ref='InnerComponent' {...this.props}/>
        }
    }
    return Inst1;
}
@highOrderFunc1({
    'Update':()=>{console.log('Update')}
})
class FirstComponent1 extends Component{
    constructor(){
        super()
        this.state={ text: 'hello world' }
    }
    clickFunc(){
        this.setState({text:'I am clicked'})
    }
    render(){
        return <div onClick={()=>this.clickFunc()}>{this.state.text}</div>
    }
 };
 render(<FirstComponent1  color='red'/>,document.getElementById('root1'))






