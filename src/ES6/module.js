

//webpack ==> 处理require

import   Hello, { f1 }   from './let_const.js';

import * as Fuck from './let_const'

const ff = require('./let_const');


console.log(f1)
console.log(Hello)
console.log(Object.keys(Fuck),Fuck.__esModule)

console.log(ff)
