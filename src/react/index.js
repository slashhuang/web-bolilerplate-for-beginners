/*
 * 增加react decorator
 * @Author slashhuang
 * 17/3/24
 */
import React,{Component} from 'react';// ==> multi terminal 
//解构赋值
import {render} from 'react-dom'; //dom 层面的渲染
const RootDom= document.getElementById('root')
/*------step 1--- get started
 * The template syntax in React is called JSX. 
 * It is allowed in JSX to put HTML tags directly into JavaScript codes. 
 * ReactDOM.render() is the method which translates JSX into HTML, 
 * and renders it into the specified DOM node.
 */
//第一个参数是JSX,第二个参数是对应的dom节点  
// render(<h1 id='1'><div>Hello world</div></h1>,RootDom)


/** ----- step 2 ----- Use JavaScript in JSX
 * You could also use JavaScript in JSX. It takes angle brackets (<) as the beginning of HTML syntax,
 * and curly brackets ({) as the beginning of JavaScript syntax.
 */
// render(<div>
// 		{
// 			['react','饥人谷','学习'].map(function(name){
// 				return <div>Hello, {name}!</div>
// 			})
// 		}
// 	</div>,
//        RootDom);


/** ----- step 3 ----- Use array in JSX
 * If a JavaScript variable is an array, 
 * JSX will implicitly concat all members of the array
 */

// let arr = [
//   <h1>Hello world!</h1>,
//   <h2>React is awesome</h2>
// ];
// render(<div>{arr}</div>,RootDom);

// const A = (props)=>{
//     return <div>{props.gender } + {props.name}</div>
// }
// props ==> properties  {gender:'male',name:'slashhuang'}
// render(<A gender='male' name='slashhuang' />,RootDom)



/** ----- step 4 ----- Define a component
 * a component class, 
 * which implements a render method to return an component instance of the class. 
 * You don't need to call new on the class in order to get an instance, j
 * ust use it as a normal HTML tag.
 */

// lifecycle ===> 生命周期
// 组件化 state + props ==> 
// class FirstComponent extends Component{
//     constructor(){
//         super();
//         this.state={
//             b:1
//         }
//     }
// 	shouldComponentUpdate(){
// 		console.log('shouldComponentUpdate')
// 	}
// 	componentWillUnmount(){
// 		console.log('componentWillUnmount')
// 	}
// 	componentDidUpdate(){
// 		console.log('componentDidUpdate')
// 	}
// 	componentWillUpdate(){
// 		console.log('componentWillUpdate')
// 	}
// 	componentWillReceiveProps(){
// 		console.log('componentWillReceiveProps')
// 	}
// 	componentWillMount(){
// 		console.log('componentWillMount')
// 	}
// 	componentDidMount (){
//         this.setState({b:1})
// 		console.log('componentDidMount')
// 	}
//     render(){
//         debugger;
//     	console.log('render')
//     	let a = '3/26'
//         return <div>
//            	I am a component
//            		{a}
//                 {this.state.b}
//             </div>
//     }
//  };

// render(<FirstComponent />,RootDom);





/** ----- step 5 ----- this.props.children
 * React uses this.props.children to access a component's children nodes.
 */
// class ChildComponent extends Component{
//     render(){
//         return <div>{this.props.children}</div>
//     }
//  };
// render(<ChildComponent>我是个孩子</ChildComponent>,RootDom);

/** ----- step 6 ----- state and props
 * React uses state and props to struct a component model
 */
 //MVVM  ==> model view viewModel

class PropState extends Component{
    constructor(){
        super();
        this.state={a:'I am state'}
    }
    click(){
    	this.setState({
    		a:'我更新啦 哈哈哈'
    	})//=> 更新逻辑
    }
    //更新
    render(){
        return <div onClick={()=>this.click()}>
                {this.state.a}
                {this.props.b}
                {this.props.c}
              </div>
    }
 };
 // data==> Another
 class Another extends Component{
 	constructor(){
 		super();
 		this.state={
 			prop1 : '我是another的第一个prop'
 		};
 	}
    click(){
    	this.setState({
			prop1 : '我是another的第而个prop'
    	})
    }
    render(){
        //inline <input style="">
        let compo = <PropState b={this.state.prop1} c="hello" />;
        return <div onClick={()=>this.click()}>
        			我在another里面啦
               { compo }
              </div>
    }
 };
render(<Another/>,RootDom);



