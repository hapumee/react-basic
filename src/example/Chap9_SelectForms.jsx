import React from 'react';

// An input form element whose value is controlled by React in this way
// is called a 'Controlled Components'
//
// <input>, <textarea>, <select>, etc
//
// in React, the state only updated with 'setState()'
class FlavorForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {value: ['coconut', 'grapefruit']}; // multiple possible

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value}); // runs on every keystroke to update the React state
    }

    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pick tour favorite flavor:
                    <select value={this.state.value} multiple={true} onChange={this.handleChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default FlavorForm;