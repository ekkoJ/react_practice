import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';
import Case1 from './Case1';
import Case2 from './Case2';
// import './main.css';
import './main.scss';

render(<Greeter />, document.getElementById('container'));
render(<Case1 />, document.getElementById('case1'));
render(<Case2 />, document.getElementById('case2'));
