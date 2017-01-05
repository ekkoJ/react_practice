import React from 'react';
import {render} from 'react-dom';
import lodash from 'lodash';
import config from '../config.json';
import '../styles/Filter.scss';

const allType = [
    {
        types: ['aaa'],
        value: 'a',
    },
    {
        types: ['bbb'],
        value: 'b',
    },
    {
        types: ['ccc'],
        value: 'c',
    },
    {
        types: ['aaa', 'bbb'],
        value: 'a+b',
    },
    {
        types: ['bbb', 'ccc'],
        value: 'b+c',
    },
    {
        types: ['aaa', 'ccc'],
        value: 'a+c',
    },
    {
        types: ['all'],
        value: 'all',
    },
];

function randomNum(typeArr) {
    let newArr = [];
    if (typeArr[0] === 'all') {
        newArr = config.imgs;
    } else {
        newArr = config.imgs.filter(item => typeArr.includes(item.type));
    }

    return _.shuffle(newArr);
}

class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: config.imgs,
            thistype: [],
        };
    }

    handleClick(typeArr) {
        if (typeArr === this.state.thistype) return;
        this.setState({
            history: randomNum(typeArr),
            thistype: typeArr,
        });
    }

    render() {
        return (
            <div className="filter">
                <h1>Filter</h1>
                <div className="choice">
                    {
                        allType.map((item, index) =>
                            <li key={`oli_${index}`}
                                onClick={() => this.handleClick(item.types)}
                            >
                                {item.value}
                            </li>
                        )
                    }
                </div>
                <div className="fcont">
                    {
                        this.state.history.map((item, index) =>
                            <li key={`i_${index}`}>
                                <img src={`${item.images}`}></img>
                            </li>
                        )
                    }
                </div>
            </div>
        );
    }
}
export default Filter;
