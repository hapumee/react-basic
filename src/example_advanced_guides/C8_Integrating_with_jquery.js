import React, { Component } from 'react';
import $ from 'jquery';

class IntegratingWithJquery extends Component {
    constructor(props) {
        super(props);
        this.state = { store: '' };
    }

    componentDidMount() {
        let _this = this;

        $('button').on('click', function() {
            _this.setState({
                store: Math.random()
            });
        });
    }

    render() {
        return (
            <div>
                <h2>User jQuery with ReactJS</h2>
                <h2>Random Number : {this.state.store}</h2>
                <p>
                    <button>Test Button</button>
                </p>
            </div>
        );
    }
}

export default IntegratingWithJquery;