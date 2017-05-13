// Firefox和Chrome早期版本中带有前缀
const MutationObserver = window.MutationObserver
 || window.WebKitMutationObserver || window.MozMutationObserver
// 创建观察者对象
const observer = new MutationObserver(mutations=>{
  mutations.forEach(function(mutation) {
    console.log(mutation.type);
  })   
}) 
// 配置观察选项:
const config = { 
	attributes: true, 
	childList: true, 
	characterData: true 
}
// 选择目标节点
const target = document.querySelector('#test');
// 传入目标节点和观察选项
observer.observe(target, config);

target.appendChild(document.createElement("div"))   
/*
 * mutationObserver优先于setTimeout
 */
setTimeout(console.log,0,'setTimeout')
console.log('appending')  
target.setAttribute('class','hello')                       //添加了一个元素子节点,触发回调函数.

// 随后,你还可以停止观察
// observer.disconnect();


/*
 * doc  https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserver
 */