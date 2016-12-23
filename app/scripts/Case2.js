import React from 'react';
import {render} from 'react-dom';
// import config from './config.json';
import '../styles/Cases.scss';

class Case2 extends React.Component {
    constructor() {
        super();
        this.state = {
            text: 'Edit me',
            display: true,
        };
    }
    handleChange(e) {
        this.setState({
            text: e.target.value,
        });
        // console.log(e.target.value);
    }
    textfun() {
        this.setState({
            display: !this.state.display,
        });
    }
    render() {
        return (
            <div>
                <h1>Case2</h1>
                <div className="container2">
                    <input type="text"
                        className={this.state.display ? '' : 'disnone'}
                        value={`${this.state.text}`}
                        onChange={e => this.handleChange(e)}
                    >
                    </input>
                    <div className="text" onClick={() => this.textfun()}>{this.state.text}</div>
                </div>
            </div>
        );
    }
}
export default Case2;
