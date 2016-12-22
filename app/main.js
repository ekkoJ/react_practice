import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';
import Case1 from './Case1';
import Case2 from './Case2';
import Case3 from './Case3';
import Case4 from './Case4';
import './main.scss';

render(<Greeter />, document.getElementById('container'));
render(<Case1 />, document.getElementById('case1'));
render(<Case2 />, document.getElementById('case2'));
render(<Case3 />, document.getElementById('case3'));
render(<Case4 />, document.getElementById('case4'));
