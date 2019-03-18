import React from 'react';

// An input form element whose value is controlled by React in this way
// is called a 'Controlled Components'
//
// <input>, <textarea>, <select>, etc
//
// in React, the state only updated with 'setState()'
class Reservation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nameValue: '',
            isGoing: true,
            numberOfGuests: 2
        };

        this.handleChangeNameTesting = this.handleChangeNameTesting.bind(this);
        this.handleSubmitNameTesting = this.handleSubmitNameTesting.bind(this);

        this.handleChangeReservation = this.handleChangeReservation.bind(this);
    }

    handleChangeNameTesting(event) {
        this.setState({nameValue: event.target.value});
    }

    handleSubmitNameTesting(event) {
        alert('A name was submitted: ' + this.state.nameValue.toUpperCase());
        event.preventDefault();
    }

    handleChangeReservation(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmitNameTesting}>
                    <label>
                        Name:
                        <input type="text" name="name" value={this.state.nameValue} onChange={this.handleChangeNameTesting} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>

                <form>
                    <label>
                        Is going:
                        <input type="checkbox" name="isGoing" checked={this.state.isGoing} onChange={this.handleChangeReservation} />
                        <br />
                        <input type="number" name="numberOfGuests" value={this.state.numberOfGuests} onChange={this.handleChangeReservation} />
                    </label>
                </form>
            </div>
        );
    }
}

export default Reservation;