/**
 * Created by slashhuang on 17/2/19.
 */

const world = "world";
class Test {
    hello(){
        return `hello ${world}`
    }
}

alert(new Test().hello())