/**
 * Created by slashhuang on 17/2/19.
 */

const world = "world";
//类 ==> prototype constructor
class Test {
	constructor(){
		this.a = 'a'
	}
    hello(){
        return `hello ${this.a}`//模板字符串
    }
}



alert(new Test().hello())