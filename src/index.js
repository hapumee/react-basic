import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
// import App from './App';
// import Greeting from './example/Chap2_Greeting';
// import TickingClock from './example/Chap3_TickingClock';
// import ComponentsAndProps from './example/Chap4_ComponentsAndProps';
// import Comment from './example/Chap4_Comment';
// import TickingClockWithState from './example/Chap5_TickingClock';
// import Toggle from './example/Chap6_Toggle';
// import LoginControl from './example/Chap7_LoginControl';
// import Mailbox from './example/Chap7_Mailbox';
// import WarningBannerPage from './example/Chap7_WarningBannerPage';
// import ListsAndKeys from './example/Chap8_ListsAndKeys';
// import Blog from './example/Chap8_Blog';
// import NameForm from './example/Chap9_Forms';
// import EssayForms from './example/Chap9_TextareaForms';
// import FlavorForm from './example/Chap9_SelectForms';
// import Reservation from './example/Chap9_ReservationForms';
// import Calculator from './example/Chap10_Calculator';
// import SignUpDialog from './example/Chap11_SignUpDialog';
import FilterableProductTable from './example/Chap12_FilterableProductTable';

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Greeting />, document.getElementById('root'));
// ReactDOM.render(<TickingClock />, document.getElementById('root'));
// ReactDOM.render(<ComponentsAndProps />, document.getElementById('root'));
// ReactDOM.render(<Test />, document.getElementById('root'));
// ReactDOM.render(<Comment />, document.getElementById('root'));
// ReactDOM.render(<TickingClockWithState />, document.getElementById('root'));
// ReactDOM.render(<Toggle />, document.getElementById('root'));
// ReactDOM.render(<LoginControl />, document.getElementById('root'));
// ReactDOM.render(<Mailbox />, document.getElementById('root'));
// ReactDOM.render(<WarningBannerPage />, document.getElementById('root'));
// ReactDOM.render(<ListsAndKeys />, document.getElementById('root'));
// ReactDOM.render(<Blog />, document.getElementById('root'));
// ReactDOM.render(<NameForm />, document.getElementById('root'));
// ReactDOM.render(<EssayForms />, document.getElementById('root'));
// ReactDOM.render(<FlavorForm />, document.getElementById('root'));
// ReactDOM.render(<Reservation />, document.getElementById('root'));
// ReactDOM.render(<Calculator />, document.getElementById('root'));
// ReactDOM.render(<SignUpDialog />, document.getElementById('root'));

const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];
ReactDOM.render(<FilterableProductTable products={PRODUCTS} />, document.getElementById('root'));

// TEST ---------------------------------------------------
// function tick() {
//     console.log("tick!");
    // const element = (
    //     <div>
    //         <h1>Hello, World!!</h1>
    //         <h2>It is {new Date().toLocaleTimeString()}</h2>
    //     </div>
    // );
    // ReactDOM.render(element, document.getElementById('root'));
    // ReactDOM.render(<TickingClockWithState />, document.getElementById('root'));
// }

// setInterval(tick, 1000);

/*function Test(props) {
    return (
        <div>
            <ComponentsAndProps name="AAA" />
            <ComponentsAndProps name="BBB" />
            <ComponentsAndProps name="CCC" />
        </div>
    );
}*/
// TEST ---------------------------------------------------

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
