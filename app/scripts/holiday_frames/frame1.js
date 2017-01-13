import React from 'react';
import {render} from 'react-dom';
import '../../styles/Holiday.scss';
import * as datas from '../holiday_frames/holiday_configs';

class Frame1 extends React.Component {

    render() {
        return (
            <div className="frame1">
                {
                    datas.peoType.map((item, index) =>
                            <li key={`person_${index}`}
                                onClick={() => {
                                    this.props.onClick(index);
                                }}
                            >
                                {datas.peoType[index].person}
                            </li>
                    )
                }
            </div>
        );
    }
}
export default Frame1;
