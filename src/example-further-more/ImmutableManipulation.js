import React, { Component } from 'react';
import { List, fromJS } from 'immutable';

class ImmutableManipulation extends React.Component {
    render() {
        // 1-1.
        const data = { my: { nested: { name: 'Will' } } };
        const goodName = data.my.nested.name; // 'Will'
        // const badName = data.my.lovely.name; // throws error: 'Cannot read name of undefined'
        console.log("1-1:", data, goodName); //, badName);

        // 1-2.
        const dataImmutable = fromJS({ my: { nested: { name: 'Will' } } });
        const goodNameImmutable = dataImmutable.getIn(['my', 'nested', 'name']); // 'Will'
        const badNameImmutable = dataImmutable.getIn(['my', 'lovely', 'name']); // no error thrown: 'undefined'
        console.log("1-2:", dataImmutable);

        // 2-1.
        const pets = ['cat', 'dog'];
        pets.push('goldfish');
        pets.push('tortoise');
        console.log("2-1:", pets);

        // 2-2.
        const petsImmutable = List(['cat', 'dog']);
        const finalPets = petsImmutable.push('goldfish').push('tortoise');
        console.log("2-2:", finalPets, finalPets.toJS());

        // 3-1.
        const dataName = fromJS({ name: 'Will' });
        const newDataName = dataName.set('name', 'Susie');
        console.log("3-3:", dataName.get('name'), newDataName.get('name'));

        return (
            <div>
                <p>
                    * Checking of nested value<br /><br />

                    1-1. Plain Javascript<br />
                    const goodName = data.my.nested.name; // {goodName}<br />
                    const badName = data.my.lovely.name; // throws error: 'Cannot read name of undefined'<br /><br />

                    1-2. Immutable<br />
                    const goodNameImmutable = dataImmutable.getIn(['my', 'nested', 'name']); // {goodNameImmutable}<br />
                    const badNameImmutable = dataImmutable.getIn(['my', 'lovely', 'name']); // {badNameImmutable}<br /><br />

                    * Chaining manipulation<br /><br />

                    2-1. Plain Javascript<br />
                    const pets = ['cat', 'dog'];<br />
                    pets.push('goldfish');<br />
                    pets.push('tortoise');<br />
                    // pets: ['cat', 'dog', 'goldfish', 'tortoise]<br /><br />

                    2-2. Immutable<br />
                    const pets = ['cat', 'dog'];<br />
                    const finalPets = pets.push('goldfish').push('tortoise');<br />
                    console.log(finslPets.toJS()); // ['cat', 'dog', 'goldfish', 'tortoise']<br /><br />

                    3-3. Immutable Object and Update it<br /><br />
                    const dataName = fromJS( name: 'Will' );<br />
                    const newDataName = dataName.set('name', 'Susie');<br />
                    console.log(dataName.get('name'), newDataName.get('name')); // Will, Susie
                </p>
            </div>
        );
    }
}

export default ImmutableManipulation;