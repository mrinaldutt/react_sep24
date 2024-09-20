import React from 'react';
import { Navigate } from 'react-router-dom';
export default class AddProduct extends React.Component {

    constructor() {
        super();
        this.state = {
            redirect: false
        }
    }

    gotToTitle = () => {
        this.setState({ // whenever state updates, component rerender
            redirect: true
        })
    }

    render() {
        // Object destructuring
        const { redirect } = this.state;
    
        return <>
            <div>
                {redirect && (
                    <Navigate to="/title" />
                )}
            </div>
            <div>
                <h1>Add Product Class Component</h1>
                <button className="btn btn-primary" onClick={this.gotToTitle}>Navigate to Add Product Page</button>
            </div>
        </>
    }
}