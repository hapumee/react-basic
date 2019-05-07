import React from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);

        // Before: this.state = {temperature: ''};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        // Before: this.setState({temperature: event.target.value});
        this.props.onTemperatureChange(event.target.value);
    }

    render() {
        // Before: const temperature = this.state.temperature; // local state -> move to the 'Calculator'
        const temperature = this.props.temperature;
        const scale = this.props.scale;

        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature} onChange={this.handleChange} />
            </fieldset>
        );
    }
}

export default TemperatureInput;