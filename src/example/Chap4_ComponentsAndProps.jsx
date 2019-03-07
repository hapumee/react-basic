import React, {Component} from 'react';

// const user = {
//     name: 'Angela MIN'
// };

class Chap4_ComponentsAndProps extends Component {
    render() {
        // return Welcome(user);
        return <h1>Hello, {this.props.name}!!!</h1>;
    }
}

// function components
// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>;
// }

export default Chap4_ComponentsAndProps;