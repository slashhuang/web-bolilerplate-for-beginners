import React, {PureComponent} from 'react';
import {render} from 'react-dom';
import { Player } from './player';
const RootDom= document.getElementById('root');
render(<Player />, RootDom);