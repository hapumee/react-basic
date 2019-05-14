import React from 'react';

/**
 * Without ES6 Syntax
 */
// var createReactClass = require('create-react-class');
// var WithoutES6Binding = createReactClass({
//
//     /** it's not needed binding **/
//
//     getInitialState: function() {
//         return {message: 'Hello!'};
//     },
//
//     handleClick: function() {
//         alert(this.state.message);
//     },
//
//     render: function() {
//         return <button onClick={this.handleClick}>Say Hello</button>;
//     }
// });

/**
 * ES6 Syntax
 */
class WithoutES6Binding extends React.Component {
    constructor(props) {
        super(props);
        this.state = {message: 'Hello!'};
        // IMPORTANT!!
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        alert(this.state.message);
    }

    render() {
        return (
            <button onClick={this.handleClick}>Say Hello</button>
        );
    }
}

export default WithoutES6Binding;
