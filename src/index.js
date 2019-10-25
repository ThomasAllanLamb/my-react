import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const PRODUCTS = [
  {id: 1, category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {id: 2, category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {id: 3, category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {id: 4, category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {id: 5, category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {id: 6, category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

ReactDOM.render(<App products={PRODUCTS} />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
