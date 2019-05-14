import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import NotFound from '../error/NotFound';
import CodeSplitting from './C2_CodeSplitting';
import WithoutJSXHello from './C13_WithoutJSX';
import WithoutES6Greeting from "./C12_WithoutES6_Greeting";
import WithoutES6Counter from "./C12_WithoutES6_Counter";
import WithoutES6Binding from "./C12_WithoutES6_Binding";

class ExampleAdvancedGuides extends React.Component {
    render() {
        return (
            <div>
                <ul style={{listStyleType: 'circle'}}>
                    <li><Link to="/example-advanced-guides/code-splitting">CodeSplitting</Link></li>
                    <li><Link to="/example-advanced-guides/without-jsx">WithoutJSX</Link></li>
                    <li><Link to="/example-advanced-guides/without-es6-greeting">WithoutES6 > Greeting</Link></li>
                    <li><Link to="/example-advanced-guides/without-es6-counter">WithoutES6 > Counter</Link></li>
                    <li><Link to="/example-advanced-guides/without-es6-binding">WithoutES6 > Binding</Link></li>
                </ul>
                <hr />
                <Switch>
                    <Route path="/example-advanced-guides/code-splitting" component={CodeSplitting} />
                    <Route path="/example-advanced-guides/without-jsx" component={() => <WithoutJSXHello toWhat='world!!' />} />
                    <Route path="/example-advanced-guides/without-es6-greeting" component={() => <WithoutES6Greeting name="Alex" />} />
                    <Route path="/example-advanced-guides/without-es6-counter" component={() => <WithoutES6Counter initialiCount="99" />} />
                    <Route path="/example-advanced-guides/without-es6-binding" component={() => <WithoutES6Binding />} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        );
    }
}
export default ExampleAdvancedGuides;
