import React from 'react';
import "./Welcome.css";

export default class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = { // To define state in class component, we use this.state
            username: "Jitendra"
        }
        console.log("Welcome class component props is", this.props)
    }

    updateUsername = () => {
        console.log("UpdateUsername function", this.props);
        this.setState({ // To update State we use this.setState, whenever state update component rerender
            username: "Siva"
        })
    }

    render() {
        const myStyle = {
            backgroundColor: "blue",
            color: "white",
            textAlign: "center"
        }
        return <>
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>

            <div className="spinner-grow" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>

            <h1 style={myStyle}>Welcome Class Component</h1>
            <h2 className='header'>External CSS Example</h2>
            <h2 style={{ backgroundColor: "yellow" }}>State Example - username is {this.state.username}</h2>
            <button className="btn btn-outline-primary" onClick={this.updateUsername}>Update Username</button>
            <h3>Props Example - He is having mobile {this.props.mobileProps}</h3>
        </>
    }
}