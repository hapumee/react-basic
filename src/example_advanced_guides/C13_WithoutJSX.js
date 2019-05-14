import React from 'react';

/**
 * JSX Syntax
 *
class WithoutJSXHello extends React.Component {
    render() {
        return (
            <div>Hello {this.props.toWhat}</div>
        );
    }
}

// ReactDOM.render(<Hello toWhat="World" />, document.getElementById('root'));
**/

/**
 * Without JSX Syntax
 */
class WithoutJSXHello extends React.Component {
    render() {
        return React.createElement('div', null, `Hello ${this.props.toWhat} ~~~~~`);
    }
}

// React.render(React.createElement(Hello, {toWhat: 'World!!'}, null), document.getElementById('root));

export default WithoutJSXHello;