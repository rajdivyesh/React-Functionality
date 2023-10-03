// LoginForm.js
import React, { Component } from "react";
import "./loginForm.css";

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            users: [],
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        const { username, password, users } = this.state;
        const newUser = {
            username,
            password,
        };
        this.setState(
            {
                users: [...users, newUser],
                username: "",
                password: "",
            },
            () => {
                this.exportToCSV();
            }
        );
    };

    exportToCSV = () => {
        const { users } = this.state;
        const csvContent = "data:text/csv;charset=utf-8," + this.convertArrayToCSV(users);
        const encodedURI = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedURI);
        link.setAttribute("download", "user_data.csv");
        document.body.appendChild(link);
        link.click();
    };

    convertArrayToCSV = (array) => {
        const header = "Username,Password\n";
        const csv = array.map((row) => Object.values(row).join(",")).join("\n");
        return header + csv;
    };

    render() {
        const { username, password, users } = this.state;

        return (
            <div className="login-container">
                <div className="login-form">
                    <h1>Login Form</h1>
                    <form onSubmit={this.handleFormSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Username:</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={username}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <button type="submit">Submit</button>
                        <button type="button" onClick={this.exportToCSV}>
                            Download CSV
                        </button>
                    </form>
                </div>
                <div className="user-table">
                    <h2>User Table</h2>
                    <table>
                        <thead>
                        <tr>
                            <th>Username</th>
                            <th>Password</th>
                        </tr>
                        </thead>
                        <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.username}</td>
                                <td>{user.password}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default LoginForm;
