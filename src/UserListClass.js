import React from 'react';
import axios from 'axios';
class UserListClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            todos: []
        }
        console.log("UserListClass constructor");
    }

    componentDidMount() { // lifecycle which call after render method
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: "GET"
        }) // Javascript fetch method, API Call
            .then((response) => response.json())
            .then((responseData) => this.setState({
                users: responseData
            }));

        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((response) => {
                // handle success
                console.log("Using axios", response);
                this.setState({
                    todos: response.data
                })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }

    componentWillUnmount() {
        console.log("UserListClass componentWillUnmount");
    }

    render() {
        return (<>
            <h1>Users List Class Component</h1>
            <h2>List of Users using fetch method</h2>
            <ul>
                {
                    this.state.users.map((item, index) => (
                        <li key={index}>{item.name}</li>
                    ))
                }
            </ul>

            <h2>List of Todos using axios module</h2>
            <ul>
                {
                    this.state.todos.map((item, index) => (
                        <li key={index}>{item.title}</li>
                    ))
                }
            </ul>
        </>);
    }
}

export default UserListClass;