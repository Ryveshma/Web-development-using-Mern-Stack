import "./Users.css";
import axios from "axios";
import { useState } from 'react';

function Users() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    const getUsers = () => {
        axios.get("https://randomuser.me/api/?results=50")
            .then((response) => {
                console.log(response.data.results);
                setUsers(response.data.results);
                setError(null); // Clear any previous errors
            })
            .catch((error) => {
                console.error("Error fetching users:", error);
                setError("Error fetching users. Please try again later.");
            });
    };

    return (
        <div>
            <h2>Users Information</h2>
            <p>
                qwertyuiolkjszxcvbnmewasdfghjkmnbqwertyuiolkjszxcvbnmewasdfghjkmnb
                qwertyuiolkjszxcvbnmewasdfghjkmnbqwertyuiolkjszxcvbnmewasdfghjkmnb
                qwertyuiolkjszxcvbnmewasdfghjkmnbqwertyuiolkjszxcvbnmewasdfghjkmnb
            </p>
            <button className="btn btn-success" onClick={getUsers}>Get Users Data</button>

            {error && <div className="error">{error}</div>}

            <div>
                <table className="table table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        users.map((user, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>
                                    <img src={user.picture.medium}  width={70} height={70} />
                                </td>
                                <td>{user.name.first} {user.name.last}</td>
                                <td>{user.gender}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Users;