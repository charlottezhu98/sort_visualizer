import React from 'react';
import './SortingVisualizer.css';
import * as SortingAlgorithms from '../SortingAlgorithms/SortingAlgorithms.js';

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

    bubbleSort() {

    }

    mergeSort() {
        const jsBuiltInSortedArray = this.state.array.slice().sort((a,b) => a-b);
        const sortedArray = SortingAlgorithms.mergeSort(this.state.array);

        console.log(testArraysAreEqual(jsBuiltInSortedArray, sortedArray));
    }

    heapSort() {

    }

    quickSort() {

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
            <button onClick={() => this.resetArray()}>Reset Array</button>
            <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
            <button onClick={() => this.mergeSort()}>Merge Sort</button>
            <button onClick={() => this.heapSort()}>Heap Sort</button>
            <button onClick={() => this.quickSort()}>Quick Sort</button>
            <button onClick={() => this.test()}>test</button>

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

function testArraysAreEqual (arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

function test () {
    // create 100 random arrays
    for (let i = 0; i < 100; i++) {

    }
}