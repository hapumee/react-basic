import React, {Component} from 'react';

const user = {
    firstName: 'Angela',
    lastName: 'MIN'
};

class Chap2_Greeting extends Component {
    render() {
        return (
            getGreeting(user)
        );
    }
}

function getGreeting(user) {
    if (user) {
        return <h1>Hello, {formatName(user)}!!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
}

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

export default Chap2_Greeting;