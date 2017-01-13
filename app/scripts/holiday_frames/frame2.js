import React from 'react';
import {render} from 'react-dom';
import '../../styles/Holiday.scss';
import * as datas from '../holiday_frames/holiday_configs';

class Frame2 extends React.Component {

    render() {
        return (
            <div className="frame2">
                <p>What is your <span>{`${this.props.personValue}`}</span> like?</p>
                <p>Choose 3 traits</p>
                <ul>
                    {
                        this.props.trait.map((item, index) =>
                            <li key={`trait_${index}`}
                                className={item.selected ? 'active' : ''}
                                onClick={() => this.props.onClick(index)}
                            >
                                {item.traType}
                            </li>
                        )
                    }
                </ul>

            </div>
        );
    }
}

export default Frame2;
