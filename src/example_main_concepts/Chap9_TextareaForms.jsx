import React from 'react';

// An input form element whose value is controlled by React in this way
// is called a 'Controlled Components'
//
// <input>, <textarea>, <select>, etc
//
// in React, the state only updated with 'setState()'
class EssayForms extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 'Please write an essay about your favorite DOM element.'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value}); // runs on every keystroke to update the React state
    }

    handleSubmit(event) {
        alert('A essay was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Essay:
                    <textarea value={this.state.value} onChange={this.handleChange} /> {/*// in React DOM, use 'value' attribute*/}
                    {/*/!*<textarea>Please write an essay about your favorite DOM element.</textarea>*!/ // Normal Markup Statement */}
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default EssayForms;