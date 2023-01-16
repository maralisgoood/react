import React, { useState } from "react";
import "../styles/welcome.css";

export default function WelcomePage(prop) {
    const { setLogin } = prop;
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="">
            <h3>LOGIN</h3>
            <div className="inputs">
                <p>Username:</p>
                <input onChange={(e) => setUserName(e.target.value)}
                    type="text"
                    placeholder="username" />
                <p>Password:</p>
                <input onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="password" />

                <button onClick={() => setLogin(userName, password)}>Login</button>
            </div>
        </div>

    );
}