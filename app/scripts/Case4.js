import React from 'react';
import {render} from 'react-dom';
// import config from './config.json';
import '../styles/Cases.scss';


class Case4 extends React.Component {
    constructor() {
        super();
        this.state = {
        };
    }


    render() {
        return (
            <div>
                <h1>Case4</h1>
                <input placeholder="Enter your search terms"></input>
                <div className="container4">
                    
                </div>
            </div>
        );
    }
}


export default Case4;
