import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import NotFound from '../error/NotFound';
import Greeting from './Chap2_Greeting';
import TickingClock from './Chap3_TickingClock';
import ComponentsAndProps from './Chap4_ComponentsAndProps';
import Comment from './Chap4_Comment';
import TickingClockWithState from './Chap5_TickingClock';
import Toggle from './Chap6_Toggle';
import LoginControl from './Chap7_LoginControl';
import Mailbox from './Chap7_Mailbox';
import WarningBannerPage from './Chap7_WarningBannerPage';
import ListsAndKeys from './Chap8_ListsAndKeys';
import Blog from './Chap8_Blog';
import NameForm from './Chap9_Forms';
import EssayForms from './Chap9_TextareaForms';
import FlavorForm from './Chap9_SelectForms';
import Reservation from './Chap9_ReservationForms';
import Calculator from './Chap10_Calculator';
import SignUpDialog from './Chap11_SignUpDialog';
import FilterableProductTable from './Chap12_FilterableProductTable';

// data for Chap12_FilterableProductTable
const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

class ExampleMainConcepts extends React.Component {
    render() {
        return (
            <div>
                <ul style={{listStyleType: 'circle'}}>
                    <li><Link to="/example-main-concepts/greeting">Chap2_Greeting</Link></li>
                    <li><Link to="/example-main-concepts/ticking-clock">Chap3_TickingClock</Link></li>
                    <li><Link to="/example-main-concepts/components-and-props">Chap4_ComponentsAndProps</Link></li>
                    <li><Link to="/example-main-concepts/comment">Chap4_Comment</Link></li>
                    <li><Link to="/example-main-concepts/ticking-clock-with-state">Chap5_TickingClock</Link></li>
                    <li><Link to="/example-main-concepts/toggle">Chap6_Toggle</Link></li>
                    <li><Link to="/example-main-concepts/login-control">Chap7_LoginControl</Link></li>
                    <li><Link to="/example-main-concepts/mailbox">Chap7_Mailbox</Link></li>
                    <li><Link to="/example-main-concepts/warning-banner-page">Chap7_WarningBannerPage</Link></li>
                    <li><Link to="/example-main-concepts/lists-and-keys">Chap8_ListsAndKeys</Link></li>
                    <li><Link to="/example-main-concepts/blog">Chap8_Blog</Link></li>
                    <li><Link to="/example-main-concepts/name-form">Chap9_Forms</Link></li>
                    <li><Link to="/example-main-concepts/essay-forms">Chap9_TextareaForms</Link></li>
                    <li><Link to="/example-main-concepts/flavor-form">Chap9_SelectForms</Link></li>
                    <li><Link to="/example-main-concepts/reservation">Chap9_ReservationForms</Link></li>
                    <li><Link to="/example-main-concepts/calculator">Chap10_Calculator</Link></li>
                    <li><Link to="/example-main-concepts/sign-up-dialog">Chap11_SignUpDialog</Link></li>
                    <li><Link to="/example-main-concepts/filterable-product-table">Chap12_FilterableProductTable</Link></li>
                </ul>
                <hr />
                <Switch>
                    <Route path="/example-main-concepts/greeting" component={Greeting} />
                    <Route path="/example-main-concepts/ticking-clock" component={TickingClock} />
                    <Route path="/example-main-concepts/components-and-props" component={ComponentsAndProps} />
                    <Route path="/example-main-concepts/comment" component={Comment} />
                    <Route path="/example-main-concepts/ticking-clock-with-state" component={TickingClockWithState} />
                    <Route path="/example-main-concepts/toggle" component={Toggle} />
                    <Route path="/example-main-concepts/login-control" component={LoginControl} />
                    <Route path="/example-main-concepts/mailbox" component={Mailbox} />
                    <Route path="/example-main-concepts/warning-banner-page" component={WarningBannerPage} />
                    <Route path="/example-main-concepts/lists-and-keys" component={ListsAndKeys} />
                    <Route path="/example-main-concepts/blog" component={Blog} />
                    <Route path="/example-main-concepts/name-form" component={NameForm} />
                    <Route path="/example-main-concepts/essay-forms" component={EssayForms} />
                    <Route path="/example-main-concepts/flavor-form" component={FlavorForm} />
                    <Route path="/example-main-concepts/reservation" component={Reservation} />
                    <Route path="/example-main-concepts/calculator" component={Calculator} />
                    <Route path="/example-main-concepts/sign-up-dialog" component={SignUpDialog} />
                    <Route path="/example-main-concepts/filterable-product-table" component={() => <FilterableProductTable products={PRODUCTS} />} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        );
    }
}
export default ExampleMainConcepts;