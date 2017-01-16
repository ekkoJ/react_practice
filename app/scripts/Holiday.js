import React from 'react';
import {render} from 'react-dom';
import lodash from 'lodash';
import update from 'immutability-helper';
import Frame1 from './holiday_frames/frame1';
import Frame2 from './holiday_frames/frame2';
import Frame3 from './holiday_frames/frame3';
import * as datas from './holiday_frames/holiday_configs';
import '../styles/Holiday.scss';


class Holiday extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showIndex: 0,
            personIndex: 0,
            trait: [
                {
                    traType: 'CHILL',
                    selected: false,
                },
                {
                    traType: 'CHIC AESTHETE',
                    selected: false,
                },
                {
                    traType: 'EMO',
                    selected: false,
                },
                {
                    traType: 'TYPE A',
                    selected: false,
                },
                {
                    traType: 'EARLY ADOPTER',
                    selected: false,
                },
                {
                    traType: 'FANCY',
                    selected: false,
                },
            ],
            selectedArr: [],
            handleData: [],
            finalData: [],
        };
        fetch(datas.jsonUrl)
        .then(res => res.json())
        .then(content =>
            this.setState({
                handleData: content.items[0].fields.jsonFull.feed.entry,
            })
        );
    }
    handleClick(index) {
        if (index === 5) {
            this.setState({
                showIndex: 2,
                personIndex: index,
                finalData: this.state.handleData,
            });
        } else {
            const sIndex = this.state.showIndex + 1;
            this.setState({
                showIndex: sIndex,
                personIndex: index,
            });
            if (this.state.selectedArr.length === 3 && sIndex === 1) {
                this.handleSubmit2(index);
            }
        }
    }
    handleSelect(index) {
        if (this.state.selectedArr.length === 3 && !this.state.trait[index].selected) return;
        const newArray = update(this.state.trait, {
            [index]: {
                selected: {
                    $set: !this.state.trait[index].selected,
                },
            },
        });
        const newTrait = [];
        newArray.forEach((item, index) => {
            if (item.selected) {
                newTrait.push(item.traType);
            }
        });
        this.setState({
            trait: newArray,
            selectedArr: newTrait,
        });
    }
    handleSubmit() {
        const dataArr = [];
        this.state.handleData.forEach((item, index) => {
            if (datas.peoType[this.state.personIndex].perType.toLowerCase()
            === item.gsx$person.$t.toLowerCase()) {
                if (this.state.selectedArr.includes(item.gsx$trait.$t.toUpperCase())) {
                    dataArr.push(item);
                }
            }
        });
        this.setState({
            finalData: dataArr,
        });
        this.handleClick(this.state.personIndex);
    }
    handleSubmit2(person_index) {
        const dataArr = [];
        this.state.handleData.forEach((item, index) => {
            if (datas.peoType[person_index].perType.toLowerCase()
            === item.gsx$person.$t.toLowerCase()) {
                if (this.state.selectedArr.includes(item.gsx$trait.$t.toUpperCase())) {
                    dataArr.push(item);
                }
            }
        });
        this.setState({
            showIndex: 2,
            personIndex: person_index,
            finalData: person_index === 5 ? this.state.handleData : dataArr,
        });
    }
    handleBack(index) {
        this.setState({
            showIndex: index,
        });
    }
    frames (show, index) {
        switch (show) {
            case 1:
                return <div>
                            <Frame2 personValue={datas.peoType[index].perType}
                                    trait={this.state.trait}
                                    onClick={i => this.handleSelect(i)}
                            />
                            <a className="submit"
                                onClick={() => {
                                    if (this.state.selectedArr.length >= 3) {
                                        this.handleSubmit();
                                    }
                                }}
                            >
                                submit
                            </a>
                      </div>;
            case 2:
                return <div>
                    <Frame3 finalData={this.state.finalData} />
                    <div className="selectWindow">
                        <p onClick={() => this.handleBack(0)}>person</p>
                        <p onClick={() => this.handleBack(1)}>trait</p>
                    </div>
                </div>;
            default:
                return <Frame1 onClick={i => this.handleClick(i)}/>;
        }
    }

    render(props) {
        return (
            <div>
                {
                    this.frames(this.state.showIndex, this.state.personIndex)
                }
            </div>
        );
    }
}
export default Holiday;
