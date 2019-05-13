import React, { Suspense, lazy } from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
// import ErrorBoundary from './ErrorBoundary';

const OtherComponent = lazy(() => import('./routes/C2_OtherComponent'));
const AnotherComponent = lazy(() => import('./routes/C2_AnotherComponent'));

class CodeSplitting extends React.Component {
    render() {
        return (
            <Router>
                <ul>
                    <li><Link to="/example-advanced-guides/route/other">route > OtherComponent</Link></li>
                    <li><Link to="/example-advanced-guides/route/another">route > AnotherComponent</Link></li>
                </ul>
                {/*<ErrorBoundary>*/}
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route path="/example-advanced-guides/route/other" component={OtherComponent} />
                            <Route path="/example-advanced-guides/route/another" component={AnotherComponent} />
                        </Switch>
                    </Suspense>
                {/*</ErrorBoundary>*/}
            </Router>
        );
    }
}

export default CodeSplitting;