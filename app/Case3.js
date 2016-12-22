import React from 'react';
import {render} from 'react-dom';
import './Cases.scss';


class Case3 extends React.Component {
    constructor() {
        super();
        this.state = {
            Configs: [
                {
                    name: 'Web Development',
                    money: 300.00,
                    selected: false,
                },
                {
                    name: 'Design',
                    money: 400.00,
                    selected: false,
                },
                {
                    name: 'Integration',
                    money: 250.00,
                    selected: false,
                },
                {
                    name: 'Training',
                    money: 220.00,
                    selected: true,
                },
            ],
        };
    }
    handleClick(item) {
        item.selected = !item.selected;
        this.setState({
            Configs: this.state.Configs,
        });
    }
    render() {
        let sum = 0;
        this.state.Configs.forEach((item, index) => {
            sum = item.selected ? sum + item.money : sum;
        });

        return (
            <div>
                <h1>Case3</h1>
                <div className="container3">
                    {
                        this.state.Configs.map((item, index) =>
                            <li
                                key={`name_${index}`}
                                onClick={index => this.handleClick(item)}
                                className={item.selected ? 'active' : ''}
                            >
                                {item.name}
                                <span>${item.money.toFixed(2)}</span>
                            </li>
                        )
                    }
                </div>
                <div>
                    <span>Total:</span>
                    <span>${sum.toFixed(2)}</span>
                </div>
            </div>
        );
    }
}
export default Case3;
