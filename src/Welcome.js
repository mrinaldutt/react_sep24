import React from 'react';

export default class Welcome extends React.Component {
    constructor(props){
        super(props);
        console.log("Welcome class component props is", this.props)
    }
    render() {
        return <h1>Welcome Class Component</h1>
    }
}