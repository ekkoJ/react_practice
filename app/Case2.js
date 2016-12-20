import React from 'react';
import {render} from 'react-dom';
// import config from './config.json';
import './Cases.scss';

class Case2 extends React.Component {
    constructor() {
        super();
        this.state = {
            text: 'Edit me',
        };
    }
    handleChange(e) {
        this.setState = {
            text: this.props.value,
        };
        // console.log(e.target.value);
    }
    render() {
        return (
            <div>
                <h1>Case2</h1>
                <div className="container2">
                    <input type="text"
                        value={`${this.state.text}`}
                        onChange={() => this.handleChange()}
                    >
                    </input>
                    <div className="text">{this.state.text}</div>
                </div>
            </div>
        );
    }
}
export default Case2;
