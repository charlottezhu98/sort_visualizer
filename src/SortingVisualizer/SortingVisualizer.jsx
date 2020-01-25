import React from 'react';
import './SortingVisualizer.css';

export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        this.resetArray();
    }


    render() {
        const {array} = this.state;
        
        return (
            <div className="array-container">
            {array.map((value, index) => (
                // if you dont put key (in iterables) in React console gives you warning
                <div className="array-bar" 
                    key={index}
                    style={{height:`${value}px`}}>
                </div>
            ))}
           </div>
        );
        
            
    }

    resetArray() {
        const array = [];

        for (let i = 0; i < 100; i++) {
            // values less than 5 is not big enough to be clearly visible
            array.push(randomInt(5,730));
        }
        this.setState({array});
    }

}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}