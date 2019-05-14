import React from 'react';

/**
 * Without ES6 Syntax
 */
// var createReactClass = require('create-react-class');
// var WithoutES6Greeting = createReactClass({
//     getDefaultProps: function() {
//         return {
//             name: 'Mary'
//         }
//     },
//
//     render: function() {
//         return <h1>Hello, {this.props.name}</h1>;
//     }
// });

/**
 * ES6 Syntax
 */
 class WithoutES6Greeting extends React.Component {
    render() {
        return (
            <div>Hello {this.props.name}</div>
        );
    }
}

/**
 * default Props
 */
WithoutES6Greeting.defaultProps = {
    name: 'Mary'
};

export default WithoutES6Greeting;
