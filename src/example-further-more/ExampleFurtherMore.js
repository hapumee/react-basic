import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import NotFound from '../error/NotFound';
import ImmutableBasic from './ImmutableBasic';
import ImmutableManipulation from './ImmutableManipulation';
import DragDrop from './DragAndDrop';

class ExampleFurtherMore extends React.Component {
    render() {
        return (
            <div>
                <ul style={{listStyleType: 'circle'}}>
                    <li><Link to="/example-further-more/immutable-basic">Immutable Example - Update data</Link></li>
                    <li><Link to="/example-further-more/immutable-manipulation">Immutable Manipulation</Link></li>
                    <li><Link to="/example-further-more/drag-drop">Drag And Drop</Link></li>
                </ul>
                <hr />
                <Switch>
                    <Route path="/example-further-more/immutable-basic" component={ImmutableBasic} />
                    <Route path="/example-further-more/immutable-manipulation" component={ImmutableManipulation} />
                    <Route path="/example-further-more/drag-drop" component={DragDrop} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        );
    }
}

export default ExampleFurtherMore;