import React from 'react';
import {render} from 'react-dom';
// import config from './config.json';
import '../styles/Cases.scss';

const subs = [
    'HOME',
    'PROJECT',
    'SERVICES',
    'CONTACT',
];

class Case1li extends React.Component {
    constructor() {
        super();
        this.state = {
            li_index: 0,
        };
    }

    handleClick(value, index) {
        this.setState({
            li_index: index,
        });
    }

    render() {
        const oli = subs.map((item, index) =>
            <li key={`case1_li_${index}`}
                className={this.state.li_index === index ? 'active' : ''}
                onClick={() => this.handleClick(item, index)}
            >
                {item}
            </li>
        );

        return (
            <div>
                {oli}
                <h1>You choose <span>{subs[this.state.li_index]}</span></h1>
            </div>
        );
    }
}

class Case1 extends React.Component {

    render() {
        return (
            <div>
                <h1>Case1</h1>
                <div className="container1">
                    <Case1li />
                </div>
            </div>
        );
    }
}

export default Case1;
