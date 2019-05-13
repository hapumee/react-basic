import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import NotFound from '../error/NotFound';
import CodeSplitting from './CodeSplitting';

class ExampleAdvancedGuides extends React.Component {
    render() {
        return (
            <div>
                <ul style={{listStyleType: 'circle'}}>
                    <li><Link to="/example-advanced-guides/code-splitting">CodeSplitting</Link></li>
                </ul>
                <hr />
                <Switch>
                    <Route path="/example-advanced-guides/code-splitting" component={CodeSplitting} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        );
    }
}
export default ExampleAdvancedGuides;
