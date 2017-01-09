import React from 'react';
import {render} from 'react-dom';
import lodash from 'lodash';
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
const trait = [
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
];
class Frame1 extends React.Component {

    render() {
        return (
            <div className="frame1">
                {
                    peoType.map((item, index) =>
                        <li key={`person_${index}`}
                            onClick={() => this.props.onClick(index)}
                        >
                            {item.person}
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
                        trait.map((item, index) =>
                            <li key={`trait_${index}`}
                                onClick={() => this.props.onClick(index)}
                            >
                                {item.traType}
                            </li>
                        )
                    }
                </ul>
                <a>submit</a>
            </div>
        );
    }
}

class Holiday extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            person: '',
        };
    }
    handleClick(index) {
        this.setState({
            person: peoType[index].perType,
        });
    }
    handleSelect(index) {

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

    render() {
        return (
            <div>
                <Frame1 onClick={index => this.handleClick(index)} />
                <Frame2 personValue={`${this.state.person}`} />
                <div className="frame3">

                </div>
            </div>
        );
    }
}
export default Holiday;
