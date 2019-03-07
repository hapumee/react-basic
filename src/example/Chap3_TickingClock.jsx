import React, {Component} from 'react';

class Chap3_TickingClock extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    render() {
        return (
            <div>
                <h1>Hello, World!!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    };
}

export default Chap3_TickingClock;