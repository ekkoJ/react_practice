import React from 'react';
import {render} from 'react-dom';
import lodash from 'lodash';
import update from 'immutability-helper';
import '../styles/Holiday.scss';

const jsonUrl = 'https://cdn.contentful.com/spaces/gju6m3ezaxar/entries?content_type=jsonFull&include=10&limit=200&access_token=e887c7cd3298dd5e14cce7cd22523670abea9de380aef548efcbcb4b3a612ee9';
const peoType = [
    {
        person: 'MOM',
        perType: 'MOM',
    },
    {
        person: 'DAD',
        perType: 'DAD',
    },
    {
        person: 'S.O.',
        perType: 'S.O.',
    },
    {
        person: 'BFF',
        perType: 'BFF',
    },
    {
        person: 'WORK SPOUSE',
        perType: 'WORK SPOUSE',
    },
    {
        person: 'SUPRISE ME',
        perType: '',
    },
];
class Frame1 extends React.Component {

    render() {
        return (
            <div className="frame1">
                {
                    peoType.map((item, index) =>
                            <li key={`person_${index}`}
                                onClick={() => {
                                    this.props.onClick(index);
                                }}
                            >
                                {peoType[index].person}
                            </li>
                    )
                }
            </div>
        );
    }
}

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


class Holiday extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showIndex: 0,
            Vindex: 0,
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
        };
    }
    handleClick(index) {
        const sIndex = this.state.showIndex + 1;
        this.setState({
            showIndex: sIndex,
            Vindex: index,
        });
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
        this.setState({
            trait: newArray,
            selectedArr: this.state.trait[index].selected ?
            this.state.selectedArr.unshift(this.state.trait[index].traType) :
            this.state.selectedArr.push(this.state.trait[index].traType),
        });
        console.log(this.state.selectedArr);
    }
    handleSubmit() {

    }
    frames (showIndex, index) {
        switch (showIndex) {
            case 1:
                return <div>
                            <Frame2 personValue={peoType[index].perType}
                                    trait={this.state.trait}
                                    onClick={i => this.handleSelect(i)}
                            />
                        <a className="submit" onClick={() => this.handleSubmit()}>submit</a>
                      </div>;
            case 2:
                return <Frame3 />;
            default:
                return <Frame1 onClick={i => this.handleClick(i)} />;
        }
    }

    // fetchJson() {
        // fetch(jsonUrl)
        // .then(res => res.json())
        // .then(content =>
            // content.items[0].fields.jsonFull.feed.entry.map((item, index) =>
                // <li key={`trit_${index}`}>
                //     {item.gsx$trait}
                // </li>

            // )
        // )
    // }

    render(props) {
        return (
            <div>
                {
                    this.frames(this.state.showIndex, this.state.Vindex)
                }
            </div>
        );
    }
}
export default Holiday;
