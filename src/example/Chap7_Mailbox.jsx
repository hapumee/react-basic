import React, {Component} from 'react';

class Mailbox extends React.Component {
    constructor(props) {
        super(props);

        this.messages = ['React', 'Re: React', 'Re:Re: React'];
    }

    render() {
        return (
            <Messages unreadMessages={this.messages} />
        );
    }
}

function Messages(props) {
    const unreadMessage = props.unreadMessages;

    // (1) `if` statement
    /*if (unreadMessage.length > 0) {
        return (
            <div>
                <h1>Hello!</h1>
                <h2>You have {unreadMessage.length} unread messages.</h2>
            </div>
        );
    } else {
        return (
            <div>
                <h1>Hello!</h1>
            </div>
        );
    }*/

    // (2) wrapping in curly braces and using `&&` operator
    return (
        <div>
            <h1>Hello!</h1>
            {unreadMessage.length > 0 &&
                <h2>You have {unreadMessage.length} unread messages.</h2>
            }
        </div>
    );
}

export default Mailbox;