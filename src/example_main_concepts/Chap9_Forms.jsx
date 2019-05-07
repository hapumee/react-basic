import React from 'react';

// An input form element whose value is controlled by React in this way
// is called a 'Controlled Components'
//
// <input>, <textarea>, <select>, etc
//
// in React, the state only updated with 'setState()'
class NameForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value}); // runs on every keystroke to update the React state
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value.toUpperCase());
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default NameForm;