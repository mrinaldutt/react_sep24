import React from 'react';
import Welcome from './Welcome'; // export default class Welcome
// import { Welcome } from './Welcome'; // export class Welcome
import AddProduct from './AddProduct';
import ProductListFunctional from './ProductListFunctional';
import ProductListClass from './ProductListClass';
import Product from './Product';
import Title from './Title';

export default class Main extends React.Component { // exporting Main component

    constructor() { // Class component lifecycle
        super();
        this.state = { // To define state in class component, we use this.state
            username: "Soumit"
        }
        console.log("Constructor lifecycle 1");
    }

    updateUsername = () => {
        this.setState({ // To update State we use this.setState, whenever state update component rerender
            username: "Siva"
        })
    }

    render() { // Class component lifecycle to render data
        console.log("Render lifecycle 2");
        return <>
            <h1>Main Class Component</h1>
            <ProductListClass />
            <hr />
            <h2>State username is {this.state.username}</h2>
            <button onClick={this.updateUsername}>Update Username</button>
            <hr />
            <Welcome />
            <AddProduct />
            <ProductListFunctional />
            <Product />
            <Title />
        </>
    }
}