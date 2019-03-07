import React, {Component} from 'react';

/**
 * 5. State and Lifecycle
 *  - State is similar to props, but it is private and fully controlled by the component
 */
class TickingClockWithState extends React.Component {
    // lifecycle - 1
    constructor(props) {
        super(props);
        this.state = {date: new Date()}; // Initialize this.state
    }

    // lifecycle - 3
    // mounting
    //  - set up a timer whenever the TickingClockWithState is rendered
    //      to the DOM for the first time
    // @predefined (Lifecycle method)
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 1000
        );
    }

    // lifecycle - 5
    // unmounting
    //  - clear a timer whenever the DOM produced by the TickingClockWithState is removed
    // @predefined (Lifecycle method)
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    // lifecycle - 4
    // to schedule updated to the component local state
    tick() {
        this.setState({
            date: new Date()
        });
    }

    // lifecycle - 2
    render() {
        return (
            <div>
                <h1>Hello, World!!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

export default TickingClockWithState;