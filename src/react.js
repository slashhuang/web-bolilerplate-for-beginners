/*
 * 增加react decorator
 * @Author slashhuang
 * 17/3/24
 */
import React,{Component} from 'react';
import {render} from 'react-dom';
const RootDom= document.getElementById('root')
/*------step 1--- get started
 * The template syntax in React is called JSX. 
 * It is allowed in JSX to put HTML tags directly into JavaScript codes. 
 * ReactDOM.render() is the method which translates JSX into HTML, 
 * and renders it into the specified DOM node.
 */
render(<h1>hello world</h1>,RootDom)


/** ----- step 2 ----- Use JavaScript in JSX
 * You could also use JavaScript in JSX. It takes angle brackets (<) as the beginning of HTML syntax,
 * and curly brackets ({) as the beginning of JavaScript syntax.
 */

render(<div>{['react','饥人谷','学习'].map(name=> <div>Hello, {name}!</div>)}</div>,
       RootDom);


/** ----- step 3 ----- Use array in JSX
 * If a JavaScript variable is an array, 
 * JSX will implicitly concat all members of the array
 */

var arr = [
  <h1>Hello world!</h1>,
  <h2>React is awesome</h2>,
];
render(<div>{arr}</div>,RootDom);


/** ----- step 4 ----- Define a component
 * a component class, 
 * which implements a render method to return an component instance of the class. 
 * You don't need to call new on the class in order to get an instance, j
 * ust use it as a normal HTML tag.
 */
class FirstComponent extends Component{
    render(){
        return <div>I am a component</div>
    }
 };
render(<FirstComponent />,RootDom);



/** ----- step 5 ----- this.props.children
 * React uses this.props.children to access a component's children nodes.
 */
class ChildComponent extends Component{
    render(){
        return <div>{this.props.children}</div>
    }
 };
render(<ChildComponent>我是个孩子</ChildComponent>,RootDom);

/** ----- step 6 ----- state and props
 * React uses state and props to struct a component model
 */
class PropState extends Component{
    constructor(){
        super();
        this.state={a:'I am state'}
    }
    render(){
        return <div>
                {this.state.a}
                {this.props.b}
                {this.props.children}
              </div>
    }
 };
render(<PropState b="I am prop">我是个孩子</PropState>,RootDom);



