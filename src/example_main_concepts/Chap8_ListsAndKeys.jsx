import React, {Component} from 'react';

function ListItem(props) {
    return (
        <li>{props.value}</li>
    );
}

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <ListItem key={number.toString()}
                  value={number} />
    );

    return (
        <ul>{listItems}</ul>
    );
}

function NumberList2(props) {
    const numbers = props.numbers;

    return (
        <ul>
            {numbers.map((number) =>
                <ListItem key={number.toString()}
                          value={number} />
            )}
        </ul>
    );
}

class ListsAndKeys extends React.Component {
    render() {
        const numbers = [1, 2, 3, 4, 5];

        return (
            <div>
                <strong>NumberList Example1</strong>
                <NumberList numbers={numbers} />

                <strong>NumberList Example2</strong>
                <NumberList2 numbers={numbers} />
            </div>
        );
    }
}

export default ListsAndKeys;