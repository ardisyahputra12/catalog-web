/**
 * title: "02_FizzBuzzApp"
 * desc: "Stateful Component. Latihan Component State dan Event Handling"
 * date: 01 Jan 2023
 */

import React from "react";

function CounterDisplay({ count }) {
    // Modify
    // if (count === 0) {
    //     return <p>{count}</p>;
    // }

    // if (count % 5 === 0 && count % 7 === 0) {
    //     return <p>FizzBuzz</p>;
    // }

    // if (count % 5 === 0) {
    //     return <p>Fizz</p>;
    // }

    // if (count % 7 === 0) {
    //     return <p>Buzz</p>;
    // }

    // return <p>{count}</p>;

    let el = (e) => { return <p className="mt-3">{e}</p>; }

    if (count === 0) { return el(count); }
    if (count % 5 === 0 && count % 7 === 0) { return el("FizzBuzz"); }
    if (count % 5 === 0) { return el("Fizz") }
    if (count % 7 === 0) { return el("Buzz") }

    return el(count);
}

function IncreaseButton({ increase }) {
    return (
        <div>
            <button onClick={increase} className="btn btn-primary">+ increase</button>
        </div>
    )
}

function ResetButton({ reset }) {
    return (
        <div>
            <button onClick={reset} className="btn btn-danger">- reset</button>
        </div>
    )
}

class CounterApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
        this.onIncreaseEventHandler = this.onIncreaseEventHandler.bind(this)
    }

    onIncreaseEventHandler() {
        this.setState(previousState => {
            return { count: previousState.count + 1 };
        });
    }

    onResetEventHandler = () => {
        this.setState({ count: 0 })
    }

    render() {
        return (
            <div className="text-center p-5 m-5 rounded-5 border border-success bg-success bg-opacity-25">
                <IncreaseButton increase={this.onIncreaseEventHandler} />
                <CounterDisplay count={this.state.count} />
                <ResetButton reset={this.onResetEventHandler} />
            </div>
        )
    }
}

export default CounterApp;