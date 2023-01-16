import React, { useState } from "react";
import "../styles/login.css";

export default function Login() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    function loginHandler(e) {
        e.preventDefault();
        setUserName(e.target.userName.value);
        setPassword(e.target.password.value);
    }

    console.log("username: ", userName);
    console.log("password: ", password);

    return (
        <div id="form">
            <h3>LOGIN</h3>
            <form onSubmit={loginHandler}>
                <p>Username: </p>
                <input type="text" name="userName" />
                <p>Password: </p>
                <input type="password" name="password" />
                <div className="btns">
                    <button type="submit" className="btn">Login</button>
                    <input type="button" className="btn" value="Register" />
                </div>

            </form>
        </div>
    );
}