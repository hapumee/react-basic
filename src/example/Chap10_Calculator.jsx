import React from 'react';
import TemperatureInput from './Chap10_TemperatureInput';

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    } else {
        return <p>The water would not boil.</p>;
    }
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// @param convert {Function} toCelsius, toFahrenheit
function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);

    if (Number.isNaN(input)) {
        return '';
    }

    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;

    return rounded.toString();
}

/**
 * [lifting state up]
 * sharing state is accomplished by moving it up to the closest common ancestor
 * of the components that need it
 */
class Calculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {temperature: '', scale: 'c'};

        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }

    handleCelsiusChange(temperature) {
        this.setState({scale: 'c', temperature});
    }

    handleFahrenheitChange(temperature) {
        this.setState({scale: 'f', temperature});
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        return (
            <fieldset>
                <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange} />
                <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange} />
                <BoilingVerdict celsius={parseFloat(temperature)} />
            </fieldset>
        );
    }
}

export default Calculator;