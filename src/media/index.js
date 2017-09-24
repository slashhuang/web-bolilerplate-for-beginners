import React from 'react';
import {render} from 'react-dom'; // 结构赋值
import ReactDom from 'react-dom';
import { Player } from './player';
const RootDom= document.getElementById('root');
render(<Player />, RootDom); // javascript xml


let s =  {
    tt: 0,
    get a() {
        return s.tt;
    },
    set a(val) {
        s.tt = val + 2;
        // player.goToAnotherTime(time);
    }

}
s.a = 3;
console.log(s.a);