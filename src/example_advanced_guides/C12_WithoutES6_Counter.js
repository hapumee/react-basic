import React from 'react';

/**
 * Without ES6 Syntax
 */
// var createReactClass = require('create-react-class');
// var WithoutES6Counter = createReactClass({
//     getInitialState: function() {
//         return {
//             count: this.props.initialCOunt
//         }
//     },
//
//     render: function() {
//         return <div>Counter: {this.state.count}</div>;
//     }
// });

/**
 * ES6 Syntax
 */
class WithoutES6Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: props.initialiCount};
        // console.log(this.state);
    }

    render() {
        return (
            <div>Counter: {this.state.count}</div>
        );
    }
}

export default WithoutES6Counter;
