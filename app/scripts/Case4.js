import React from 'react';
import {render} from 'react-dom';
import update from 'immutability-helper';
// import config from './config.json';
import '../styles/Cases.scss';


class Case4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    images: './source/01.jpg',
                    text: 'What You Need To Know About CSS Variables',
                },
                {
                    images: './source/02.jpg',
                    text: 'Freebie: 4 Great Looking Pricing Tables',
                },
                {
                    images: './source/03.jpg',
                    text: '20 Interesting JavaScript and CSS Libraries for February 2016',
                },
                {
                    images: './source/04.jpg',
                    text: 'Quick Tip: The Easiest Way To Make Responsive Headers',
                },
                {
                    images: './source/05.jpg',
                    text: 'Learn SQL In 20 Minutes',
                },
                {
                    images: './source/06.jpg',
                    text: 'Creating Your First Desktop App With HTML, JS and Electron',
                },
            ],
            eValue: '',
        };
    }

    handleChange(e) {
        this.setState({
            eValue: e.target.value,
        });
    }

    render() {
        return (
            <div className="container4">
                <h1>Case4</h1>
                <input placeholder="Enter your search terms"
                    onChange={e => {
                        this.handleChange(e);
                    }}
                >
                </input>
                <div>
                    {
                        this.state.items.filter((item, index) =>
                            item.text.toLowerCase().includes(this.state.eValue.toLowerCase())
                        ).map((item, index) =>
                            <li key={`keyNum_${index}`}>
                                <img src= {`${item.images}`}></img>
                                <p>{item.text}</p>
                            </li>
                        )
                    }
                </div>
            </div>
        );
    }
}


export default Case4;
