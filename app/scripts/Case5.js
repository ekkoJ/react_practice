import React from 'react';
import {render} from 'react-dom';
import '../styles/Cases.scss';


const Configs = [
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
];

class Case5 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 0,
        };
    }
    handleClick(index) {
        this.setState({
            size: index === 0 ? '' : 'bigSize',
        });
    }
    render() {
        return (
            <div>
                <h1>Case5</h1>
                <div className="container5">
                    <div className="ctas">
                        <li onClick={() => this.handleClick(0)}>1</li>
                        <li onClick={() => this.handleClick(1)}>2</li>
                    </div>
                    <ul className={`${this.state.size}`}>
                        {
                            Configs.map((item, index) =>
                                <li key={`pic_${index}`}>
                                    <img src= {`${item.images}`}></img>
                                    <p>{item.text}</p>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        );
    }
}
export default Case5;
