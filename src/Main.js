import React from 'react';
import Welcome from './Welcome';
import AddProduct from './AddProduct';
import ProductListFunctional from './ProductListFunctional';
import ProductListClass from './ProductListClass';
import Title from './Title';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import NotFound from './NotFound';
import ProductDetail from './ProductDetail';

export default class Main extends React.Component { // exporting Main component

    constructor(props) { // Class component lifecycle
        super(props);
        this.state = { // To define state in class component, we use this.state
            username: "Soumit"
        }
        console.log("Constructor lifecycle 1");
        console.log("Main class component props is", this.props);
    }


    render() { // Class component lifecycle to render data
        console.log("Render lifecycle 2");
        return <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Nav />}>
                        <Route index element={<Welcome mobileProps={this.props.mobileProps} username={this.state.username} />}></Route>
                        <Route path="/title" username={this.state.username} element={<Title />}></Route>
                        <Route path="/welcome" username={this.state.username} element={<Welcome />}></Route>
                        <Route path="/addproduct" element={<AddProduct />}></Route>
                        <Route path="/productsclass" element={<ProductListClass/>}></Route>
                        <Route path="/productsfunctional" element={<ProductListFunctional/>}></Route>
                        <Route path="/products/:id" element={<ProductDetail/>}></Route>
                        <Route path="*" element={<NotFound/>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    }
}