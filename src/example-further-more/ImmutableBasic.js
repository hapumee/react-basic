import React, { Component } from 'react';
import { Map, List } from 'immutable';

let data = List.of(
    Map({ value: 1, name: 'Joe' }),
    Map({ value: 2, name: 'John' }),
    Map({ value: 3, name: 'Jacob' })
);

class ImmutableBasic extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: data };
    }

    componentDidMount() {
        setTimeout(() => {
            console.log('Adding Data');

            this.setState({
                data: this.state.data.push(Map({ value: 100, name: 'Bill '}))
            });
        }, 1000);

        setTimeout(() => {
            console.log('Updating Data');

            let newData = this.state.data.update(3, item => item.set('value', 200));
            this.setState({
                data: newData
            });
        }, 2000);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.data !== nextState.date;
    }

    render() {
        return (
            <div>
                {this.state.data.map(user => <NewUser user={user} />)}
            </div>
        );
    }
}

class NewUser extends React.Component {
    shouldComponentUpdate(nextProps) {
        return this.props.user !== nextProps.user;
    }

    render() {
        console.log('NewUser - render');

        let user = this.props.user;

        return (
            <div>
                {user.get('name')} - {user.get('value')}
            </div>
        );
    }
}

export default ImmutableBasic;