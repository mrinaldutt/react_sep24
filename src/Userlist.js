import { useState, useEffect } from "react";
import axios from 'axios';
function UserList() {
    const [data, setData] = useState([]);
    const [todos, setTodos] = useState([]);
    /*  
        In class component we use this.state and this.setState
        In functional component we use useState, users is like this.state and setUsers is like this.setState
    */

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: "GET"
        }) // Javascript fetch method, API Call
            .then((response) => response.json())
            .then((responseData) => {
                console.log("Using Fetch", responseData);
                setData(responseData)
            }
            );

        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(function (response) {
                // handle success
                console.log("Using axios", response);
                setTodos(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }, [])

    return (<>
        <h1>Users List Functional Component</h1>
        <h2>List of Users using fetch method</h2>
        <ul>
            {
                data.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))
            }
        </ul>

        <h2>List of Todos using axios module</h2>
        <ul>
            {
                todos.map((item, index) => (
                    <li key={index}>{item.title}</li>
                ))
            }
        </ul>
    </>);
}

export default UserList;