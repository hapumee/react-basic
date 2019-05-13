import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import NotFound from './error/NotFound';
import Home from './Home';
import ExampleMainConcepts from './example_main_concepts/ExampleMainConcepts';
import ExampleAdvancedGuides from './example_advanced_guides/ExampleAdvancedGuides';

const routing = (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/example-main-concepts">ExampleMainConcepts</Link>
                </li>
                <li>
                    <Link to="/example-advanced-guides">ExampleAdvancedGuides</Link>
                </li>
            </ul>
            <hr />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/example-main-concepts" component={ExampleMainConcepts} />
                <Route path="/example-advanced-guides" component={ExampleAdvancedGuides} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
