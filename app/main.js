import React from 'react';
import {render} from 'react-dom';
import Greeter from '../app/scripts/Greeter';
import Case1 from '../app/scripts/Case1';
import Case2 from '../app/scripts/Case2';
import Case3 from '../app/scripts/Case3';
import Case4 from '../app/scripts/Case4';
import Case5 from '../app/scripts/Case5';
import Filter from '../app/scripts/Filter';
import './main.scss';

render(
    <div>
        <div className="tests ">
            <Greeter />
            <Case1 />
            <Case2 />
            <Case3 />
            <Case4 />
            <Case5 />
        </div>
        <div className="filter ">
            <Filter />
        </div>
    </div>, document.getElementById('container')
);
// render(<Case1 />, document.getElementById('case1'));
// render(<Case2 />, document.getElementById('case2'));
// render(<Case3 />, document.getElementById('case3'));
// render(<Case4 />, document.getElementById('case4'));
