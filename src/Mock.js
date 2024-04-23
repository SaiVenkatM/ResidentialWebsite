import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Mock() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/mock.php')
            .then(response => {
                console.log("inside the use effect function")
                setUsers(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Mock;
