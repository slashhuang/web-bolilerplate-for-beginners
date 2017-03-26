/*
 * 增加react decorator
 * @Author slashhuang
 * 17/3/24
 */
import React,{Component} from 'react';
import {render} from 'react-dom';

render(<h1>hello world</h1>,document.getElementById('root'))




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
// render(<FirstComponent />,document.getElementById('root'))



