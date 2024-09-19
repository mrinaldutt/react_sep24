import React from 'react';
import Welcome from './Welcome'; // export default class Welcome
// import { Welcome } from './Welcome'; // export class Welcome
import AddProduct from './AddProduct';
import ProductListFunctional from './ProductListFunctional';
import ProductListClass from './ProductListClass';
import Product from './Product';
import Title from './Title';

export default class Main extends React.Component { // exporting Main component

    constructor(props) { // Class component lifecycle
        super(props);
        this.state = { // To define state in class component, we use this.state
            username: "Soumit"
        }
        console.log("Constructor lifecycle 1");
        console.log("Main class component props is", this.props);
    }

    updateUsername = () => {
        console.log("UpdateUsername function", this.props);
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
            <Welcome username={this.state.username} />
            <AddProduct />
            <ProductListFunctional />
            <Product />
            <Title username={this.state.username} />
        </>
    }
}