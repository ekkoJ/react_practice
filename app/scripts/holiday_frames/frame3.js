import React from 'react';
import {render} from 'react-dom';
import '../../styles/Holiday.scss';
import * as datas from '../holiday_frames/holiday_configs';

class Frame3 extends React.Component {

    render() {
        return (
            <div className="frame3">
                {
                    this.props.finalData.map((item, index) =>
                        <li key={`person_${index}`}>
                            <div className="left">
                                <img src={`${item.gsx$image.$t}`}></img>
                            </div>
                            <div className="right">
                                <h1>{item.gsx$itemname.$t}</h1>
                                <h2>{item.gsx$description70charactersmax.$t}</h2>
                                <h3>{item.gsx$price.$t}</h3>
                            </div>
                        </li>
                    )
                }
            </div>
        );
    }
}
export default Frame3;
