import React from 'react';
import Welcome from './Welcome'; // export default class Welcome
// import { Welcome } from './Welcome'; // export class Welcome
import AddProduct from './AddProduct';
import ProductList from './ProductList';
import Product from './Product';
import Title from './Title';

export default class Main extends React.Component { // exporting Main component
    render() { // Class component lifecycle to render data
        return <div>
            <h1>Main Class Component</h1>
            <Welcome />
            <AddProduct />
            <ProductList />
            <Product />
            <Title />
        </div>
    }
}