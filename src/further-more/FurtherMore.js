import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import NotFound from '../error/NotFound';
import ImmutableBasic from './ImmutableBasic';
import ImmutableManipulation from './ImmutableManipulation';

class FurtherMore extends React.Component {
    render() {
        return (
            <div>
                <ul style={{listStyleType: 'circle'}}>
                    <li><Link to="/further-more/immutable-basic">Immutable Example - Update data</Link></li>
                    <li><Link to="/further-more/immutable-manipulation">Immutable Manipulation</Link></li>
                </ul>
                <hr />
                <Switch>
                    <Route path="/further-more/immutable-basic" component={ImmutableBasic} />
                    <Route path="/further-more/immutable-manipulation" component={ImmutableManipulation} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        );
    }
}

export default FurtherMore;