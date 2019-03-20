import React from 'react';

/******************************************************************/
/**
 * FancyBorder, WelcomeDialog
 *
 * @param props
 * @returns {XML}
 * @constructor
 */
function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}

/**
 * FancyBorder, WelcomeDialog
 *
 * @param props
 * @returns {XML}
 * @constructor
 */
function Dialog(props) {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">{props.title}</h1>
            <p className="Dialog-message">{props.message}</p>
            {props.children}
        </FancyBorder>
    );
}

function WelcomeDialog() {
    return (
        <Dialog title="Welcome"
                message="Thank you for visiting our spacecraft!" />
    );
}

/******************************************************************/
function SplitPane(props) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    );
}

function Contact() {
    return (
        <p>* Contact</p>
    );
}

function Chat() {
    return (
        <p>* Chat</p>
    );
}

function App() {
    return (
        <SplitPane left={<Contact />} right={<Chat />} />
    );
}
/******************************************************************/

class SignUpDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {login: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
    }

    render() {
        return (
            <Dialog title="Mars Exploration Program"
                    message="How should we refer to you?">
                <input value={this.state.login} onChange={this.handleChange} />
                <button onClick={this.handleSignUp}>Sign Me Up!</button>
            </Dialog>
        );
    }

    handleChange(event) {
        this.setState({login: event.target.value});
    }

    handleSignUp() {
        alert(`Welcome abroad, ${this.state.login}!`);
    }
}

export default SignUpDialog;